import { TodoForm } from './TodoForm';
import { TodoSection } from './TodoSection';

import styled from 'styled-components';

export default function Home() {
  return (
    <HomeSeciton>
      <TodoForm />
      <TodoSection />
    </HomeSeciton>
  );
}

const HomeSeciton = styled.section`
  box-sizing: border-box;
  width: 60%;
  max-width: 650px;
  height: 600px;
  margin: 50px auto 0;
  padding: 20px;
  border: 2px solid #6a4c93;
  text-align: center;
  border-radius: 20px;
`;
