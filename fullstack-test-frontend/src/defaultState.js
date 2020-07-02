export default {
    organizations: [],
    parentOrganizations: [],
    editOrganization: {id: null, name: '', parentId: null},
    editEmployee: {id: null, name: '', organizationId: null, directorId: null},
    employees: [],
    directors: [],
    total: 0,
    page: 1,
    pageSize: 5,
    isLoading: false,
    title: 'Список организаций',
    isShowAddButton: true,
    type: 'organization',
    organizationsForEmployee: [],
    filter: ''
};
