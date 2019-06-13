import React from 'react';
import Link from './Link';

const Options = ({links}) => {
  return <ul>
    {links.map(link => {
      return <Link link={link} key={link.title} />
    })}
  </ul>
};

export default Options;