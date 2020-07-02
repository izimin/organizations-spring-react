package ru.psu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.psu.exception.ValidationException;
import ru.psu.model.Page;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.OrganizationPojo;
import ru.psu.repository.OrganizationRepository;
import ru.psu.test.tables.daos.OrganizationDao;
import ru.psu.test.tables.pojos.Organization;

import java.util.List;

@Service
public class OrganizationService {

    private final OrganizationDao organizationDao;
    private final OrganizationRepository organizationRepository;

    @Autowired
    public OrganizationService(OrganizationDao organizationDao, OrganizationRepository organizationRepository) {
        this.organizationDao = organizationDao;
        this.organizationRepository = organizationRepository;
    }

    // Получение одной организации
    public Organization get(Long id) {
        return organizationDao.fetchOneById(id);
    }

    public Integer countByFilter(String filter) {
        return organizationRepository.countByFilter(filter);
    }

    // Добавление организации
    @Transactional
    public void add(Organization organization) {
        organization.setId(organizationRepository.nextId());
        organizationDao.insert(organization);
    }

    // Изменение организации
    @Transactional
    public void update(Organization organization) {
        organizationDao.update(organization);
    }

    // Удаление организации
    @Transactional
    public void delete(Long id) {
        if (organizationRepository.existsChildren(id)) {
            throw new ValidationException("Организация не может быть удалена!");
        }
        organizationDao.deleteById(id);
    }

    // Список организаций
    public Page<OrganizationPojo> list(Pageable pageable) {
        return new Page<>(organizationRepository.list(pageable), countByFilter(pageable.getFilterLike()), pageable.getPageSize());
    }

    // Получение списка родительских организаций
    public List<Organization> listParentOrganizations(Long id) {
        return organizationRepository.listParentOrganizations(id);
    }

    // Проверка на наличие сотрудников в организации
    public boolean existsEmployees(Long id) {
        return organizationRepository.existsEmployees(id);
    }

    // Получение списка корневых организаций
    public List<Organization> roots() {
        return organizationDao.fetchByParentId((Long) 1L);
    }

    // Получение дочерних организаций постранично
    public Page<Organization> childrenPage(Long id, Pageable pageable) {
        return new Page<>(organizationRepository.childrenPage(id, pageable), countChildren(id), pageable.getPageSize());
    }

    // Количество дочерних элементов у конкретной орагнизации
    public Integer countChildren(Long id) {
        return organizationRepository.countChildren(id);
    }
}