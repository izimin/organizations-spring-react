import Update from 'immutability-helper';

export const SET_HEADER_DATA = Symbol();

export const SetHeaderData = value => ({
    type: SET_HEADER_DATA,
    payload: value
});

export const MutateHeaderData = (state, value) => Update(state, {
    title: {$set: value.title},
    isShowAddButton: {$set: value.isShowAddButton},
    type: {$set: value.type}
});

export default SetHeaderData;