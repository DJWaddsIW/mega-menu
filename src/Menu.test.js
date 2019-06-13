import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import testData from './test-data.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Menu data={ testData.menu } />, div);
  ReactDOM.unmountComponentAtNode(div);
});
