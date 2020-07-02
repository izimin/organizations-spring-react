import SetHeaderData from 'Action/setHeaderData';
import UpsertOrganization from 'Action/organization/upsertOrganization';
import SetEditOrganization from 'Action/organization/setEditOrganization';
import FetchParentOrganizations from 'Action/organization/fetchParentOrganizations';
import FetchEditOrganization from 'Action/organization/fetchEditOrganization';

export default dispatch => ({
    setHeaderData: data => dispatch(SetHeaderData(data)),
    upsertOrganization: organization => dispatch(UpsertOrganization(organization)),
    setEditOrganization: organization => dispatch(SetEditOrganization(organization)),
    fetchParentOrganizations: id => dispatch(FetchParentOrganizations(id)),
    fetchEditOrganization: id => dispatch(FetchEditOrganization(id)),
});
