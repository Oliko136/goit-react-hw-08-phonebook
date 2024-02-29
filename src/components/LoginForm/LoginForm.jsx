import { useId } from "react";
//import { useDispatch } from "react-redux";
import styles from '../RegisterForm/RegisterForm.module.css';

const LoginForm = () => {
    //const dispatch = useDispatch();
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const logInUser = {
            email: form.elements.email.value,
            password: form.elements.password.value
        }

        //const action = register(logInUser);
        //dispatch(action);
        console.log(logInUser)
        form.reset();
    }

    const logInUserEmailId = useId();
    const logInUserPasswordId = useId();

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
                
            <div className={styles.formField}>
                <label htmlFor={logInUserEmailId} className={styles.formLabel}>Email</label>
                <input className={styles.formInput} id={logInUserEmailId} type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.formField}>
                <label htmlFor={logInUserPasswordId} className={styles.formLabel}>Password</label>
                <input className={styles.formInput} id={logInUserPasswordId} type="password" name="password" placeholder="Password" required />
            </div>
            
            <button type="submit" className={styles.formButton}>Log In</button>
        </form>
    )
}

export default LoginForm;