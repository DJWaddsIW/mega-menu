import React from 'react';
// import styled from "styled-components";
import LinkOption from './LinkOption';

const LinkOptions = ({links}) => {
  return <ul>
    {links.map(link => {
      return <LinkOption link={link} />
    })}
  </ul>
};

export default LinkOptions;