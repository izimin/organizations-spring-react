import EmployeeApi from '../../api/employeeApi';
import FetchEmployees from './fetchEmployees';
import {SetPage} from '../setPage';

export const DeleteEmployee = ({
    EmployeeApi,
    FetchEmployees,
    SetPage
}) => employee => async (dispatch, getState) => {
    console.log(employee);

    try {
        await EmployeeApi.Delete(employee.id);

        const {
            page,
            pageSize,
            total,
        } = getState();
        debugger;
        if (Math.ceil((total - 1) / pageSize) < page) {
            SetPage(page - 1);
        }

        dispatch(FetchEmployees());

    } catch {
        //
    }
};

export default DeleteEmployee({
    EmployeeApi,
    FetchEmployees,
    SetPage
});
