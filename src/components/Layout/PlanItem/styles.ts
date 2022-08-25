import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 2rem;
  color: ${props => props.theme.black};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
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
