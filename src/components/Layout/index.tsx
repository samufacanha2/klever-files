import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import { Body, Container } from './style';

const Layout: React.FC = () => {
  // const permission =
  //   sessionStorage.getItem('access_token') ||
  //   (window.location.pathname.split('/')[1] === 'feed' &&
  //     window.location.pathname.split('/')[2] !== '');

  // return permission ? (
  return (
    <>
      <Container>
        <Header />
        <Body>
          <Outlet />
        </Body>
        <Footer />
      </Container>
    </>
  );
  // ) : (
  //   <Navigate to="/login" />
  // );
};

export default Layout;
