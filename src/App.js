import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from './redux/operations';
import PhonebookForm from './Components/Phonebook';
import ContactsFilter from './Components/ContactsFilter';
import Contacts from './Components/Contacts';

const App = ({ getContacts }) => {
    useEffect(() => {
        getContacts();
    });
    return (
        <main>
            <PhonebookForm />
            <ContactsFilter />
            <Contacts />
        </main>
    );
};

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
