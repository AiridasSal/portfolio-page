import UserBadge from '../UserBadge/UserBadge';
import { useUser } from '../UserContext';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import logo2 from '../../assets/logo.png'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from '../Socials/Socials';

import {
  LogRegContainer,
  HeaderWrapper,
  ListItem,
  Nav,
  NavLink,
  Ulist,
  Container,
  WidthWrapper,
} from './Header.styled';

const LogoContainer = styled.div`
  display:flex;
  justfy-content: center;
  align-items: center;

`
const BrandName = styled.p`
font-size: 20px;
font-weight:500;
color: var(--white-color)
`
const LogoPng = styled.img`
width:80px;
height:80px;
`
const Header = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/register' && (
        <HeaderWrapper>
          <WidthWrapper>
            <LogoContainer><BrandName>INNOVACODEWEB</BrandName></LogoContainer>
            <Nav>
              <Ulist>
                <ListItem>
                  <NavLink to="/">HOME</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/questions/new">ABOUT</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/questions/new">PROJECTS</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/questions/new">CONTACT</NavLink>
                </ListItem>
              </Ulist>
            </Nav>
            <SocialLink >
              <FontAwesomeIcon icon={faBars} />
            </SocialLink>
          </WidthWrapper>
        </HeaderWrapper>
      )}
    </>
  );
};

export default Header;
