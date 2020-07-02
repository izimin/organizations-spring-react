import React from 'react';

export const Navbar = ({
    NavLink,
}) => ({classes}) =>
    (
        <nav className={classes.nav}>
            <ul className={classes.links}>
                <li className={classes.item}>
                    <NavLink
                        className={classes.link}
                        activeClassName={classes.linkActive}
                        to="/organization/list"
                        exact
                    >Список организаций
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        className={classes.link}
                        activeClassName={classes.linkActive}
                        to="/employee/list"
                    >Список сотрудников
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        className={classes.link}
                        activeClassName={classes.linkActive}
                        to="/organization/tree"
                    >Дерево орагнизаций
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink
                        className={classes.link}
                        activeClassName={classes.linkActive}
                        to="/employee/tree"
                    >Дерево сотрудников
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

export default Navbar;
