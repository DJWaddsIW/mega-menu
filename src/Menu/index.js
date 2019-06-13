import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { linkCSS, fadeIn, GlobalStyle } from './styling';

const MenuWrapper = styled.div`
  background-color: white;
  border-top: 1px solid #e1e8ec;
  border-bottom: 2px double #e1e8ec;
  font-size: 16px;
  z-index: 100;
  @media screen and (max-width: ${props => props.displayFrom}px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  width: fit-content;
  max-width: 1280px;
  position: relative;
  &:hover li:first-child > a {
    border: 0 none;
  }
`;

const Overlay = styled.li`
  position: fixed;
  width: 100%;
  background: #333;
  height: 100%;
  z-index: 99;
  left: 0;
  opacity: 0.614;
  display: none;
  margin-top: 48px;
`;

const ListItem = styled.li`
  text-align: center;
  position: relative;
  display: block;
  padding: 0 10px;
  margin-bottom: -2px;
  z-index: 100;
  > span > ul {
    display: none;
    opacity: 0;
  }
  &:hover > span > ul {
    display: flex;
    animation: ${fadeIn} 0.3s ease-in-out;
    opacity: 1;
  }
  &:hover > a {
    border-bottom: 4px solid !important;
  }
  &:first-child > a {
    border-bottom: 4px solid;
  }

  &:not(:first-child):hover ~ ${Overlay} {
    display: block;
  }
`;

const Link = styled.a`
  ${linkCSS};
  font-weight: bolder;
  padding: 8px 10px;
`;

const MegaMenu = ({ data : { menu }, displayFrom = 640 }) => {
  return (
    <MenuWrapper displayFrom={displayFrom} >
      <GlobalStyle />
      <Menu>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
        {menu.map(item => {
          return (
            <ListItem key={item.title}>
              <Link href={item.url}>{item.title}</Link>
              <SubMenu subCategories={item.subCategories} />
            </ListItem>
          );
        })}
        <Overlay />
      </Menu>
    </MenuWrapper>
  );
};

export default MegaMenu;
