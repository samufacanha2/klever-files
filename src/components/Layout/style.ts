import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  background-color: ${props => props.theme.background};
  width: 100%;
  min-height: 100vh;
  padding: 1 1.5rem;

  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    overflow: hidden;
  }
`;

export const Body = styled.main`
  height: 100%;
  min-height: 50vh;
  display: block;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

export const NavItem = styled.div``;
