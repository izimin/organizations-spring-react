import Update from 'immutability-helper';

export const SET_ROOT_ORGANIZATIONS = Symbol();

export const SetRootOrganizations = data => ({
    type: SET_ROOT_ORGANIZATIONS,
    payload: data
});

export const MutateRootOrganizations = (state, data) => Update(state, {
    rootOrganizations: {$set: data}
});
