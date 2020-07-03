import SetHeaderData from 'Action/setHeaderData';
import FetchChildren from 'Action/employee/fetchChildren';
import SetTreeItems from 'Action/setTreeItems';
import FetchRootEmployees from 'Action/employee/fetchRootEmployees';

export default dispatch => ({
    setHeaderData: data => dispatch(SetHeaderData(data)),
    fetchRootEmployees: () => dispatch(FetchRootEmployees()),
    fetchChildren: (id, pageNumber) => dispatch(FetchChildren(id, pageNumber)),
    setTreeItems: treeItems => dispatch(SetTreeItems(treeItems)),
});
