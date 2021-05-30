import { Fragment } from 'react';
import styled from 'styled-components';
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
import List from './components/List';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import NewContent from './components/NewContent/NewContent';

function App() {
  return (
    <MdStore>
      <ColorBoxStore>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route exact path='/markdown' render={() => <Markdown />} />
            {/* <Markdown /> */}
          </Switch>
        </Router>
      </ColorBoxStore>
      <SideBar />
    </MdStore>
  );
}

export default App;
