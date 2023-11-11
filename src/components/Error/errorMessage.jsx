import { Error } from './errorMessage.styled';

export const ErrorMessage = ({ message }) => {
  return (
    <Error>
      Oops! Something does wrong!<span>({message})</span>
    </Error>
  );
};
