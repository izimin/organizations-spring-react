import withStyle from 'react-jss';
import {connect} from 'react-redux';
import employeesList from './employeesList.jsx';
import connector from './connector';
import dispatcher from './dispatcher';
import style from './style';

export default connect(connector, dispatcher)(withStyle(style)(employeesList()));
