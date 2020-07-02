package ru.psu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.psu.exception.ValidationException;
import ru.psu.model.Page;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.EmployeePojo;
import ru.psu.repository.EmployeeRepository;
import ru.psu.test.tables.daos.EmployeeDao;
import ru.psu.test.tables.daos.OrganizationDao;
import ru.psu.test.tables.pojos.Employee;
import ru.psu.test.tables.pojos.Organization;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeDao employeeDao;
    private final OrganizationDao organizationDao;
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeDao employeeDao, OrganizationDao organizationDao, EmployeeRepository employeeRepository) {
        this.employeeDao = employeeDao;
        this.organizationDao = organizationDao;
        this.employeeRepository = employeeRepository;
    }

    // Получение одного сотрудника
    public Employee get(Long id) {
        return employeeDao.fetchOneById(id);
    }

    // Список сотрудников
    public Page<EmployeePojo> list(Pageable pageable) {
        return new Page<>(employeeRepository.list(pageable), countByFilter(pageable.getFilterLike()), pageable.getPageSize());
    }

    public Integer countByFilter(String filter) {
        return employeeRepository.countByFilter(filter);
    }

    // Добавление сотрудника
    public void add(Employee employee) {
        employee.setId(employeeRepository.nextId());
        employeeDao.insert(employee);
    }

    // Изменение сотрудника
    public void update(Employee employee) {

        // Если организация сменилась - ставим подчиненным в качестве руководителя null
        if (!get(employee.getId()).getOrganizationId().equals(employee.getId())) {
            employeeRepository.setNullDirector(employee.getId());
        }

        employeeDao.update(employee);
    }

    // Удаление сотрудника
    public void delete(Long id) {
        if (employeeRepository.existsChildren(id)) {
            throw new ValidationException("Сотрудник не может быть удалена!");
        }
        employeeDao.deleteById(id);
    }

    // Список возможных директоров для сотрудника
    public List<Employee> listDirectors(Long id, Long organizationId) {
        return employeeRepository.listDirectors(id, organizationId);
    }

    // Список всех организаций для сотрудника
    public List<Organization> listAllOrganizations() {
        return organizationDao.findAll();
    }

    // Получение списка корневых сотрудников
    public List<Employee> roots() {
        return employeeDao.fetchByDirectorId((Long) 1L);
    }

    // Получение подчиненных сотрудников постранично
    public Page<Employee> childrenPage(Long id, Pageable pageable) {
        return new Page<>(employeeRepository.childrenPage(id, pageable), countChildren(id), pageable.getPageSize());
    }

    // Количество подчиненных в у конкретного сотрудника
    private Integer countChildren(Long id) {
        return employeeRepository.countChildren(id);
    }
}
