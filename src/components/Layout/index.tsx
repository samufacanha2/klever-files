import React from 'react';
import { Outlet } from 'react-router';
import { Body, Container, Header, NavItem } from './style';

const Layout: React.FC = () => {
  // const permission =
  //   sessionStorage.getItem('access_token') ||
  //   (window.location.pathname.split('/')[1] === 'feed' &&
  //     window.location.pathname.split('/')[2] !== '');

  // return permission ? (
  return (
    <>
      <Container>
        <Header>
          Logo
          <NavItem>Home</NavItem>
          <NavItem>Events</NavItem>
          <NavItem>Login</NavItem>
        </Header>
        <Body>
          <Outlet />
        </Body>
      </Container>
    </>
  );
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default Layout;
