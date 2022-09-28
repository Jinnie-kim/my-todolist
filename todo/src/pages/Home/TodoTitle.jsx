import { useEffect, useState } from 'react';

import useGetTodoTitle from '../../todos/useGetTodoTitle';
import { useGlobalContext } from '../../todos/useGlobalContext';
import styled from 'styled-components';

export const TodoTitle = () => {
  const [datas, setDatas] = useState([]);
  const { dispatch, token, create, id, edit } = useGlobalContext();
  const { getTodo } = useGetTodoTitle();

  useEffect(() => {
    token &&
      getTodo(token).then((result) => {
        setDatas(result.data.data);
      });
  }, [create, id, edit]);

  const getTodoIdHandler = (event) => {
    dispatch({ type: 'detail', payload: event.target.id });
  };

  return (
    <Title>
      {datas.length > 0 ? (
        datas.map((data) => {
          return (
            <li key={data.id} id={data.id} onClick={getTodoIdHandler}>
              {data.title}
            </li>
          );
        })
      ) : (
        <strong>there is no todo :(</strong>
      )}
    </Title>
  );
};

const Title = styled.ul`
  width: 100%;
  border-radius: 10px;
  overflow-y: scroll;
  > li {
    padding: 10px;
    border-radius: 10px;
    font-weight: 500;
    font-size: 24px;
    background-color: #6a4c93;
    color: #ffca3a;
    cursor: pointer;

    &:hover {
      background-color: #ffca3a;
      color: #6a4c93;
    }
  }

  > li + li {
    margin-top: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  > strong {
    display: inline-block;
    margin-top: 50%;
    font-size: 24px;
    font-weight: 700;
    color: #ff595e;
  }
`;
