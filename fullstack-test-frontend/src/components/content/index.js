import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import content from './content.jsx';

import OrganizationsList from '../organizationsList';
import EmployeesList from '../employeesList';
import OrganizationsUpsert from '../organizationUpsert';
import EmployeeUpsert from '../employeeUpsert';

const Content = (withRouter(content({
    Switch,
    Route,
    Redirect,
    OrganizationsList,
    EmployeesList,
    OrganizationsUpsert,
    EmployeeUpsert
})));

export default Content;