import Update from 'immutability-helper';

export const SET_EMPLOYEES = Symbol();

export const SetEmployees = data => ({
    type: SET_EMPLOYEES,
    payload: data
});

export const MutateEmployees = (state, data) => Update(state, {
    employees: {$set: data}
});
