import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import content from './content.jsx';

import OrganizationsList from '../organizationsList';
import EmployeesList from '../employeesList';
import OrganizationsUpsert from '../organizationUpsert';
import EmployeeUpsert from '../employeeUpsert';
import OrganizationTree from '../organizationTree';
import EmployeeTree from '../employeeTree';

const Content = (withRouter(content({
    Switch,
    Route,
    Redirect,
    OrganizationsList,
    EmployeesList,
    OrganizationsUpsert,
    EmployeeUpsert,
    OrganizationTree,
    EmployeeTree
})));

export default Content;