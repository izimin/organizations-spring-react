import Update from 'immutability-helper';

export const SET_DIRECTORS = Symbol();

export const SetDirectors = data => ({
    type: SET_DIRECTORS,
    payload: data
});

export const MutateDirectors = (state, data) => Update(state, {
    directors: {$set: data}
});
