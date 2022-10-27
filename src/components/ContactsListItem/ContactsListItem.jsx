import stl from './ContactsListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts-operations';

const ContactsListItem = items => {
  const dispatch = useDispatch();
  const { id, phone, name } = items;
  return (
    <li className={stl.contactsList__item}>
      <p className={stl.contactsList__text}>
        {name}: {phone}
      </p>
      <button
        className={stl.contactsList__btn}
        type="button"
        onClick={() => dispatch(removeContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;
ContactsListItem.propTypes = {
  items: PropTypes.objectOf(PropTypes.string.isRequired),
};
