import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { ListElem, Text, Button } from './ContactListElem.styled';

export const ContactListElem = ({ contactName, contactNumber, contactId }) => {
  const dispatch = useDispatch();

  const handleDelete = evtId => {
    dispatch(deleteContact(evtId));
  };

  return (
    <ListElem>
      <Text>
        {contactName}: {contactNumber}
      </Text>
      <Button type="button" onClick={() => handleDelete(contactId)}>
        Delete
      </Button>
    </ListElem>
  );
};

ContactListElem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired,
};
