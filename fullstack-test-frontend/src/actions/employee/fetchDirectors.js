import EmployeeApi from 'Api/employeeApi';
import {SetIsLoading} from '../setIsLoading';
import {SetDirectors} from './setDirectors';
import {SetEditEmployee} from './setEditEmployee';

export const FetchDirectors = ({
    EmployeeApi,
    SetDirectors,
    SetEditEmployee,
    SetIsLoading
}) => employee => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));
            const {data} = await EmployeeApi.ListDirectors({id: employee.id, organizationId: employee.organizationId});
            console.log(data);
            dispatch(SetDirectors(data));
            dispatch(SetEditEmployee(employee));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchDirectors({
    EmployeeApi,
    SetDirectors,
    SetIsLoading,
    SetEditEmployee
});
