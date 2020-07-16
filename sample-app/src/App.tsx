import React from 'react';
import { Router } from 'react-router-dom';
import { AppHeader } from "./common/components/AppHeader"
import './App.css';
import { AppRouter } from './Router'
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header className="App-header">
          <AppHeader/>
        </header>
        <div className="Main-app">
          <AppRouter />
        </div>
      </Router>
    </div>
  );
}

export default App;
