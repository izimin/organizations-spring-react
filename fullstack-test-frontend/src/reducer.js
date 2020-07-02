import DefaultState from './defaultState';

import {SET_IS_LOADING, MutateIsLoading} from 'Action/setIsLoading';
import {SET_TOTAL, MutateTotal} from 'Action/setTotal';
import {SET_FILTER, MutateFilter} from 'Action/setFilter';
import {SET_HEADER_DATA, MutateHeaderData} from 'Action/setHeaderData';
import {SET_PAGE, MutatePage} from 'Action/setPage';
import {SET_ORGANIZATIONS, MutateOrganizations} from 'Action/organization/setOrganizations';
import {SET_EMPLOYEES, MutateEmployees} from 'Action/employee/setEmployees';
import {SET_PARENT_ORGANIZATIONS, MutateParentOrganizations} from './actions/organization/setParentOrganizations';
import {SET_EDIT_ORGANIZATION, MutateEditOrganization} from './actions/organization/setEditOrganization';
import {SET_ORGANIZATIONS_FOR_EMPLOYEE, MutateOrganizationsForEmployee} from './actions/employee/setOrganizationsForEmployee';
import {SET_EDIT_EMPLOYEE, MutateEditEmployee} from './actions/employee/setEditEmployee';
import {SET_DIRECTORS, MutateDirectors} from './actions/employee/setDirectors';

export default function Reducer(state = DefaultState, {type, payload}) {
    switch (type) {

        case SET_IS_LOADING:
            return MutateIsLoading(state, payload);

        case SET_TOTAL:
            return MutateTotal(state, payload);

        case SET_HEADER_DATA:
            return MutateHeaderData(state, payload);

        case SET_PAGE:
            return MutatePage(state, payload);

        case SET_ORGANIZATIONS:
            return MutateOrganizations(state, payload);

        case SET_EMPLOYEES:
            return MutateEmployees(state, payload);

        case SET_PARENT_ORGANIZATIONS:
            return MutateParentOrganizations(state, payload);

        case SET_EDIT_ORGANIZATION:
            return MutateEditOrganization(state, payload);

        case SET_ORGANIZATIONS_FOR_EMPLOYEE:
            return MutateOrganizationsForEmployee(state, payload);

        case SET_EDIT_EMPLOYEE:
            return MutateEditEmployee(state, payload);

        case SET_DIRECTORS:
            return MutateDirectors(state, payload);

        case SET_FILTER:
            return MutateFilter(state, payload);

        default:
            return state;

    }
}
