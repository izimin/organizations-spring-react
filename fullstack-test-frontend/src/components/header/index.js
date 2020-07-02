import withStyle from 'react-jss';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import header from './header.jsx';
import connector from './connector';
import dispatcher from './dispatcher';
import style from './style';

import Navbar from './components/navbar';

export default connect(connector, dispatcher)(withStyle(style)(header({
    Navbar,
    NavLink
})));
