import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';

export const App = () => {
  return (
    <div className="container">
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />
      <h2 className="contacts">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
