import React from "react";
import styled from "styled-components";
import SubMenu from "./SubMenu";
import { fadeIn } from "../../styles/keyframes";

const MenuWrapper = styled.div`
  font-family: Nationale, sans-serif;
  background-color: white;
  border-top: 1px solid #e1e8ec;
  border-bottom: 2px double #e1e8ec;
  font-size: 16px;
`;

const Menu = styled.ul`
  display: flex;
  width: fit-content;
  &:hover li:first-child > a {
    border: 0 none;
  }
`;

const ListItem = styled.li`
  text-align: center;
  position: relative;
  display: block;
  padding: 0 10px;
  margin-bottom: -2px;
  > ul {
    display: none;
    opacity: 0;
  }
  &:hover > ul {
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
`;

const Link = styled.a`
  color: #032f61;
  text-decoration: none;
  font-weight: 600;
  font-weight: bolder;
  display: inline-block;
  padding: 8px 10px;
  font-size: 16px;
`;

const MegaMenu = ({ menu }) => {
  return (
    <MenuWrapper>
      <Menu>
        <ListItem>
          <Link href="www.mag.co.uk">Home</Link>
        </ListItem>
        {menu.map(item => {
          return (
            <ListItem key={item.title}>
              <Link href={item.url}>{item.title}</Link>
              <SubMenu subCategories={item.subCategories} />
            </ListItem>
          );
        })}
      </Menu>
    </MenuWrapper>
  );
};

export default MegaMenu;
