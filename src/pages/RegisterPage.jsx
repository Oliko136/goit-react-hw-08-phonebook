import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/auth/auth-operations";
import { selectAuthLoading, selectAuthError } from "../redux/selectors";
import { Loader } from "components/Loader/Loader";
import RegisterForm from "components/RegisterForm/RegisterForm";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleRegister = (newUser) => {
        const action = register(newUser);
        dispatch(action);
        console.log(newUser);
    }

    return (
        <>
            <h1>Please, sign up</h1>
            {authLoading && <Loader />}
            <RegisterForm onSubmit={handleRegister} />
            {authError && <p>{authError}</p>}
        </>
    )
}

export default RegisterPage;