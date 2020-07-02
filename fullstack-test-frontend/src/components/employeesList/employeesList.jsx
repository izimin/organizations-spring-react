import React, {useEffect} from 'react';
import Pagination from '../pagination';
import {FiTrash2} from 'react-icons/fi';
import {FiEdit} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

export const EmployeesList = () => ({
    classes,

    total,
    page,
    pageSize,
    employees = [],
    updatePage,
    setHeaderData,
    setPage,
    fetchEmployees,
    deleteEmployee,
}) => {
    useEffect(() => {
        setPage(1);
        setHeaderData({title: 'Список сотрудников', isShowAddButton: true, type: 'employee'});
        fetchEmployees();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                {employees.length ?
                    employees.map(employee => (
                        <div key={employee.id} className={classes.row}>
                            <div className={classes.cell}/>
                            <div className={classes.cell}>
                                {employee.id}
                            </div>
                            <div className={classes.cell}>
                                {employee.name}
                            </div>
                            <div className={classes.cell}>
                                {employee.directorId}
                            </div>
                            <div className={classes.cell}>
                                {employee.directorName}
                            </div>
                            <div className={classes.cell}>
                                {employee.organizationId}
                            </div>
                            <div className={classes.cell}>
                                {employee.organizationName}
                            </div>
                            <div className={classes.cell}>
                                <NavLink
                                    title={'Изменить'}
                                    className={classes.button}
                                    to={`/employee/edit/${employee.id}`}
                                >
                                    <FiEdit size={30} color="#A5AEB3"/>
                                </NavLink>
                            </div>
                            <div className={classes.cell}>
                                <button
                                    className={classes.button}
                                    onClick={() => deleteEmployee(employee)}
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
                    Имя сотрудника
                </div>
                <div className={classes.headerCell}>
                    ID руководителя
                </div>
                <div className={classes.headerCell}>
                    Имя руководителя
                </div>
                <div className={classes.headerCell}>
                    ID организации
                </div>
                <div className={classes.headerCell}>
                    Наименование организации
                </div>
                <div className={classes.headerCell}/>
                <div className={classes.headerCell}/>
                <div className={classes.headerCell}/>
            </div>

            {employees.length ? (<div className={classes.footer}>
                <Pagination
                    total={total}
                    page={page}
                    pageSize={pageSize}
                    onChange={updatePage}
                    fetch={fetchEmployees} />
            </div>) : null}

        </div>
    );
};

export default EmployeesList;
