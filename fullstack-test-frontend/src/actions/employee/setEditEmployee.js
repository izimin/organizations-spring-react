import Update from 'immutability-helper';

export const SET_EDIT_EMPLOYEE = Symbol();

export const SetEditEmployee = data => ({
    type: SET_EDIT_EMPLOYEE,
    payload: data
});

export const MutateEditEmployee = (state, data) => Update(state, {
    editEmployee: {$set: data}
});

export default SetEditEmployee;