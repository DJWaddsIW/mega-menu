import React from 'react';
import LinkOption from './Link';

const Options = ({links}) => {
  return <ul>
    {links.map(link => {
      return <LinkOption link={link} key={link.title} />
    })}
  </ul>
};

export default Options;