import EmployeeApi from 'Api/employeeApi';
import {SetIsLoading} from '../setIsLoading';
import {SetOrganizationsForEmployee} from './setOrganizationsForEmployee';

export const FetchOrganizationsForEmployee = ({
    EmployeeApi,
    SetOrganizationsForEmployee,
    SetIsLoading
}) => () => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));
            const {data} = await EmployeeApi.ListOrganizations();
            console.log(data);
            dispatch(SetOrganizationsForEmployee(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchOrganizationsForEmployee({
    EmployeeApi,
    SetOrganizationsForEmployee,
    SetIsLoading
});
