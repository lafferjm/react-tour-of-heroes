import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Heroes from './components/heroes';

const App = () => (
  <>
    <h1>Tour of Heroes</h1>
    <nav>
      <Link to="/heroes">Heroes</Link>
    </nav>
    <Route path="/heroes" component={Heroes} />
  </>
);

export default App;
