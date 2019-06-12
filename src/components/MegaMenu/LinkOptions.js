import React from 'react';
import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 10px;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkOptions = ({links}) => {
  return <ul>
    {links.map(link => {
      return <li key={link.title}><Link href={link.url}>{link.title}</Link></li>
    })}
  </ul>
};

export default LinkOptions;