import {SetPage} from './setPage';

export const UpdatePage = ({
    SetPage,
}) => ({page, fetch}) => dispatch => {
    dispatch(SetPage(page));
    dispatch(fetch);
};

export default UpdatePage({
    SetPage
});
