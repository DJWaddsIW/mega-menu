import React from 'react';
import Menu from './components/Menu';
import GlobalStyle from './GlobalStyle';

const App = ({ data: {menu} }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Menu menu={menu} />
    </React.Fragment>
  );
}

export default App;
