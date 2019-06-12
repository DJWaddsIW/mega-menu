import React from 'react';
import styled from "styled-components";
import SubMenu from './SubMenu';
import { fadeIn } from '../../styles/keyframes';

const Wrapper = styled.ul`
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  position: relative;
  display: block;
  width: 100%;
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
    border-bottom: 4px solid;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 10px;
`;

const MegaMenu = ({ menu }) => {
  return (
    <Wrapper>
      <ListItem><Link href="www.mag.co.uk">Home</Link></ListItem>
      {menu.map(item => {
        return <ListItem key={item.title}>
          <Link href={item.url}>{item.title}</Link>
          <SubMenu subCategories={item.subCategories} />
        </ListItem>
      })}
    </Wrapper>
  );
}

export default MegaMenu;
