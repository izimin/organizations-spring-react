import Axios from 'axios';

export const Get = request => id => request.get(`/api/organization/${id}`);
export const List = request => params => request.get('/api/organization/list', {params});
export const ListParent = request => params => request.get('/api/organization/list/parent', {params});
export const Add = request => organization => request.post('/api/organization/add', organization);
export const Update = request => organization => request.put('/api/organization/update', organization);
export const Delete = request => id => request.delete(`/api/organization/delete/${id}`);
export const ListRoots = request => () => request.get('/api/organization/tree/roots');
export const ListChildren = request => (id, params) => request.get(`/api/organization/${id}/tree/children`, {params});

export default ({
    Get: Get(Axios),
    List: List(Axios),
    ListParent: ListParent(Axios),
    Add: Add(Axios),
    Update: Update(Axios),
    Delete: Delete(Axios),
    ListRoots: ListRoots(Axios),
    ListChildren: ListChildren(Axios)
});