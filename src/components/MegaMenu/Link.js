import React from 'react';
import styled from "styled-components";

const Wrapper = styled.li`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 14px;
`;

const Link = styled.a`
  padding: 8px 10px;
  color: #042E61;
  padding-left: 8px;
  text-decoration: none;
  display: block;
  width: 100%;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
  &::after {
    content: '>';
    color: red;
    position: absolute;
    right: 0;
    font-weight: bolder;
  }
`;

const LinkOption = ({link}) => {
  return <Wrapper>
      <Link href={link.url}>{link.title}</Link>
  </Wrapper>
};

export default LinkOption;