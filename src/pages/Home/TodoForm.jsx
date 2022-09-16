import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';

import styled from 'styled-components';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const { createTodo } = useTodo();

  const userDataHandler = (event) => {
    if (event.target.id === 'todo') {
      setTitle(event.target.value);
    }
    if (event.target.id === 'detail') {
      setDetail(event.target.value);
    }
  };

  const submitDataHandler = (event) => {
    event.preventDefault();
    createTodo(title, detail);
  };

  return (
    <Form onSubmit={submitDataHandler}>
      <label htmlFor="todo">TODO</label>
      <input
        type="text"
        id="todo"
        placeholder="what are you going todo ... :D"
        onChange={userDataHandler}
      />
      <label htmlFor="detail">DETAIL</label>
      <input
        type="text"
        id="detail"
        placeholder="tell me more :)"
        onChange={userDataHandler}
      />
      <button>ADD</button>
    </Form>
  );
};

const Form = styled.form`
  font-size: 24px;
  font-weight: 700;
  color: #6a4c93;
  > label {
    float: left;
    margin: 15px 0;
    &:first-child {
      margin-top: 0;
    }
  }

  > input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    outline: none;
    border: 2px solid #6a4c93;
    border-radius: 2px;
    &:hover,
    &:focus {
      border: 2px solid #ffca3a;
    }
  }

  > button {
    margin-top: 15px;
    width: 30%;
    padding: 10px;
    border: 1px solid #6a4c93;
    background-color: #6a4c93;
    color: #ffca3a;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
  }
`;
