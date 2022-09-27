import axios from 'axios';

const useGetTodoTitle = () => {
  const token = localStorage.getItem('token');

  const getTodo = async () => {
    try {
      const result = await axios.get('http://localhost:8080/todos', {
        headers: {
          Authorization: token,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return { getTodo };
};

export default useGetTodoTitle;
