import EmployeeApi from '../../api/employeeApi';
import FetchEmployees from './fetchEmployees';

export const UpsertEmployee = ({
    EmployeeApi,
    FetchEmployees
}) => employee => async dispatch => {
    try {
        if (employee.id) {
            EmployeeApi.Update(employee);
        } else {
            EmployeeApi.Add(employee);
        }
        dispatch(FetchEmployees());
    } catch {
        //
    }
    return false;
};

export default UpsertEmployee({
    EmployeeApi,
    FetchEmployees
});
