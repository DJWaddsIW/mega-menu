import React from 'react';
import styled from "styled-components";
import SubMenu from './SubMenu';

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ListItem = styled.li`
  position: relative;
  > ul {
    display: none;
  }
  &:hover > ul {
    display: flex;
  }
`;

const Link = styled.a`

`;

const Menu = ({ menu }) => {
  console.log(menu)
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
