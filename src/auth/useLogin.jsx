import axios from 'axios';

export const useLogin = () => {
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/users/login', {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { login };
};

