import EmployeeApi from 'Api/employeeApi';
import {SetEmployees} from './setEmployees';
import {SetTotal} from '../setTotal';
import {SetIsLoading} from '../setIsLoading';

export const FetchEmployees = ({
    EmployeeApi,
    SetEmployees,
    SetTotal,
    SetIsLoading
}) => () => {
    return async (dispatch, getState) => {
        try {
            dispatch(SetIsLoading(true));

            const {
                page,
                pageSize,
                filter,
            } = getState();

            const params = {
                pageNumber: page - 1,
                pageSize: pageSize,
                filter: filter
            };

            const {data: {
                content,
                total,
            }} = await EmployeeApi.List(params);

            dispatch(SetEmployees(content));
            dispatch(SetTotal(total));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchEmployees({
    EmployeeApi,
    SetEmployees,
    SetTotal,
    SetIsLoading
});
