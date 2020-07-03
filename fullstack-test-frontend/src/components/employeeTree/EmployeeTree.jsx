import React, {useEffect} from 'react';
import {FaChevronDown, FaChevronRight, FaArrowCircleUp, FaArrowCircleDown} from 'react-icons/fa';


export const EmployeeTree = () => ({
    classes,

    rootEmployees = [],
    treeItems = {},

    setHeaderData,
    fetchRootEmployees,
    fetchChildren,
    setTreeItems
}) => {
    useEffect(() => {
        setHeaderData({title: 'Дерево сотрудников', isShowAddButton: false, type: 'organization'});
        fetchRootEmployees();
    }, []);

    rootEmployees.map(or => {
        if (!treeItems[or.id]) {
            treeItems[or.id] = {
                pageNumber: 1,
                isExpand: false,
                children: []
            };
            setTreeItems(treeItems);
        }
    });

    const onChange = id => {
        treeItems[id].isExpand = !treeItems[id].isExpand;
        fetchChildren(id, treeItems[id].pageNumber);
        setTreeItems(treeItems);
        fetchRootEmployees();
    };

    const TreeItem = ({items}) => {
        return (
            <div>
                <ul>
                    {items.map(item => {
                        const isNotShow = !treeItems || !treeItems[item.id] || !treeItems[item.id].isExpand;
                        return (
                            <li className={classes.item} key={item.id}>
                                <div className={classes.name}>
                                    <button className={classes.button}
                                        onClick={() => {
                                                onChange(item.id);
                                            }}>
                                        {isNotShow ? (<FaChevronRight size={15} color="#A5AEB3"/>)
                                            : (<FaChevronDown size={15} color="#A5AEB3"/>)}
                                    </button>
                                    <h3>{item.name}</h3>
                                    <div className={classes.paging}>
                                        <button className={classes.button}
                                            onClick={() => {

                                                }}>
                                            <FaArrowCircleUp size={15} color="#A5AEB3"/>
                                        </button>
                                        <button className={classes.button}
                                            onClick={() => {

                                                }}>
                                            <FaArrowCircleDown size={15} color="#A5AEB3"/>
                                        </button>
                                    </div>
                                </div>
                                {!isNotShow ? (
                                    <TreeItem
                                        items={treeItems[item.id].children}/>
                                ) : (
                                    null
                                )
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    return (
        <div>
            {rootEmployees.length ? (
                <div>
                    <TreeItem
                        items={rootEmployees}
                    />
                </div>
            ) : (
                <div className={classes.placeholder}>
                    Ничего не найдено
                </div>
            )
            }
        </div>
    );
};

export default EmployeeTree;
