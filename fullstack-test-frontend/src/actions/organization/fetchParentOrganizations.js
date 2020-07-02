import OrganizationApi from 'Api/organizationApi';
import {SetIsLoading} from '../setIsLoading';
import {SetParentOrganizations} from './setParentOrganizations';

export const FetchParentOrganizations = ({
    OrganizationApi,
    SetParentOrganizations,
    SetIsLoading
}) => id => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));
            const {data} = await OrganizationApi.ListParent({id: id});
            console.log(data);
            dispatch(SetParentOrganizations(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchParentOrganizations({
    OrganizationApi,
    SetParentOrganizations,
    SetIsLoading
});
