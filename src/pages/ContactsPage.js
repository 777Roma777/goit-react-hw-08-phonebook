import React from 'react';
import ContactForm from 'components/ContactsForm/contactForm';
import ContactsList from 'components/ContactsList/contactList';
import Filter from 'components/Filter/filter';
import { Section, SectionTitle } from 'app.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/tasks/operations';
import { selectIsLoading } from 'redux/tasks/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <SectionTitle>Add contact</SectionTitle>
        <ContactForm />
      </Section>
      <Section>
        <SectionTitle>Contacts</SectionTitle>

        <Filter />
        {isLoading && !error && <Loader />}

        <ContactsList />
      </Section>
    </>
  );
}
