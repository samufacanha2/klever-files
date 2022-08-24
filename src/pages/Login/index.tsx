import Button from 'components/Button';
import Input from 'components/Input';
import React from 'react';
import { useNavigate } from 'react-router';
import {
  Container,
  LeftSideImageContainer,
  LoginForm,
  RightSideContent,
} from './styles';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (): void => {
    navigate('/');
  };

  return (
    <Container>
      <LeftSideImageContainer></LeftSideImageContainer>

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
