package ru.psu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.psu.model.Page;
import ru.psu.model.Pageable;
import ru.psu.model.pojos.OrganizationPojo;
import ru.psu.service.OrganizationService;
import ru.psu.test.tables.pojos.Organization;

import java.util.List;

@RestController
@RequestMapping("/organization")
public class OrganizationController {

    private final OrganizationService organizationsService;

    @Autowired
    public OrganizationController(OrganizationService organizationsService) {
        this.organizationsService = organizationsService;
    }

    @GetMapping("/{id}")
    public Organization get(@PathVariable Long id) {
        return organizationsService.get(id);
    }

    @PostMapping("/add")
    public void add(@RequestBody Organization organization) {
        organizationsService.add(organization);
    }

    @PutMapping("/update")
    public void update(@RequestBody Organization organization) {
        organizationsService.update(organization);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        organizationsService.delete(id);
    }

    @GetMapping("/list")
    public Page<OrganizationPojo> list(
            @RequestParam Integer pageNumber,
            @RequestParam Integer pageSize,
            @RequestParam String filter) {
        return organizationsService.list(new Pageable(pageSize, pageNumber, filter));
    }

    @GetMapping("/list/parent")
    public List<Organization> listParentOrganizations(@RequestParam(required = false) Long id) {
        return organizationsService.listParentOrganizations(id);
    }

    @GetMapping("{id}/exists/employees")
    public boolean existsEmployees(@PathVariable Long id) {
        return organizationsService.existsEmployees(id);
    }

    @GetMapping("/tree/roots")
    public List<Organization> list() {
        return organizationsService.roots();
    }

    @GetMapping("/{id}/tree/children")
    public Page<Organization> list(
            @PathVariable Long id,
            @RequestParam Integer pageNumber,
            @RequestParam Integer pageSize) {
        return organizationsService.childrenPage(id, new Pageable(pageSize, pageNumber, ""));
    }
}
