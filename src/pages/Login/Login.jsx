import styled from 'styled-components';

export default function Login() {
  return (
    <LoginForm>
      <LoginFormField>
        <legend>LOGIN</legend>
        <LoginFormLabel htmlFor="email">Email </LoginFormLabel>
        <LoginFormInput type="email" id="email" />
        <LoginFormLabel htmlFor="password">Password </LoginFormLabel>
        <LoginFormInput type="password" id="password" />
        <LoginFormButton type="submit">LOGIN</LoginFormButton>
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
  background-color: #6a4c93;
  border: 1px solid #6a4c93;
  color: #ffca3a;
  font-weight: 700;
  cursor: pointer;
`;
