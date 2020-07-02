import React, {useEffect} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

export const EmployeeUpsert = () => ({
    classes,

    editEmployee,
    organizationsForEmployee,
    directors,
    setHeaderData,
    setEditEmployee,
    upsertEmployee,
    fetchDirectors,
    fetchOrganizationsForEmployee,
    fetchEditEmployee
}) => {
    const history = useHistory();
    const routeMatch = useRouteMatch();

    const isEdit = routeMatch.params.type === 'edit';
    const id = routeMatch.params.id;

    useEffect(() => {
        setHeaderData({title: isEdit ? 'Изменение данных сотрудника' : 'Добавление сотрудника', isShowAddButton: false, type: 'employee'});

        if (isEdit && !editEmployee.id && id) {
            fetchEditEmployee(id);
            fetchDirectors(editEmployee);
        }

        fetchOrganizationsForEmployee();
    }, []);


    const employee = {
        id: isEdit ? editEmployee.id : null,
        name: isEdit ? editEmployee.name : '',
        organizationId: isEdit ? editEmployee.organizationId : null,
        directorId: isEdit ? editEmployee.directorId : null
    };

    const handleChangeInput = event => {
        employee.name = event.target.value;
    };

    const handleChangeSelectOrganization = event => {
        employee.organizationId = event.target.value;
    };

    const handleChangeSelectDirector = event => {
        employee.directorId = event.target.value;
    };

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <label className={classes.label}>Имя сотрудника</label>
                <input
                    name={'name'}
                    className={classes.inputText}
                    onChange={handleChangeInput}
                    value={employee.name || ''}
                    placeholder={'Например: Иванов Иван Иванович'}
                />
                <label className={classes.label}>Наименование организации</label>
                <select
                    name={'organizations'}
                    className={classes.inputSelect}
                    onChange={handleChangeSelectOrganization}
                    onInput={() => fetchDirectors(employee)}
                    value={employee.organizationId || 0}
                >
                    <option value={null}>Нет</option>
                    {organizationsForEmployee.map((organization => (
                        <option value={organization.id} key={organization.id}>
                            {organization.name}
                        </option>
                        )))}
                </select>
                <label className={classes.label}>Имя директора</label>
                <select
                    name={'directors'}
                    onFocus={() => fetchDirectors(employee)}
                    className={classes.inputSelect}
                    onChange={handleChangeSelectDirector}
                    value={employee.directorId || 0}
                >
                    <option value={null}>Нет</option>
                    {directors.map((director => (
                        <option value={director.id} key={director.id}>
                            {director.name}
                        </option>
                    )))}
                </select>
                <div className={classes.nav}>
                    <button
                        className={classes.button}
                        onClick={() => {
                            upsertEmployee(employee);
                            history.push('/employee/list');
                        }}
                    >
                        {isEdit ? 'Изменить' : 'Добавить'}
                    </button>

                    <button
                        className={classes.button}
                        onClick={() => {
                            history.push('/employee/list');
                        }}
                    >
                        Отменить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeUpsert;
