import axios from 'axios';
import { useGlobalContext } from '../hooks/useGlobalContext';

export const useJoin = () => {
  const { dispatch } = useGlobalContext();
  const join = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/users/create', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch({ type: 'login', payload: response.data.token });
    } catch (error) {
      console.log(error);
    }
  };

  return { join };
};
