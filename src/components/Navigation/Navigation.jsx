import { NavLink } from "react-router-dom";
import AuthNav from './AuthNav';

const Navigation = () => {
    const isLoggedIn = true;

    return (
        <nav>
            <ul>
                {isLoggedIn
                    ? <li><NavLink to="/contacts">Contacts</NavLink></li>
                    : <AuthNav />}
                
            </ul>
        </nav>
    )
}

export default Navigation;