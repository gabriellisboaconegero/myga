import React from 'react';
import { GamesProvider } from './gamesContext';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Profile } from './pages/Profile';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <GamesProvider>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </GamesProvider>
  );
}

export default App;