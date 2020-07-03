package ru.psu.repository;

import org.jooq.DSLContext;
import org.jooq.impl.DSL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.OrganizationPojo;
import ru.psu.test.Sequences;
import ru.psu.test.tables.Organization;

import java.util.List;

import static org.jooq.impl.DSL.table;
import static org.jooq.impl.DSL.field;
import static org.jooq.impl.DSL.name;
import static ru.psu.test.tables.Employee.EMPLOYEE;
import static ru.psu.test.tables.Organization.ORGANIZATION;

@Repository
public class OrganizationRepository {

    private final DSLContext dslContext;

    @Autowired
    public OrganizationRepository(DSLContext dslContext) {
        this.dslContext = dslContext;
    }

    public Long nextId() {
        return dslContext.nextval(Sequences.ORGANIZATION_ID_SEQ);
    }

    public List<OrganizationPojo> list(Pageable pageable) {
        Organization orgParent = ORGANIZATION.as("orgParent");
        return dslContext.select(
                ORGANIZATION.ID,
                ORGANIZATION.NAME,
                ORGANIZATION.PARENT_ID,
                orgParent.NAME.as("parentName"),
                DSL.count(EMPLOYEE.ID).as("countEmployees"))
                .from(ORGANIZATION)
                .leftJoin(orgParent).on(ORGANIZATION.PARENT_ID.eq(orgParent.ID))
                .leftJoin(EMPLOYEE).on(ORGANIZATION.ID.eq(EMPLOYEE.ORGANIZATION_ID))
                .where(ORGANIZATION.NAME.like(pageable.getFilterLike()))
                .groupBy(ORGANIZATION.ID, ORGANIZATION.NAME, ORGANIZATION.PARENT_ID, orgParent.NAME)
                .orderBy(ORGANIZATION.ID)
                .limit(pageable.getLimit())
                .offset(pageable.getOffset())
                .fetchInto(OrganizationPojo.class);
    }

    public List<ru.psu.test.tables.pojos.Organization> listParentOrganizations(Long id) {
        return dslContext.withRecursive("tree", "id")
                .as(dslContext.select(ORGANIZATION.ID).from(ORGANIZATION).where(ORGANIZATION.ID.eq(id))
                        .unionAll(dslContext.select(ORGANIZATION.ID)
                                .from(ORGANIZATION).innerJoin(table(name("tree")))
                                .on(ORGANIZATION.PARENT_ID.eq(field(name("tree", "id"), Long.class)))))
                .select(ORGANIZATION.ID, ORGANIZATION.NAME)
                .from(ORGANIZATION).where(ORGANIZATION.ID.notIn(
                        dslContext.select(field(name("tree", "id"), Long.class))
                                .from(table((name("tree"))))))
                .fetchInto(ru.psu.test.tables.pojos.Organization.class);
    }

    public boolean existsChildren(Long id) {
        return dslContext.fetchExists(ORGANIZATION, ORGANIZATION.PARENT_ID.eq(id));
    }

    public boolean existsEmployees(Long id) {
        return dslContext.fetchExists(EMPLOYEE, EMPLOYEE.ORGANIZATION_ID.eq(id));
    }

    public Integer countByFilter(String filter) {
        return dslContext.fetchCount(ORGANIZATION, ORGANIZATION.NAME.like(filter));
    }

    public List<ru.psu.test.tables.pojos.Organization> childrenPage(Long id, Pageable pageable) {
        return dslContext.selectFrom(ORGANIZATION)
                .where(ORGANIZATION.PARENT_ID.eq(id))
                .limit(pageable.getLimit())
                .offset(pageable.getOffset())
                .fetchInto(ru.psu.test.tables.pojos.Organization.class);
    }

    public Integer countChildren(Long id) {
        return dslContext.fetchCount(ORGANIZATION, ORGANIZATION.PARENT_ID.eq(id));
    }

    public List<ru.psu.test.tables.pojos.Organization> roots() {
        return dslContext.selectFrom(ORGANIZATION)
                .where(ORGANIZATION.PARENT_ID.isNull())
                .fetchInto(ru.psu.test.tables.pojos.Organization.class);
    }
}
