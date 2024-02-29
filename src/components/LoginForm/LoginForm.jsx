import { useId } from "react";
import styles from './LoginForm.module.css';

const LoginForm = ({onSubmit}) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value
        }
        
        onSubmit(user);

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