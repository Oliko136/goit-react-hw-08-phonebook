import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import AuthNav from './AuthNav';
import styles from './Navigation.module.css';


const Navigation = () => {
   const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav>
            <ul className={styles.navList}>
                {isLoggedIn
                    ? <li><NavLink to="/contacts">Contacts</NavLink></li>
                    : <AuthNav />}
                
            </ul>
        </nav>
    )
}

export default Navigation;