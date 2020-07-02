import EmployeeApi from '../../api/employeeApi';
import FetchEmployees from './fetchEmployees';

export const DeleteEmployee = ({
    EmployeeApi,
    FetchEmployees
}) => employee => async dispatch => {
    console.log(employee);

    try {
        await EmployeeApi.Delete(employee.id);

        dispatch(FetchEmployees());
    } catch {
        //
    }
};

export default DeleteEmployee({
    EmployeeApi,
    FetchEmployees
});
