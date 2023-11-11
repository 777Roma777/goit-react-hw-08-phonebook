// contactForm.jsx

import React, { useState } from 'react';
import css from './contactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from 'components/redux/contactDataReducer';
import Loader from 'components/Loader/loader';
import { selectError, selectIsLoading } from 'components/redux/products.selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddContact(name, phone);
    setName('');
    setPhone('');
  };

  const handleAddContact = (name, phone) => {
    if (!name || !phone) {
      return;
    }
    dispatch(addContactAsync({ name, phone }));
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <p className={css.descriptionInput}>Name</p>
          <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="name" required />
        </label>
        <label className={css.label}>
          <p className={css.descriptionInput}>Phone</p>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} type="tel" name="phone" required />
        </label>
        <button className={css.button} type="submit">
          {isLoading ? <Loader /> : 'Add contact'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ContactForm;
