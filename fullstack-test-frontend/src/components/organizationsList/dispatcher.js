import UpdatePage from 'Action/updatePage';
import SetHeaderData from 'Action/setHeaderData';
import SetPage from 'Action/setPage';
import FetchOrganizations from 'Action/organization/fetchOrganizations';
import DeleteOrganization from 'Action/organization/deleteOrganization';
import SetEditOrganization from 'Action/organization/setEditOrganization';

export default dispatch => ({
    updatePage: page => dispatch(UpdatePage(page)),
    setHeaderData: data => dispatch(SetHeaderData(data)),
    setPage: page => dispatch(SetPage(page)),
    fetchOrganizations: () => dispatch(FetchOrganizations()),
    deleteOrganization: organization => dispatch(DeleteOrganization(organization)),
    setEditOrganization: organization => dispatch(SetEditOrganization(organization))
});
