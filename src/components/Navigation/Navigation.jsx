import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import AuthNav from './AuthNav';


const Navigation = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

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