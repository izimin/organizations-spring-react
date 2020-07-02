import Update from 'immutability-helper';

export const SET_EDIT_ORGANIZATION = Symbol();

export const SetEditOrganization = data => ({
    type: SET_EDIT_ORGANIZATION,
    payload: data
});

export const MutateEditOrganization = (state, data) => Update(state, {
    editOrganization: {$set: data}
});

export default SetEditOrganization;