import {connect} from 'react-redux';
import withStyle from 'react-jss';
import layout from './layout.jsx';
import connector from './connector';
import style from './style';

import Header from '../header';

export default connect(connector)(withStyle(style)(layout({
    Header
})));
