import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  background-color: ${props => props.theme.background};
  width: 100%;
  padding: 1 1.5rem;
`;

export const Body = styled.main`
  height: 100%;
  min-height: 50vh;
  display: block;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
`;

export const NavItem = styled.div``;
