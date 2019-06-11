import React from 'react';
import styled from "styled-components";

const LinkOptions = ({links}) => {
  return <ul>
    {links.map(link => {
      return <li key={link.title}><a href={link.url}>{link.title}</a></li>
    })}
  </ul>
};

export default LinkOptions;