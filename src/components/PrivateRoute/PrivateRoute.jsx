import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectToken } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";

const PrivateRoute = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const token = useSelector(selectToken);

    if (!isLoggedIn && token) {
       return <Loader />
    }

    if (!isLoggedIn && !token) {
        return <Navigate to='/login' />
    }
    
    return <Outlet />

}

export default PrivateRoute;