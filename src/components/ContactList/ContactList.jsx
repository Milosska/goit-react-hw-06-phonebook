import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListElem } from '../ContactListElem/ContactListElem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = arrey => {
    return arrey.map(({ id, name, number }) => {
      return (
        <ContactListElem
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
        />
      );
    });
  };

  return <ul>{makeList(makeFiltredContacts())}</ul>;
};
