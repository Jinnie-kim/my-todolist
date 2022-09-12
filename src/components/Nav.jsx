import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Nav() {
  return (
    <NavSection>
      <NavTitle>my Todo list</NavTitle>
      <NavList>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/join">JOIN</Link>
        </li>
      </NavList>
    </NavSection>
  );
}

const NavSection = styled.nav`
  background-color: #ffca3a;
  padding: 20px 50px;
`;

const NavTitle = styled.h1`
  font-size: 32px;
  color: #ff595e;
  font-weight: 700;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 16px;
  > li a {
    font-weight: 700;
    text-decoration: none;
    color: #ff595e;
  }
`;
