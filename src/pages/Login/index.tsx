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

import klv from 'assets/klv.svg';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (): void => {
    navigate('/files');
  };

  return (
    <Container>
      <LeftSideImageContainer>
        <img src={klv} alt="klv" width="215" height="30" />
      </LeftSideImageContainer>

      <RightSideContent>
        <LoginForm onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input type="text" placeholder="Email" title="Email" />
          <Input type="password" placeholder="Password" title="Password" />
          <Button type="submit">Login</Button>
        </LoginForm>
      </RightSideContent>
    </Container>
  );
};

export default Login;
