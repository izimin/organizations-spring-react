import withStyle from 'react-jss';
import navbar from './navbar.jsx';
import {NavLink} from 'react-router-dom';
import style from './style';

const Navbar = withStyle(style)(navbar({
    NavLink
}));

export default Navbar;
