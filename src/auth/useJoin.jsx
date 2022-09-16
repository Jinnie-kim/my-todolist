import axios from 'axios';

export const useJoin = () => {
  const join = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/users/create', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return { join };
};
