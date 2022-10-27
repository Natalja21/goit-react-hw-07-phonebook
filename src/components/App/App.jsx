import ContactsForm from '../ContactsForm/ContactForm';
import ContactsList from '../ContactsList/ContactList';
import SearchFilter from '../SearchFilter/SearchFilter';
import stl from './App.module.css';

const App = () => {
  return (
    <div className={stl.container}>
      <h1 className={stl.title}>Phonebook</h1>
      <ContactsForm />
      <h2 className={stl.title}>Contacts</h2>
      <SearchFilter />
      <ContactsList />
    </div>
  );
};

export default App;
