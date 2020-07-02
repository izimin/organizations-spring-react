import Update from 'immutability-helper';

export const SET_FILTER = Symbol();

export const SetFilter = value => ({
    type: SET_FILTER,
    payload: value
});

export const MutateFilter = (state, value) => Update(state, {
    filter: {$set: value}
});

export default SetFilter;