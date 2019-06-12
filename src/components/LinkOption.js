import React from 'react';
import styled from "styled-components";

const Wrapper = styled.li`
  width: calc(100% - 16px);
  display: grid;
  grid-template-columns: 80% 20%;
  &:hover {
    text-decoration: underline;
  }
  padding: 8px 10px;
  background-color: lime;
`;

const Link = styled.a`
  padding-left: 8px;
  text-decoration: none;
  display: inline-block;
`;

const Arrow = styled.p`
  text-align: right;
  color: red;
  font-weight: bolder;
`;

const LinkOption = ({link}) => {
  return <Wrapper key={link.title}>
      <Link href={link.url}>{link.title}</Link>
      <Arrow>></Arrow>
  </Wrapper>
};

export default LinkOption;