package ru.psu.repository;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.EmployeePojo;
import ru.psu.test.Sequences;
import ru.psu.test.tables.Employee;

import java.util.List;

import static org.jooq.impl.DSL.*;
import static ru.psu.test.tables.Employee.EMPLOYEE;
import static ru.psu.test.tables.Organization.ORGANIZATION;

@Repository
public class EmployeeRepository {

    private final DSLContext dslContext;

    @Autowired
    public EmployeeRepository(DSLContext dslContext) {
        this.dslContext = dslContext;
    }

    public Long nextId() {
        return dslContext.nextval(Sequences.EMPLOYEE_ID_SEQ);
    }

    public List<EmployeePojo> list(Pageable pageable) {
        Employee empDirector = EMPLOYEE.as("empDirector");
        return dslContext.select(
                EMPLOYEE.ID,
                EMPLOYEE.NAME,
                EMPLOYEE.ORGANIZATION_ID,
                EMPLOYEE.DIRECTOR_ID,
                ORGANIZATION.NAME.as("organizationName"),
                empDirector.NAME.as("directorName"))
                .from(EMPLOYEE)
                .leftJoin(empDirector).on(EMPLOYEE.DIRECTOR_ID.eq(empDirector.ID))
                .leftJoin(ORGANIZATION).on(EMPLOYEE.ORGANIZATION_ID.eq(ORGANIZATION.ID))
                .where(ORGANIZATION.NAME.like(pageable.getFilterLike()).or(EMPLOYEE.NAME.like(pageable.getFilterLike())))
                .orderBy(EMPLOYEE.ID)
                .limit(pageable.getLimit())
                .offset(pageable.getOffset())
                .fetchInto(EmployeePojo.class);
    }

    public boolean existsChildren(Long id) {
        return dslContext.fetchExists(EMPLOYEE, EMPLOYEE.DIRECTOR_ID.eq(id));
    }

    public Integer countByFilter(String filter) {
        return dslContext.fetchCount(EMPLOYEE.join(ORGANIZATION).on(EMPLOYEE.ORGANIZATION_ID.eq(ORGANIZATION.ID)),
                ORGANIZATION.NAME.like(filter).or(EMPLOYEE.NAME.like(filter)));
    }

    public void setNullDirector(Long id) {
        dslContext.update(EMPLOYEE)
                .set(EMPLOYEE.DIRECTOR_ID, (Long) null)
                .where(EMPLOYEE.DIRECTOR_ID.in(id))
                .execute();
    }

    public List<ru.psu.test.tables.pojos.Employee> listDirectors(Long id, Long organizationId) {
        return dslContext.withRecursive("tree", "id")
                .as(dslContext.select(EMPLOYEE.ID).from(EMPLOYEE).where(EMPLOYEE.ID.eq(id))
                        .unionAll(dslContext.select(EMPLOYEE.ID)
                                .from(EMPLOYEE).innerJoin(table(name("tree")))
                                .on(EMPLOYEE.DIRECTOR_ID.eq(field(name("tree", "id"), Long.class)))))
                .select(EMPLOYEE.ID, EMPLOYEE.NAME)
                .from(EMPLOYEE).where(EMPLOYEE.ID.notIn(
                        select(field(name("tree", "id"), Long.class))
                                .from(table((name("tree")))))).and(EMPLOYEE.ORGANIZATION_ID.eq(organizationId))
                .fetchInto(ru.psu.test.tables.pojos.Employee.class);
    }

    public List<ru.psu.test.tables.pojos.Employee> childrenPage(Long id, Pageable pageable) {
        return dslContext.selectFrom(EMPLOYEE)
                .where(EMPLOYEE.DIRECTOR_ID.eq(id))
                .limit(pageable.getLimit())
                .offset(pageable.getOffset())
                .fetchInto(ru.psu.test.tables.pojos.Employee.class);
    }

    public Integer countChildren(Long id) {
        return dslContext.fetchCount(EMPLOYEE, EMPLOYEE.DIRECTOR_ID.eq(id));
    }
}
