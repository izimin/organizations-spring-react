import Update from 'immutability-helper';

export const SET_TOTAL = Symbol();

export const SetTotal = value => ({
    type: SET_TOTAL,
    payload: value
});

export const MutateTotal = (state, value) => Update(state, {
    total: {$set: value}
});
