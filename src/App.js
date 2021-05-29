import { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// store
import MdStore from './store/MdStore';

// styles
import GlobalStyle from './style/GlobalStyle';
import * as Fade from './style/FadeIn';

// components
import Header from './components/Header/Header';
import Markdown from './components/Markdown/Markdown';
import List from './components/List';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <MdStore>
        <Header />
        <Markdown />
        <List />
      </MdStore>
      {/* <List /> */}
    </Fragment>
  );
}

export default App;
