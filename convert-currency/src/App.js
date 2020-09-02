import React, { useMemo } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home';
import Nav from './components/Nav';
import Convert from './components/Convert';
import Historical from './components/Historical';

import { Container } from './components/Grid';
import { getSymbolsApiFixer } from './actions/actions-types';
import { useSelector, useDispatch } from 'react-redux';

import GlobalStyle from './Styles/Global';

const App = () => {
  const { isLoadingRates } = useSelector(state => state.loading);
  const disptach = useDispatch();

  // chargement des symbols
  useMemo(() => {
    disptach(getSymbolsApiFixer());
  }, [disptach]);

  if (isLoadingRates)

    return (
      <Container>
        <GlobalStyle />
        <p>Waiting ...</p>
      </Container>
    )

  return (
    <Router>
      <GlobalStyle />
      <Container >
        <Nav />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/convert" component={Convert} />
        <Route path="/historical" component={Historical} />
        <Route component={({ location }) => (<p>404 Page Not Found </p>)} />
      </Switch>
    </Router>
  );
}

export default App;