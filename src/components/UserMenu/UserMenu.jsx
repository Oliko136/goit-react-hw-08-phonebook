import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { selectUser } from "../../redux/selectors";
import styles from './UserMenu.module.css';

const UserMenu = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div className={styles.userMenu}>
            <p className={styles.userMenuGreeting}>Welcome, {user.email}</p>
            <button type="button" onClick={handleLogOut} className={styles.logOutButton}>Logout</button>
        </div>
    )
}

export default UserMenu;