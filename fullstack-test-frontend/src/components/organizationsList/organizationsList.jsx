import React, {useEffect} from 'react';
import Pagination from '../pagination';
import {FiTrash2} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

export const OrganizationsList = () => ({
    classes,

    total,
    page,
    pageSize,
    organizations = [],
    updatePage,
    setHeaderData,
    setPage,
    fetchOrganizations,
    deleteOrganization,
    setEditOrganization
}) => {
    useEffect(() => {
        setPage(1);
        setHeaderData({title: 'Список организаций', isShowAddButton: true});
        fetchOrganizations();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {organizations.length ?
                    organizations.map(organization => (
                        <div key={organization.id} className={classes.row}>
                            <div className={classes.cell}/>
                            <div className={classes.cell}>
                                {organization.id}
                            </div>
                            <div className={classes.cell}>
                                {organization.name}
                            </div>
                            <div className={classes.cell}>
                                {organization.parentId}
                            </div>
                            <div className={classes.cell}>
                                {organization.parentName}
                            </div>
                            <div className={classes.cell}>
                                {organization.countEmployees}
                            </div>
                            <div className={classes.cell}>
                                <NavLink
                                    title={'Изменить'}
                                    className={classes.button}
                                    onClick={() => setEditOrganization(organization)}
                                    to={`/organization/edit/${organization.id}`}
                                >
                                    <FiEdit size={30} color="#A5AEB3"/>
                                </NavLink>
                            </div>
                            <div className={classes.cell}>
                                <button
                                    title={'Удалить'}
                                    className={classes.button}
                                    onClick={() => deleteOrganization(organization)}
                                >
                                    <FiTrash2 size={30} color="#A5AEB3"/>
                                </button>
                            </div>
                            <div className={classes.cell}/>
                        </div>
                )) : (
                    <div className={classes.placeholder}>
                        Ничего не найдено
                    </div>
                    )}
            </div>

            <div className={classes.header}>
                <div className={classes.headerCell}/>
                <div className={classes.headerCell}>
                    ID
                </div>
                <div className={classes.headerCell}>
                    Наименование организации
                </div>
                <div className={classes.headerCell}>
                    ID родительской органиазцаии
                </div>
                <div className={classes.headerCell}>
                    Наименование родительской органиазцаии
                </div>
                <div className={classes.headerCell}>
                    Количество сотрудников
                </div>
                <div className={classes.headerCell}/>
                <div className={classes.headerCell}/>
                <div className={classes.headerCell}/>
            </div>

            {organizations.length ? (<div className={classes.footer}>
                <Pagination
                    total={total}
                    page={page}
                    pageSize={pageSize}
                    onChange={updatePage}
                    fetch={fetchOrganizations}/>
            </div>) : null}
        </div>
    );
};

export default OrganizationsList;
