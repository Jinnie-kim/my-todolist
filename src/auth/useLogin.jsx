import axios from 'axios';
import { useGlobalContext } from '../hooks/useGlobalContext';

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
      dispatch({ type: 'login', payload: response.data.token });
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};
