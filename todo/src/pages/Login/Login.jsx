import { useState } from 'react';
import { useLogin } from '../../auth/useLogin';

import styled from 'styled-components';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonValid, setIsButtonValid] = useState(false);
  const { login } = useLogin();

  const userDataHandler = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.type === 'password') {
      setPassword(event.target.value);
      setIsButtonValid(true);
    }
  };

  const dataSubmitHandler = (event) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <LoginForm onSubmit={dataSubmitHandler}>
      <LoginFormField>
        <legend>LOGIN</legend>
        <LoginFormLabel htmlFor="email">Email </LoginFormLabel>
        <LoginFormInput
          type="email"
          id="email"
          required
          onChange={userDataHandler}
        />
        <LoginFormLabel htmlFor="password">Password </LoginFormLabel>
        <LoginFormInput
          type="password"
          id="password"
          required
          onChange={userDataHandler}
        />
        <LoginFormButton
          type="submit"
          isValid={isButtonValid}
          disabled={!isButtonValid}
        >
          LOGIN
        </LoginFormButton>
      </LoginFormField>
    </LoginForm>
  );
}

const LoginForm = styled.form`
  max-width: 360px;
  margin: 60px auto;
`;

const LoginFormField = styled.fieldset`
  padding: 20px;
  border: thick solid #6a4c93;
  border-radius: 10px;
  > legend {
    font-size: 1.5em;
    font-weight: 700;
    color: #6a4c93;
    padding: 10px;
  }
`;

const LoginFormLabel = styled.label`
  display: block;
  margin: 20px 0;
  color: #6a4c93;
  font-weight: 700;
`;

const LoginFormInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 6px;
  outline: none;
  border: 2px solid #6a4c93;
  border-radius: 2px;
  &:hover,
  &:focus {
    border: 2px solid #ffca3a;
  }
`;

const LoginFormButton = styled.button`
  margin-top: 40px;
  float: right;
  padding: 6px 12px;
  border-radius: 10px;
  background-color: ${(props) => (props.isValid ? '#6a4c93' : '#746687')};
  border: 1px solid #6a4c93;
  color: ${(props) => (props.isValid ? '#ffca3a' : '#AB8828')};
  font-weight: 700;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'auto')};
`;
