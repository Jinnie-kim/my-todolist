import axios from 'axios';

const useEditTodo = () => {
  const editTodo = async (id, token, title, detail) => {
    try {
      await axios.put(
        `http://localhost:8080/todos/${id}`,
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
  return { editTodo };
};

export default useEditTodo;
