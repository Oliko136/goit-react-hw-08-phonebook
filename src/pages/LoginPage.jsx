import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";
import { selectAuthLoading, selectAuthError } from "../redux/selectors";
import { Loader } from "components/Loader/Loader";
import LoginForm from "components/LoginForm/LoginForm";

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogIn = (user) => {
        const action = logIn(user);
        dispatch(action);
    }

    return (
        <>
            <h1>Please, log in</h1>
             {authLoading && <Loader />}
            <LoginForm onSubmit={handleLogIn} />
            {authError && <p>{authError}</p>}
        </>
        
    )
}

export default LoginPage;