import { Link } from 'react-router-dom';
import { useGlobalContext } from '../hooks/useGlobalContext';

import styled from 'styled-components';

export default function Nav() {
  const { token, dispatch } = useGlobalContext();

  const logoutHandler = () => {
    dispatch({ type: 'logout', payload: null });
    localStorage.removeItem('token');
  };
  return (
    <NavSection>
      <NavTitle>my Todo list</NavTitle>
      <NavList>
        {!token ? (
          <>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/join">JOIN</Link>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logoutHandler}>LOGOUT</button>
          </li>
        )}
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
  > li button {
    padding: 10px 15px;
    outline: none;
    border: 1px solid #ff595e;
    border-radius: 10px;
    background-color: #ff595e;
    color: #ffca3a;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #6a4c93;
      border-color: #6a4c93;
    }
  }
`;
