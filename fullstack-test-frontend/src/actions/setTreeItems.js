import Update from 'immutability-helper';

export const SET_TREE_ITEMS = Symbol();

export const SetTreeItems = data => ({
    type: SET_TREE_ITEMS,
    payload: data
});

export const MutateTreeItems = (state, data) => Update(state, {
    treeItems: {$set: data}
});

export default SetTreeItems;
