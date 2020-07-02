import UpdatePage from 'Action/updatePage';
import SetHeaderData from 'Action/setHeaderData';
import SetPage from 'Action/setPage';
import FetchEmployees from 'Action/employee/fetchEmployees';
import DeleteEmployee from 'Action/employee/deleteEmployee';

export default dispatch => ({
    updatePage: page => dispatch(UpdatePage(page)),
    setHeaderData: data => dispatch(SetHeaderData(data)),
    setPage: page => dispatch(SetPage(page)),
    fetchEmployees: () => dispatch(FetchEmployees()),
    deleteEmployee: employee => dispatch(DeleteEmployee(employee))
});
