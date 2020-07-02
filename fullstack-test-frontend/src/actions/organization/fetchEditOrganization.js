import OrganizationApi from 'Api/organizationApi';
import {SetIsLoading} from '../setIsLoading';
import {SetEditOrganization} from './setEditOrganization';

export const FetchEditOrganization = ({
    OrganizationApi,
    SetEditOrganization,
    SetIsLoading
}) => id => {
    return async dispatch => {
        try {
            dispatch(SetIsLoading(true));

            const {data} = await OrganizationApi.Get(id);
            dispatch(SetEditOrganization(data));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchEditOrganization({
    OrganizationApi,
    SetEditOrganization,
    SetIsLoading
});
