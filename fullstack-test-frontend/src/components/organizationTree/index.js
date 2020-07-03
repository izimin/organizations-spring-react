import withStyle from 'react-jss';
import {connect} from 'react-redux';
import organizationsTree from './organizationsTree.jsx';
import connector from './connector';
import dispatcher from './dispatcher';
import style from './style';

export default connect(connector, dispatcher)(withStyle(style)(organizationsTree()));
