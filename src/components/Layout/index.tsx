import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import { Body, Container } from './style';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </Container>
  );
};

export default Layout;
