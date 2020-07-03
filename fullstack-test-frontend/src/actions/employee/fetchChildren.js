import EmployeeApi from 'Api/employeeApi';
import {SetIsLoading} from '../setIsLoading';
import {SetTreeItems} from '../setTreeItems';

export const FetchChildren = ({
    EmployeeApi,
    SetTreeItems,
    SetIsLoading
}) => (id, pageNumber) => {
    return async (dispatch, getState) => {
        try {
            dispatch(SetIsLoading(true));

            const {
                treeItems,
                pageSize
            } = getState();

            const params = {
                pageNumber: treeItems[id].pageNumber - 1,
                pageSize: pageSize,
            };

            const {data: {
                content,
                total,
            }} = await EmployeeApi.ListChildren(id, params);

            content.map(child => {
                if (!treeItems[child.id]) {
                    treeItems[child.id] = {
                        pageNumber: 1,
                        isExpand: false,
                        children: []
                    };
                }
            });

            treeItems[id].pageNumber=pageNumber;
            treeItems[id].children=content;
            treeItems[id].total=total;
            dispatch(SetTreeItems(treeItems));
        } catch {
            //
        } finally {
            dispatch(SetIsLoading(false));
        }
    };
};

export default FetchChildren({
    EmployeeApi,
    SetTreeItems,
    SetIsLoading,
});
