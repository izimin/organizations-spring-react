import FetchEmployees from 'Action/employee/fetchEmployees';
import FetchOrganizations from 'Action/organization/fetchOrganizations';
import SetFilter from 'Action/setFilter';

export default dispatch => ({
    setFilter: filter => dispatch(SetFilter(filter)),
    fetchEmployees: () => dispatch(FetchEmployees()),
    fetchOrganizations: () => dispatch(FetchOrganizations()),
});
