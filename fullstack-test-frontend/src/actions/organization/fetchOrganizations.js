import OrganizationApi from 'Api/organizationApi';
import {SetOrganizations} from './setOrganizations';
import {SetTotal} from '../setTotal';
import {SetIsLoading} from '../setIsLoading';

export const FetchOrganizations = ({
    OrganizationApi,
    SetOrganizations,
    SetTotal,
    SetIsLoading
}) => () => {
    return async (dispatch, getState) => {
        try {
            dispatch(SetIsLoading(true));

            const {
                page,
                pageSize,
                filter
            } = getState();

            const params = {
                pageNumber: page - 1,
                pageSize: pageSize,
                filter: filter
            };

            const {data: {
                content,
                total,
            }} = await OrganizationApi.List(params);

            dispatch(SetOrganizations(content));
            dispatch(SetTotal(total));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchOrganizations({
    OrganizationApi,
    SetOrganizations,
    SetTotal,
    SetIsLoading
});
