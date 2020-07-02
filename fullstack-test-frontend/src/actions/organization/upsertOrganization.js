import OrganizationApi from '../../api/organizationApi';
import FetchOrganizations from './fetchOrganizations';

export const UpsertOrganization = ({
    OrganizationApi,
    FetchOrganizations
}) => organization => async dispatch => {
    try {
        if (organization.id) {
            OrganizationApi.Update(organization);
        } else {
            OrganizationApi.Add(organization);
        }
        dispatch(FetchOrganizations());
    } catch {
        //
    }
    return false;
};

export default UpsertOrganization({
    OrganizationApi,
    FetchOrganizations
});
