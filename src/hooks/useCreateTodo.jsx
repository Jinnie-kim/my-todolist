import axios from 'axios';
import { useGlobalContext } from './useGlobalContext';

export const useCreateTodo = () => {
  const token = localStorage.getItem('token');
  const { dispatch } = useGlobalContext();

  const createTodo = async (title, detail) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/todos',
        {
          title: title,
          content: detail,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      dispatch({ type: 'create', payload: response.data.data.id });
    } catch (error) {
      console.log(error);
    }
  };

  return { createTodo };
};
