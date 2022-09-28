import axios from 'axios';
import { useGlobalContext } from '../../todos/useGlobalContext';

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
      if (error.response.data.details === '로그인에 실패했습니다') {
        alert('이메일, 비밀번호를 다시 확인해주세요.');
        return;
      }
      alert(error.response.data.details);
    }
  };

  return { login };
};
