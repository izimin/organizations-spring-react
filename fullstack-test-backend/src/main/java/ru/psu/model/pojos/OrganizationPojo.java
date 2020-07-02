package ru.psu.model.pojos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.psu.test.tables.pojos.Organization;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationPojo extends Organization {

    private String parentName;
    private Integer countEmployees;

}
