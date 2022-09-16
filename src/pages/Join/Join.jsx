import { useState } from 'react';
import { useJoin } from '../../auth/useJoin';

import styled from 'styled-components';

export default function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { join } = useJoin();

  const userDataHandler = (event) => {
    if (event.target.type === 'email') {
      setEmail(event.target.value);
    }
    if (event.target.type === 'password') {
      setPassword(event.target.value);
    }
  };

  const dataSubmitHandler = (event) => {
    event.preventDefault();
    join(email, password);
  };

  return (
    <JoinForm onSubmit={dataSubmitHandler}>
      <JoinFormField>
        <legend>JOIN</legend>
        <JoinFormLabel htmlFor="email">Email </JoinFormLabel>
        <JoinFormInput
          type="email"
          id="email"
          required
          onChange={userDataHandler}
        />
        <JoinFormLabel htmlFor="password">Password </JoinFormLabel>
        <JoinFormInput
          type="password"
          id="password"
          required
          onChange={userDataHandler}
        />
        <JoinFormButton type="submit">JOIN</JoinFormButton>
      </JoinFormField>
    </JoinForm>
  );
}

const JoinForm = styled.form`
  max-width: 360px;
  margin: 60px auto;
`;

const JoinFormField = styled.fieldset`
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

const JoinFormLabel = styled.label`
  display: block;
  margin: 20px 0;
  color: #6a4c93;
  font-weight: 700;
`;

const JoinFormInput = styled.input`
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

const JoinFormButton = styled.button`
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
