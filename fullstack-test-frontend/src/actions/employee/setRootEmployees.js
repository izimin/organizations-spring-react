import Update from 'immutability-helper';

export const SET_ROOT_EMPLOYEES = Symbol();

export const SetRootEmployees = data => ({
    type: SET_ROOT_EMPLOYEES,
    payload: data
});

export const MutateRootEmployees = (state, data) => Update(state, {
    rootEmployees: {$set: data}
});
