import Update from 'immutability-helper';

export const SET_ORGANIZATIONS_FOR_EMPLOYEE = Symbol();

export const SetOrganizationsForEmployee = data => ({
    type: SET_ORGANIZATIONS_FOR_EMPLOYEE,
    payload: data
});

export const MutateOrganizationsForEmployee = (state, data) => Update(state, {
    organizationsForEmployee: {$set: data}
});
