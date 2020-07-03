package ru.psu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.psu.model.Page;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.EmployeePojo;
import ru.psu.service.EmployeeService;
import ru.psu.test.tables.pojos.Employee;
import ru.psu.test.tables.pojos.Organization;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/{id}")
    public Employee get(@PathVariable Long id) {
        return employeeService.get(id);
    }

    @PostMapping("/add")
    public void add(@RequestBody Employee employee) {
        employeeService.add(employee);
    }

    @PutMapping("/update")
    public void update(@RequestBody Employee employee) {
        employeeService.update(employee);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        employeeService.delete(id);
    }

    @GetMapping("/list")
    public Page<EmployeePojo> listRoot(
            @RequestParam Integer pageNumber,
            @RequestParam Integer pageSize,
            @RequestParam String filter) {
        return employeeService.list(new Pageable(pageSize, pageNumber, filter));
    }

    @GetMapping("/list/directors")
    public List<Employee> listDirectors(
            @RequestParam(required = false) Long id,
            @RequestParam Long organizationId) {
        return employeeService.listDirectors(id, organizationId);
    }

    @GetMapping("/list/organizations")
    public List<Organization> listAllOrganizations() {
        return employeeService.listAllOrganizations();
    }

    @GetMapping("/tree/roots")
    public List<Employee> listRoots() {
        return employeeService.roots();
    }

    @GetMapping("/{id}/tree/children")
    public Page<Employee> childrenPage(
            @PathVariable Long id,
            @RequestParam Integer pageNumber,
            @RequestParam Integer pageSize) {
        return employeeService.childrenPage(id, new Pageable(pageSize, pageNumber, ""));
    }
}
