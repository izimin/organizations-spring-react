import SetHeaderData from 'Action/setHeaderData';
import FetchRootOrganizations from 'Action/organization/fetchRootOrganizations';
import FetchChildren from 'Action/organization/fetchChildren';
import SetTreeItems from 'Action/setTreeItems';

export default dispatch => ({
    setHeaderData: data => dispatch(SetHeaderData(data)),
    fetchRootOrganizations: () => dispatch(FetchRootOrganizations()),
    fetchChildren: (id, pageNumber) => dispatch(FetchChildren(id, pageNumber)),
    setTreeItems: treeItems => dispatch(SetTreeItems(treeItems)),
});
