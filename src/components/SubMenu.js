import React from 'react';
import styled from "styled-components";
import LinkOptions from './LinkOptions';

const Wrapper = styled.ul`
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  text-align: left;
  padding-left: calc(50vw - 640px);
`;

const ListItem = styled.li`
  border-right: 1px solid rgb(226, 232, 235);
  width: 300px;
  padding: 10px;
`;

const Link = styled.a`
  color: #042E61;
  text-decoration: none;
  display: inline-block;
  font-weight: 800;
  font-size: 14px;
  padding: 8px 10px;
  &:hover {
    text-decoration: underline;
  }
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