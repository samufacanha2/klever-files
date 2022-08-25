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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.5rem;
  animation: ${FadeIn} 0.3s ease-in-out;
`;
