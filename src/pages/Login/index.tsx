import Button from 'components/Button';
import Input from 'components/Input';
import React, { useState } from 'react';
import {
  Container,
  ForgotPassword,
  InputDiv,
  LeftSideImageContainer,
  LoginForm,
  RegisterButton,
  RegisterContent,
  RightSideContent,
} from './styles';

import klv from 'assets/klv.svg';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log('test');
    await new Promise<void>(resolve =>
      setTimeout(() => {
        resolve(navigate('/files'));
      }, 500),
    );
    console.log('test2');
    setLoading(false);
  };

  return (
    <Container>
      <LeftSideImageContainer>
        <img src={klv} alt="klv" width="215" height="30" />
      </LeftSideImageContainer>

      <RightSideContent>
        <LoginForm onSubmit={handleSubmit}>
          <InputDiv>
            <h1>Login</h1>
            <Input type="text" placeholder="Email" title="Email" />
            <Input type="password" placeholder="Password" title="Password" />
          </InputDiv>
          <InputDiv>
            <ForgotPassword type="button">I forgot my password</ForgotPassword>
            <Button type="submit">{loading ? 'Loading...' : 'Login'}</Button>
          </InputDiv>
        </LoginForm>
        <RegisterContent>
          <p>Do not have an account?</p>
          <RegisterButton>Register</RegisterButton>
        </RegisterContent>
      </RightSideContent>
    </Container>
  );
};

export default Login;
