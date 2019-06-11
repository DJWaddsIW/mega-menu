import React from 'react';
import styled from "styled-components";
import LinkOptions from './LinkOptions';

const Wrapper = styled.ul`
  border: 3px solid blue;
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  border: 3px solid red;
`;

const Link = styled.a`

`;

const SubMenu = ({subCategories}) => {
  return <Wrapper>
    {subCategories.map(subCategory => {
      return <ListItem key={subCategory.title}>
        <Link href={subCategory.url}>{subCategory.title}</Link>
        <LinkOptions links={subCategory.links} />
      </ListItem>
    })}
    
  </Wrapper>
};

export default SubMenu;