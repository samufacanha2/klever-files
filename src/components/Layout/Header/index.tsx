import { INavbarItem, navbarItems } from 'configs/navbar';
import { useWidth } from 'contexts/width';
import { useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  DesktopContainer,
  IconsMenu,
  Item,
  Logo,
  MenuIcon,
  MobileBackground,
  MobileContainer,
  MobileContent,
  MobileItem,
  MobileNavbarItemList,
  OptionsContainer,
  StyledLink,
} from './styles';

import logo from 'assets/logo.svg';
import { IoIosLogOut } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';

const NavbarItem: React.FC<INavbarItem> = ({ name, Icon, pathTo }) => {
  const location = useLocation();
  return (
    <StyledLink to={pathTo}>
      <Item selected={location.pathname.slice(1).includes(name.toLowerCase())}>
        <Icon />
        <span>{name}</span>
      </Item>
    </StyledLink>
  );
};

export const MobileNavbarItem: React.FC<INavbarItem> = ({
  name,
  Icon,
  pathTo,
  onClick,
}) => {
  const location = useLocation();
  return (
    <StyledLink to={pathTo}>
      <MobileItem
        onClick={onClick}
        selected={location.pathname.slice(1).includes(name.toLowerCase())}
      >
        <span>{name}</span>
        <Icon />
      </MobileItem>
    </StyledLink>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavbar = useRef<HTMLDivElement>(null);
  const prevScrollpos = useRef<number>(0);

  const { width } = useWidth();

  useEffect(() => {
    if (width > 1025) {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible';
  }, [isOpen]);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    if (mobileNavbar.current !== null) {
      mobileNavbar.current.style.top = '0';
    }
  };

  const handleClose = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleMobileScroll = () => {
    const navbar = mobileNavbar.current;

    const currentScrollPos = window.pageYOffset;

    if (navbar === null) {
      return;
    }

    if (prevScrollpos.current > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = '-4.5rem';
    }
    prevScrollpos.current = currentScrollPos;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 1025) {
        window.addEventListener('scroll', handleMobileScroll);
      } else {
        window.removeEventListener('scroll', handleMobileScroll);
      }
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleMobileScroll);
      }
    };
  }, [width]);

  return (
    <>
      <Container ref={mobileNavbar}>
        <Content>
          <StyledLink to="/files">
            <Logo onClick={handleClose}>
              <img src={logo} alt="Logo" />
            </Logo>
          </StyledLink>

          <DesktopContainer>
            <IconsMenu>
              {navbarItems.map((item, index) => (
                <NavbarItem key={String(index)} {...item} />
              ))}
            </IconsMenu>
            <OptionsContainer>
              <ConnectWallet />

              <StyledLink to="/">
                <Item selected={false}>
                  <IoIosLogOut />
                  <span>Logout</span>
                </Item>
              </StyledLink>
            </OptionsContainer>
          </DesktopContainer>

          <MobileContainer>
            <MenuIcon onClick={handleMenu} />
          </MobileContainer>
        </Content>
      </Container>

      <MobileBackground
        onClick={handleClose}
        onTouchStart={handleClose}
        opened={isOpen}
      />

      <MobileContent opened={isOpen}>
        <MobileNavbarItemList>
          {navbarItems.map((item, index) => (
            <MobileNavbarItem
              key={String(index)}
              {...item}
              onClick={handleMenu}
            />
          ))}
        </MobileNavbarItemList>
        <OptionsContainer>
          <ConnectWallet />

          <StyledLink to="/">
            <Item selected={false}>
              <IoIosLogOut />
              <span>Logout</span>
            </Item>
          </StyledLink>
        </OptionsContainer>
      </MobileContent>
    </>
  );
};

export default Navbar;
