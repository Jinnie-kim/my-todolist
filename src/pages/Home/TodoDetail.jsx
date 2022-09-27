import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import useGetTodoDetail from '../../hooks/useGetTodoDetail';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useEditTodo from '../../hooks/useEditTodo';
import styled from 'styled-components';

export const TodoDetail = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [show, setShow] = useState(false);
  const { dispatch, token, id } = useGlobalContext();
  const { getTodoDetail } = useGetTodoDetail();
  const { deleteTodo } = useDeleteTodo();
  const { editTodo } = useEditTodo();

  useEffect(() => {
    id &&
      getTodoDetail(id, token).then((result) => {
        setTitle(result.data.data.title);
        setDetail(result.data.data.content);
      });
  }, [id]);

  const onTodoDeleteHandler = async () => {
    const isChecked = window.confirm('Are you sure?');
    if (isChecked) {
      deleteTodo(id, token);
      dispatch({ type: 'delete', payload: null });
    }
  };

  const showModalHandler = () => {
    setShow(true);
  };

  const hideModalHandler = () => {
    setShow(false);
  };

  const newTitleDataHandler = (event) => {
    setTitle(event.target.value);
  };

  const newDetaildDataHandler = (event) => {
    setDetail(event.target.value);
  };

  const onTodoEditHandler = async (event) => {
    event.preventDefault();
    editTodo(id, token, title, detail);
    setShow(false);
  };

  return (
    <Detail>
      {id && (
        <>
          <h1>{title}</h1>
          <p>{detail}</p>
          <div>
            <button onClick={showModalHandler}>EDIT</button>
            <button onClick={onTodoDeleteHandler}>DEL</button>
          </div>
        </>
      )}
      {
        <EditModal isTrue={show}>
          <header>
            <h2>Rewrite your todo</h2>
          </header>
          <form>
            <label htmlFor="title">TODO</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={newTitleDataHandler}
            />

            <label htmlFor="detail">DETAIL</label>
            <input
              type="text"
              id="detail"
              value={detail}
              onChange={newDetaildDataHandler}
            />
          </form>
          <footer>
            <button onClick={hideModalHandler}>UNDO</button>
            <button onClick={onTodoEditHandler}>DONE</button>
          </footer>
        </EditModal>
      }
    </Detail>
  );
};

const Detail = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: #fae1dd;
  border-radius: 10px;
  > h1 {
    margin: 15px 0;
    font-size: 24px;
    font-weight: 700;
    color: #6a4c93;
  }

  > p {
    font-size: 20px;
    color: #6a4c93;
  }

  > div {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  > div > button {
    padding: 10px 15px;
    border: 2px solid #6a4c93;
    border-radius: 10px;
    background-color: #6a4c93;
    font-weight: 700;
    color: #ffca3a;
    cursor: pointer;
  }

  > div > button + button {
    margin-left: 15px;
  }
`;

const EditModal = styled.section`
  display: ${(props) => (props.isTrue ? 'block' : 'none')};
  position: fixed;
  top: 30vh;
  left: 50%;
  width: 60%;
  transform: translateX(-50%);
  background-color: #ffca3a;
  border-radius: 15px;
  overflow: hidden;
  > header {
    background-color: #ff595e;
    padding: 1rem;
    > h2 {
      font-size: 24px;
      font-weight: 700;
      color: #ffca3a;
    }
  }

  > form {
    padding: 1rem;
    text-align: left;

    > label {
      display: inline-block;
      margin: 20px 0 10px;
      font-weight: 700;
      &:first-child {
        margin-top: 0;
      }
    }

    > input {
      box-sizing: border-box;
      width: 100%;
      padding: 10px;
      outline: none;
      border: 2px solid #ffca3a;
      border-radius: 10px;
      &:hover,
      &:focus {
        border: 2px solid #ff595e;
      }
    }
  }

  > footer {
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 10px;

    > button {
      padding: 5px 10px;
      font-weight: 700;
      border: 2px solid #ff595e;
      background-color: #ff595e;
      color: #ffca3a;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
