import EmployeeApi from 'Api/employeeApi';
import {SetIsLoading} from '../setIsLoading';
import {SetEditEmployee} from './setEditEmployee';

export const FetchEditEmployee = ({
    EmployeeApi,
    SetEditEmployee,
    SetIsLoading
}) => id => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));

            const {data} = await EmployeeApi.Get(id);
            dispatch(SetEditEmployee(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchEditEmployee({
    EmployeeApi,
    SetEditEmployee,
    SetIsLoading
});
