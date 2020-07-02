import Update from 'immutability-helper';

export const SET_PARENT_ORGANIZATIONS = Symbol();

export const SetParentOrganizations = data => ({
    type: SET_PARENT_ORGANIZATIONS,
    payload: data
});

export const MutateParentOrganizations = (state, data) => Update(state, {
    parentOrganizations: {$set: data}
});
