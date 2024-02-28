import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />

            <div className={styles.contacts}>
                <h2 className={styles.contactsTitle}>Contacts</h2>
                <Filter />
                <ContactList />
            </div>
      </>
    )
}

export default ContactsPage;
