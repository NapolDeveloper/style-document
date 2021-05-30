import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// store
import MdStore from './store/MdStore';
import ColorBoxStore from './store/ColorBoxStore';

// styles
import GlobalStyle from './style/GlobalStyle';
import * as Fade from './style/FadeIn';

// components
import Header from './components/Header/Header';

import Markdown from './components/Markdown/Markdown';
import Home from './components/Home/Home';
import DocumentList from './components/DocumentList/DocumentList';

import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <MdStore>
      <ColorBoxStore>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Fade.FadeAnimation>
              <Route exact path='/' render={() => <Home />} />
              <Route exact path='/edit' render={() => <Markdown />} />
              <Route exact path='/list' render={() => <DocumentList />} />
            </Fade.FadeAnimation>
          </Switch>
          <SideBar />
        </Router>
      </ColorBoxStore>
    </MdStore>
  );
}

export default App;
