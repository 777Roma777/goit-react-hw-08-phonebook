import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const requestRegister = async formData => {
  const { data } = await contactsInstance.post('/users/signup', formData);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await contactsInstance.post('/users/login', formData);
  return data;
};

export const requestLogout = async () => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};
