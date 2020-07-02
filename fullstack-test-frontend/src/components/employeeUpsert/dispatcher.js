import SetHeaderData from 'Action/setHeaderData';
import UpsertEmployee from 'Action/employee/upsertEmployee';
import SetEditEmployee from 'Action/employee/setEditEmployee';
import FetchOrganizationsForEmployee from 'Action/employee/fetchOrganizationsForEmployee';
import FetchEditEmployee from 'Action/employee/fetchEditEmployee';
import FetchDirectors from 'Action/employee/fetchDirectors';

export default dispatch => ({
    setHeaderData: data => dispatch(SetHeaderData(data)),
    upsertEmployee: employee => dispatch(UpsertEmployee(employee)),
    setEditEmployee: employee => dispatch(SetEditEmployee(employee)),
    fetchOrganizationsForEmployee: () => dispatch(FetchOrganizationsForEmployee()),
    fetchEditEmployee: id => dispatch(FetchEditEmployee(id)),
    fetchDirectors: employee => dispatch(FetchDirectors(employee))
});
