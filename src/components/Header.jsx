import React, {useState} from 'react';
import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';

const HeaderCtn = styled.div`
  position: fixed; /* Fixed at the top */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;

  @media (max-width: 320px) {
    padding: 0.3em 0.8em; /* Slightly smaller padding for very narrow screens */
  }
`;

const Navigation = styled.nav`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #444;
  padding: 1em 0;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    background: transparent;
    padding: 0 2em;
    gap: 5em;
    font-size: 1.5em;
    }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ListItem = styled.li`
  text-align: center;
  cursor: pointer;
  color: #eeeeee;
  // white-space: nowrap;

  ${({ active }) => active && `
    text-decoration: underline;
    text-underline-offset: .4em;
    color: rgb(73, 73, 235);
  `};

  &:hover {
    color: rgb(73, 73, 235);
  }

  @media (min-width: 1080px) {
    padding: 1em;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover, &:active {
    color: rgb(73, 73, 235);
  }
`;

const StyledLinkWrapper = styled(Link)`
  text-decoration: none; /* Remove underline */
`;

const Title = styled.h2`
  color: #aaa;
  font-size: 1.2em; /* Default size for smallest screens */
  cursor: pointer;
  margin: 0;
  white-space: nowrap;

  @media (min-width: 321px) {
    font-size: 1.5em; /* Medium size for larger phones */
  }

  @media (min-width: 481px) {
    font-size: 2em; /* Larger size for tablets and above */
  }

  @media (min-width: 1080px) {
    font-size: 3em;
  }

  @media (max-width: 280px) {
    font-size: 1em; /* Smaller size for ultra-small screens */
  }
`;


const TitleSpan = styled.span`
  color: rgb(73, 73, 235);
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1em;
  height: 1em;
  cursor: pointer;
  margin: 1em;

  div {
    width: 100%;
    height: 3px;
    background: #eee;
  }

  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 280px) {
    padding: 0.3em 0.8em; /* Compact padding for ultra-small screens */
  }
`;

function Header({ loggedIn, userProfile, handleLogin, handleLogout }) {
  const location = useLocation(); // Hook to get the current location
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderCtn>
      <Hamburger onClick={() => setMenuOpen((prev) => !prev)}>
        <div/>
        <div/>
        <div/>
      </Hamburger>
      <StyledLinkWrapper to="/">
        <Title>Retail<TitleSpan>Auto</TitleSpan></Title>
      </StyledLinkWrapper>

      <Navigation open={menuOpen}>
        <List>
          <ListItem active={location.pathname === '/buy'}>
            <StyledLink to="/buy">Buy Cars</StyledLink>
          </ListItem>

          <ListItem active={location.pathname === '/sell'}>
            <StyledLink to="/sell">Sell Cars</StyledLink>
          </ListItem>

          {loggedIn && (
            <ListItem active={location.pathname === '/wish'}>
              <StyledLink to="/wish">Wishlist</StyledLink>
            </ListItem>
          )}
        </List>
      </Navigation>

      <Login 
        loggedIn={loggedIn} 
        userProfile={userProfile} 
        handleLogin={handleLogin}
        handleLogout={handleLogout} 
      />
    </HeaderCtn>
  );
}

export default Header;
