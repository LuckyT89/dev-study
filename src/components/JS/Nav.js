import '../CSS/Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <NavLink to='/' exact style={{textDecoration: 'none'}} activeStyle={{textDecoration: 'underline'}} >Reference Mode</NavLink>
            <NavLink to='/study' exact style={{textDecoration: 'none'}} activeStyle={{textDecoration: 'underline'}} >Study Mode</NavLink>
        </div>
    );
}

export default Nav;