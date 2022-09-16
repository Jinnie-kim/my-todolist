import styled from 'styled-components';

export const TodoTitle = () => {
  return (
    <Title>
      <li>working on todolist</li>
      <li>working on todolist</li>
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
