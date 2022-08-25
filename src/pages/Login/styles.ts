import styled from 'styled-components';
import { FadeIn } from 'styles/global';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LeftSideImageContainer = styled.div`
  height: 100%;
  width: 75%;
  background-color: ${props => props.theme.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightSideContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.background};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.primary};
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 1.25rem;
  color: ${props => props.theme.text};
  background: ${props => props.theme.background};
`;

export const LoginForm = styled.form`
  width: 40%;
  animation: ${FadeIn} 0.3s ease-in-out;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
`;

export const ForgotPassword = styled.button`
  width: 100%;
  font-weight: 600;
  padding: 0;
  margin-top: 8px;
  border: none;
  background: none;
  font-size: 0.8rem;
  float: right;
  color: ${({ theme }) => theme.input.border.dark};
  text-align: right;
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.input.border.dark};
`;

export const RegisterButton = styled.button`
  font-weight: bold;
  padding: 0;
  border: none;
  background: none;
  color: ${({ theme }) => theme.input.border.dark};
`;
