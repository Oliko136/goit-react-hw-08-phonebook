import { NavLink } from "react-router-dom";

const AuthNav = () => {
    return (
        <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </>
    )
}

export default AuthNav;