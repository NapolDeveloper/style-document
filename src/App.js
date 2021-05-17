import { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// styles
import GlobalStyle from './style/GlobalStyle';
import * as Fade from './style/FadeIn';

// components
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
