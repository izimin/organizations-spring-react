import Update from 'immutability-helper';

export const SET_PAGE = Symbol();

export const SetPage = value => ({
    type: SET_PAGE,
    payload: value
});

export const MutatePage = (state, value) => Update(state, {
    page: {$set: value}
});

export default SetPage;