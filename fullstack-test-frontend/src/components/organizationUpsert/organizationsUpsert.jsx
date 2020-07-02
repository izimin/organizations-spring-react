import React, {useEffect} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';

export const OrganizationsUpsert = () => ({
    classes,

    editOrganization,
    parentOrganizations = [],
    setHeaderData,
    upsertOrganization,
    fetchParentOrganizations,
    fetchEditOrganization
}) => {
    const history = useHistory();
    const routeMatch = useRouteMatch();

    const isEdit = routeMatch.params.type === 'edit';
    const id = routeMatch.params.id;

    useEffect(() => {
        setHeaderData({title: isEdit ? 'Изменение организации' : 'Добавление организации', isShowAddButton: false, type: 'organization'});

        if (isEdit && !editOrganization.id && id) {
            fetchEditOrganization(id);
        }

        fetchParentOrganizations(id);
    }, []);


    const organization = {
        id: isEdit ? editOrganization.id : null,
        name: isEdit ? editOrganization.name : '',
        parentId: isEdit ? editOrganization.parentId : null
    };

    const handleChangeInput = event => {
        organization.name = event.target.value;
    };

    const handleChangeSelect = event => {
        organization.parentId = event.target.value;
    };

    return (
        <div className={classes.container}>
            <form className={classes.content}>
                <label className={classes.label}>Наименование организации</label>
                <input
                    name={'name'}
                    className={classes.inputText}
                    onChange={handleChangeInput}
                    value={organization.name || ''}
                    placeholder={'Например: Газпром'}
                />
                <label className={classes.label}>Наименование родительской организации</label>
                <select
                    name={'parent'}
                    className={classes.inputSelect}
                    onChange={handleChangeSelect}
                    value={organization.parentId || 0}
                >
                    <option value={null}>Нет</option>
                    {parentOrganizations.map((organization => (
                        <option value={organization.id} key={organization.id}>
                            {organization.name}
                        </option>
                        )))}
                </select>
                <div className={classes.nav}>
                    <button
                        className={classes.button}
                        onClick={() => {
                            upsertOrganization(organization);
                            history.push('/organization/list');
                        }}
                    >
                        {isEdit ? 'Изменить' : 'Добавить'}
                    </button>

                    <button
                        className={classes.button}
                        onClick={() => {
                            history.push('/organization/list');
                        }}
                    >
                        Отменить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OrganizationsUpsert;
