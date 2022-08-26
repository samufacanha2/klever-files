import Button from 'components/Button';
import Input from 'components/Input';
import React, { useState } from 'react';
import {
  Container,
  ForgotPassword,
  InputDiv,
  LeftSideImageContainer,
  LoginForm,
  PlansButton,
  RegisterButton,
  RegisterContent,
  RightSideContent,
} from './styles';

import bg from 'assets/bg.png';
import Plans from 'components/Plans';
import { useWidth } from 'contexts/width';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const { isMobile } = useWidth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = e.currentTarget.elements as any;

    if (email.value !== 'kleverAdmin' || password.value !== 'klever2022') {
      toast.error('Invalid email or password');
      setLoading(false);
      return;
    }

    await new Promise<void>(resolve =>
      setTimeout(() => {
        resolve(navigate('/files'));
      }, 500),
    );
    setLoading(false);
  };

  return (
    <>
      <Container id="login">
        {!isMobile && (
          <LeftSideImageContainer>
            <img src={bg} alt="bg" />
          </LeftSideImageContainer>
        )}

        <RightSideContent>
          <LoginForm onSubmit={handleSubmit}>
            <InputDiv>
              <h1>Login</h1>
              <Input
                type="text"
                placeholder="Email"
                title="Email"
                name="email"
              />
              <Input
                type="password"
                placeholder="Password"
                title="Password"
                name="password"
              />
            </InputDiv>
            <InputDiv>
              <ForgotPassword type="button">
                I forgot my password
              </ForgotPassword>
              <Button type="submit">{loading ? 'Loading...' : 'Login'}</Button>
            </InputDiv>
          </LoginForm>
          <RegisterContent>
            <p>Do not have an account?</p>
            <RegisterButton>Register</RegisterButton>
          </RegisterContent>
          <PlansButton onClick={() => setModalOpen(true)}>
            See Plans
          </PlansButton>
        </RightSideContent>
      </Container>
      {isModalOpen && <Plans setModalOpen={setModalOpen} />}
    </>
  );
};

export default Login;
