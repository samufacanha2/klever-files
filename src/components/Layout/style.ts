import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const Body = styled.div`
  height: calc(100% - 9rem);
`;

export const Header = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${props => props.theme.sectionBackgound};
`;

export const NavItem = styled.div``;
