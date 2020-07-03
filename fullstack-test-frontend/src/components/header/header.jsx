import React from 'react';
import {FiPlusCircle, FiSearch} from 'react-icons/fi';

const Header = ({
    Navbar,
    NavLink
}) => ({
    classes,

    title,
    isShowAddButton,
    type,
    filter,

    fetchEmployees,
    fetchOrganizations,
    setFilter
}) => {
    const handleChangeInput = event => {
        filter = event.target.value;
        setFilter(filter);
    };

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.title}>
                    {title}
                </div>
                {isShowAddButton===true ? (<div className={classes.search}>
                    <input
                        onChange={handleChangeInput}
                        name={'name'}
                        className={classes.inputText}
                        placeholder={'Поиск...'}
                        value={filter}
                    />
                    <button onClick={() => {
                        fetchEmployees();
                        fetchOrganizations();
                    }}
                        className={classes.button}
                    >
                        <FiSearch size={30} color="#A5AEB3"/>
                    </button>

                    <div
                        className={classes.controls}>
                        <NavLink
                            className={classes.button}
                            title="Добавить"
                            to={`/${document.location.pathname.indexOf('organization') !== -1 ? 'organization' : 'employee'}/add`}>
                            <FiPlusCircle size={40} color="#A5AEB3"/>
                        </NavLink>
                    </div>
                </div>) : null}
            </div>
        </>
    );
};

export default Header;
