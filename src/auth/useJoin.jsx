import axios from 'axios';

export const useJoin = () => {
  const join = async (email, password) => {
    try {
      await axios.post('http://localhost:8080/users/create', {
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { join };
};
