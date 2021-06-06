import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './component/header/Header'
import Home from './component/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from 'react-router-dom'
import Detail from './component/detail/Detail';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
