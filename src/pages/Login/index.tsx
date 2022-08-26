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

import bg from 'assets/bg.png';
import { useWidth } from 'contexts/width';
import { useNavigate } from 'react-router';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { isMobile } = useWidth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise<void>(resolve =>
      setTimeout(() => {
        resolve(navigate('/files'));
      }, 500),
    );
    setLoading(false);
  };

  return (
    <Container>
      {!isMobile && (
        <LeftSideImageContainer>
          <img src={bg} alt="bg" />
        </LeftSideImageContainer>
      )}

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
