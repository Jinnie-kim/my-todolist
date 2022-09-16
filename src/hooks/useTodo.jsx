import axios from 'axios';

export const useTodo = () => {
  const token = localStorage.getItem('token');
  const createTodo = async (title, detail) => {
    try {
      await axios.post(
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
    } catch (error) {
      console.log(error);
    }
  };

  return { createTodo };
};
