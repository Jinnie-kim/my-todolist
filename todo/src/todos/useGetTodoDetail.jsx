import axios from 'axios';

const useGetTodoDetail = () => {
  const getTodoDetail = async (id, token) => {
    try {
      const result = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  return { getTodoDetail };
};

export default useGetTodoDetail;
