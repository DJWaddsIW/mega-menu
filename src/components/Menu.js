import React from 'react';
import styled from "styled-components";
import SubMenu from './SubMenu';

const Wrapper = styled.ul`
  font-family: Nationale, sans-serif;
  background-color: white;
  display: flex;
  border-top: 2px solid #E1E8EC;
  border-bottom: 2px solid #E1E8EC;
`;

const ListItem = styled.li`
  text-align: center;
  position: relative;
  display: block;
  width: 100%;
  > ul {
    display: none;
  }
  &:hover > ul {
    display: flex;
  }
  &:hover > a {
    border-bottom: 4px solid;
  }
`;

const Link = styled.a`
  color: #042E61;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  font-weight: bolder;
  display: inline-block;
  padding: 8px 10px;
`;

const Menu = ({ menu }) => {
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

export default Menu;