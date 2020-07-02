import React from 'react';

const Content = ({
    Switch,
    Route,
    Redirect,
    OrganizationsList,
    EmployeesList,
    OrganizationsUpsert,
    EmployeeUpsert
}) => () => (
    <Switch>
        <Route
            exact
            path={'/organization/list'}
            component={OrganizationsList}
        />

        <Route
            exact
            path={'/organization/tree'}
            component={OrganizationsList}
        />

        <Route
            path={'/organization/:type/:id?'}
            component={OrganizationsUpsert}
        />

        <Route
            exact
            path={'/employee/list'}
            component={EmployeesList}
        />

        <Route
            path={'/employee/tree'}
            component={EmployeesList}
        />

        <Route
            path={'/employee/:type/:id?'}
            component={EmployeeUpsert}
        />

        <Redirect
            to="/organization/list"
        />
    </Switch>
);

export default Content;
