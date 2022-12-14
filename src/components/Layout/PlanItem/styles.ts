import styled from 'styled-components';
import { FadeIn } from 'styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 2rem;
  color: ${props => props.theme.card.text};
  align-items: center;
  justify-content: flex-start;

  background-color: ${props => props.theme.card.background};
  width: 50%;
  border-radius: 0.5rem;
  padding: 1rem;

  opacity: 0;
  animation: ${FadeIn} 0.3s ease-in-out 0.15s forwards;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: auto;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

export const Status = styled.div`
  padding-right: 8px;
`;

export const StyledLink = styled.a``;

export const UnderText = styled.div`
  text-decoration: underline;
  font-size: 0.8rem;
  cursor: pointer;
  user-select: none;

  color: ${props => props.theme.card.text};
`;

export const PaymentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;
