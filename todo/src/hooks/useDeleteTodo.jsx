import axios from 'axios';

const useDeleteTodo = () => {

  const deleteTodo = async (id, token) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteTodo };
};

export default useDeleteTodo;
