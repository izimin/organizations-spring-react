import EmployeeApi from 'Api/employeeApi';
import {SetIsLoading} from '../setIsLoading';
import {SetRootEmployees} from './setRootEmployees';

export const FetchRootEmployees = ({
    EmployeeApi,
    SetRootEmployees,
    SetIsLoading
}) => id => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));
            const {data} = await EmployeeApi.ListRoots({id: id});
            console.log(data);
            dispatch(SetRootEmployees(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchRootEmployees ({
    EmployeeApi,
    SetRootEmployees,
    SetIsLoading
});
