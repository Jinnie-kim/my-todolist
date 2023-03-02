import styled from 'styled-components';
import { TodoDetail } from './TodoDetail';
import { TodoTitle } from './TodoTitle';

export const TodoSection = () => {
  return (
    <Section>
      <TodoTitle />
      <TodoDetail />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  gap: 20px;
  height: 300px;
  margin-top: 20px;
`;