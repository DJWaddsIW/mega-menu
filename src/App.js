import React from 'react';
import styled from "styled-components";
import Menu from './components/Menu';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  left: 0;
  right: 0;
  background: rgba(128, 128, 128, 0.6);
  height: 100%;
`;


const App = ({ data: {menu} }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Menu menu={menu} />
    </Wrapper>
  );
}

export default App;
