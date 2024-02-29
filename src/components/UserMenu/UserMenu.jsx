import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import { selectUser } from "../../redux/selectors";

const UserMenu = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    return (
        <div>
            <p>Welcome, {user.email}</p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default UserMenu;