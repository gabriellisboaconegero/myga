import React from 'react';
import { GamesProvider } from './gamesContext';
import { Home } from './pages/Home';

function App() {
  return (
    <GamesProvider>
      <Home />
    </GamesProvider>
    
  );
}

export default App;