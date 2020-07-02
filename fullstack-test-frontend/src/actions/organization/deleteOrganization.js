import OrganizationApi from '../../api/organizationApi';
import FetchOrganizations from './fetchOrganizations';

export const DeleteOrganization = ({
    OrganizationApi,
    FetchOrganizations
}) => organization => async dispatch => {
    console.log(organization);

    try {
        await OrganizationApi.Delete(organization.id);

        dispatch(FetchOrganizations());
    } catch {
        //
    }
};

export default DeleteOrganization({
    OrganizationApi,
    FetchOrganizations
});
