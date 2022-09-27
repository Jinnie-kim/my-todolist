import axios from 'axios';

const useGetTodoTitle = () => {
  const getTodo = async (token) => {
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
