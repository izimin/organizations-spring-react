import OrganizationApi from 'Api/organizationApi';
import {SetIsLoading} from '../setIsLoading';
import {SetRootOrganizations} from './setRootOrganizations';

export const FetchRootOrganizations = ({
    OrganizationApi,
    SetRootOrganizations,
    SetIsLoading
}) => id => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));
            const {data} = await OrganizationApi.ListRoots({id: id});
            console.log(data);
            dispatch(SetRootOrganizations(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchRootOrganizations({
    OrganizationApi,
    SetRootOrganizations,
    SetIsLoading
});
