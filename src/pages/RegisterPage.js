import { RegisterForm } from 'components/RefisterForm/RegisterForm';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </>
  );
};
export default RegistrationPage;
