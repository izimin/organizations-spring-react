import Axios from 'axios';

export const Get = request => id => request.get(`/api/employee/${id}`);
export const List = request => params => request.get('/api/employee/list', {params});
export const ListOrganizations = request => () => request.get('/api/employee/list/organizations');
export const ListDirectors = request => params => request.get('/api/employee/list/directors', {params});
export const Add = request => employee => request.post('/api/employee/add', employee);
export const Update = request => employee => request.put('/api/employee/update', employee);
export const Delete = request => id => request.delete(`/api/employee/delete/${id}`);
export const ListRoots = request => () => request.get('/api/employee/tree/roots');
export const ListChildren = request => (id, params) => request.get(`/api/employee/${id}/tree/children`, {params});

export default ({
    Get: Get(Axios),
    List: List(Axios),
    ListOrganizations: ListOrganizations(Axios),
    ListDirectors: ListDirectors(Axios),
    Add: Add(Axios),
    Update: Update(Axios),
    Delete: Delete(Axios),
    ListRoots: ListRoots(Axios),
    ListChildren: ListChildren(Axios)
});