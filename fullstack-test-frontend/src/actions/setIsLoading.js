import Update from 'immutability-helper';

export const SET_IS_LOADING = Symbol();

export const SetIsLoading = value => ({
    type: SET_IS_LOADING,
    payload: value
});

export const MutateIsLoading = (state, value) => Update(state, {
    isLoading: {$set: value}
});
