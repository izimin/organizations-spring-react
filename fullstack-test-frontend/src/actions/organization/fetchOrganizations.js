import OrganizationApi from 'Api/organizationApi';
import {SetOrganizations} from './setOrganizations';
import {SetTotal} from '../setTotal';
import {SetIsLoading} from '../setIsLoading';
import {SetPage} from '../setPage';
import {SetEditOrganization} from './setEditOrganization';

export const FetchOrganizations = ({
    OrganizationApi,
    SetOrganizations,
    SetEditOrganization,
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
                pageNumber: filter !== '' ? 0 : page - 1,
                pageSize: pageSize,
                filter: filter
            };

            const {data: {
                content,
                total,
            }} = await OrganizationApi.List(params);

            dispatch(SetOrganizations(content));
            dispatch(SetEditOrganization({id: null, name: '', parentId: null}));
            dispatch(SetTotal(total));
            dispatch(SetPage(params.pageNumber + 1));
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
    SetEditOrganization,
    SetTotal,
    SetPage,
    SetIsLoading
});
