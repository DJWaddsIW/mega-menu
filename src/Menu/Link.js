import React from "react";
import styled from "styled-components";
import { linkCSS } from './styling';

const LinkWrapper = styled.li`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  font-weight: 400;
  font-size: 14px;
  right: 0;
`;

const Link = styled.a`
  ${linkCSS};
  padding: 8px 10px 8px 16px;
  width: 100%;
  max-width: 240px;
  &:hover {
    text-decoration: underline;
  }
  &::after {
    content: ">";
    color: red;
    position: absolute;
    right: 0;
    font-weight: bolder;
    font-family: monospace;
    font-size: 120%;
    line-height: initial;
  }
`;

const LinkOption = ({ link }) => {
  return (
    <LinkWrapper>
      <Link href={link.url}>{link.title}</Link>
    </LinkWrapper>
  );
};

export default LinkOption;
