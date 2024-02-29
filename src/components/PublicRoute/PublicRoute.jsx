import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectToken } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";

const PublicRoute = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const token = useSelector(selectToken);

    if (!isLoggedIn && token) {
       return <Loader />
    }

    if (isLoggedIn) {
        return <Navigate to='/contacts' />
    }

    return <Outlet />
}

export default PublicRoute;