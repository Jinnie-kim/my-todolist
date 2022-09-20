import axios from 'axios';
import { useEffect, useState } from 'react';

import styled from 'styled-components';

export const TodoTitle = () => {
  const [datas, setDatas] = useState([]);
  const token = localStorage.getItem('token');

  const getTodo = async () => {
    try {
      await axios
        .get('http://localhost:8080/todos', {
          headers: {
            Authorization: token,
          },
        })
        .then((result) => {
          setDatas(result.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []); // react-query ?? 

  return (
    <Title>
      {datas.length > 0 ? (
        datas.map((data) => {
          return (
            <li key={data.id} id={data.id}>
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
`;
