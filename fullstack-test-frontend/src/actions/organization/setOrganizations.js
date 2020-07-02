import Update from 'immutability-helper';

export const SET_ORGANIZATIONS = Symbol();

export const SetOrganizations = data => ({
    type: SET_ORGANIZATIONS,
    payload: data
});

export const MutateOrganizations = (state, data) => Update(state, {
    organizations: {$set: data}
});
