import React from 'react';
import styled from "styled-components";

const Wrapper = styled.li`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 14px;
  padding: 8px 10px;
`;

const Link = styled.a`
  color: #042E61;
  padding-left: 8px;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.p`
  color: red;
  text-align: right;
  font-weight: bolder;
`;

const LinkOption = ({link}) => {
  return <Wrapper key={link.title}>
      <Link href={link.url}>{link.title}</Link>
      <Arrow>></Arrow>
  </Wrapper>
};

export default LinkOption;