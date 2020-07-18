import React from 'react';
import { Router } from 'react-router-dom';
import { AppHeader } from "./common/components/AppHeader"
import './App.css';
import { AppRouter } from './Router'
import history from './history';
import {Provider} from 'react-redux'
import {store} from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <header className="App-header">
          <AppHeader/>
        </header>
        <div className="Main-app">
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
