import styled from 'styled-components';

export const TodoDetail = () => {
  return (
    <Detail>
      <h1>working on todolist</h1>
      <p>make all components and page</p>
      <div>
        <button>EDIT</button>
        <button>DEL</button>
      </div>
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
    cursor: pointer;;
  }

  > div > button + button {
    margin-left: 15px;
  }
`;
