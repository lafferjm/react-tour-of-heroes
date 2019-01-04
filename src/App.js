import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Heroes from './components/heroes';
import Dashboard from './components/dashboard';

const App = () => (
  <>
    <h1>Tour of Heroes</h1>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/heroes">Heroes</Link>
    </nav>
    <Route path="/heroes" component={Heroes} />
    <Route path="/dashboard" component={Dashboard} />
  </>
);

export default App;
