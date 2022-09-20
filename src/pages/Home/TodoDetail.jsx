import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import styled from 'styled-components';

export const TodoDetail = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const { id } = useGlobalContext();
  const token = localStorage.getItem('token');

  const getTodoDetail = async () => {
    try {
      await axios
        .get(`http://localhost:8080/todos/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((result) => {
          setTitle(result.data.data.title);
          setDetail(result.data.data.content);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    id && getTodoDetail();
  }, [id]);

  return (
    <Detail>
      {id && (
        <>
          <h1>{title}</h1>
          <p>{detail}</p>
          <div>
            <button>EDIT</button>
            <button>DEL</button>
          </div>
        </>
      )}
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
