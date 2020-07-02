package ru.psu.model.pojos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.psu.test.tables.pojos.Employee;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeePojo extends Employee {

    private String organizationName;
    private String directorName;

}
