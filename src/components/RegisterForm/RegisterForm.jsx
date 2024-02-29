import { useId } from "react";
import styles from './RegisterForm.module.css';

const RegisterForm = ({onSubmit}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const newUser = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }

        onSubmit(newUser);
        form.reset();
    }

    const userNameId = useId();
    const userEmailId = useId();
    const userPasswordId = useId();

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formField}>
                <label htmlFor={userNameId} className={styles.formLabel}>Name</label>
                <input className={styles.formInput} id={userNameId} type="text" name="name" placeholder="Name" required />
            </div>
                
            <div className={styles.formField}>
                <label htmlFor={userEmailId} className={styles.formLabel}>Email</label>
                <input className={styles.formInput} id={userEmailId} type="email" name="email" placeholder="Email" required />
            </div>
            <div className={styles.formField}>
                <label htmlFor={userPasswordId} className={styles.formLabel}>Password</label>
                <input className={styles.formInput} id={userPasswordId} type="password" name="password" placeholder="Password" required />
            </div>
            
            <button type="submit" className={styles.formButton}>Sign Up</button>
        </form>
    )
}

export default RegisterForm;