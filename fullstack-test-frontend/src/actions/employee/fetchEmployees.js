import EmployeeApi from 'Api/employeeApi';
import {SetEmployees} from './setEmployees';
import {SetTotal} from '../setTotal';
import {SetIsLoading} from '../setIsLoading';
import {SetPage} from '../setPage';
import {SetEditEmployee} from './setEditEmployee';

export const FetchEmployees = ({
    EmployeeApi,
    SetEmployees,
    SetEditEmployee,
    SetTotal,
    SetIsLoading,
    SetPage
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
                pageNumber: filter !== '' ? 0 : page - 1,
                pageSize: pageSize,
                filter: filter
            };

            const {data: {
                content,
                total,
            }} = await EmployeeApi.List(params);

            dispatch(SetEmployees(content));
            dispatch(SetEditEmployee({id: null, name: '', organizationId: null, directorId: null}));
            dispatch(SetTotal(total));
            dispatch(SetPage(params.pageNumber + 1));
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
    SetEditEmployee,
    SetTotal,
    SetPage,
    SetIsLoading
});
