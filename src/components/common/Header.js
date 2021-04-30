import React, { useState, useContext } from "react";
import { Link as DLink, useLocation } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import Toggle from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: -webkit-linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${(props) => (props.open ? "block" : "none")};
  font-family: "Open Sans";
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  background: ${(p) => p.theme.bodyBackgroundColor};
  border-bottom: 3px solid ${(props) => props.theme.secondaryColor};
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <DLink {...props}>{children}</DLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: ${(p) => p.theme.bodyFontColor};
  font-weight: ${(props) => (props.isActive ? 800 : 400)};
`;
const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink isActive={pathname === "/"} to="/">
          Home
        </StyledLink>
        <StyledLink isActive={pathname === "/login"} to="/login">
          Login
        </StyledLink>
        <Toggle isActive={id === "dark"} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
}
