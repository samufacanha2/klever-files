import Button from 'components/Button';
import Input from 'components/Input';
import React from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  LeftSideImageContainer,
  LeftSideMainContent,
  LoginForm,
  RightSideContent,
} from './styles';

import klv from 'assets/klv.svg';
import logo from 'assets/logo.svg';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (): void => {
    navigate('/');
  };

  return (
    <Container>
      <LeftSideImageContainer>
        <img src={logo} alt="Logo" width="215" height="29" />
        <LeftSideMainContent>
          <img src={klv} alt="klv" width="215" height="30" />
        </LeftSideMainContent>
      </LeftSideImageContainer>

      <RightSideContent>
        <LoginForm onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input type="text" placeholder="Email" title="Email" />
          <Input type="password" placeholder="Senha" title="Password" />
          <Button type="submit">Entrar</Button>
        </LoginForm>
      </RightSideContent>
    </Container>
  );
};

export default Login;
