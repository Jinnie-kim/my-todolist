import axios from 'axios';
import { useGlobalContext } from '../todos/useGlobalContext';

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
      alert(error.response.data.details);
    }
  };

  return { join };
};
