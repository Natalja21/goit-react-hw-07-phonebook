import stl from './ContactList.module.css';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import Loader from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts-operations';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }

    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsFiltered = getFilteredContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>Something went wrong, please, try again</div>}
      <ul className={stl.contactsList}>
        {contactsFiltered.length > 0 &&
          contactsFiltered.map(({ id, name, phone }) => (
            <ContactsListItem key={id} id={id} name={name} phone={phone} />
          ))}
      </ul>
    </>
  );
};

export default ContactsList;
