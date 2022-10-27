import { useState } from 'react';
import stl from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/contacts-operations';
import { selectContacts } from 'redux/selectors';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const findContact = items.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === phone
    );
    if (name === '' || phone === '') {
      return Notify.warning(`Fill in the fields to save the contact`);
    }

    if (findContact) {
      return Notify.warning(`${name} is already in the Phonebook`);
    }
    if (findContact) {
      return Notify.warning(`${phone} is already in the Phonebook`);
    }
    dispatch(addContact({ name, phone }));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={stl.form} onSubmit={handleSubmit}>
      <label className={stl.form__label}>
        Name
        <input
          className={stl.form__input}
          type="text"
          name="name"
          placeholder="* fields are required"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label className={stl.form__label}>
        Number
        <input
          className={stl.form__input}
          type="tel"
          name="phone"
          placeholder="* fields are required"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleChangeInput}
        />
      </label>
      <button className={stl.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
