import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <h2>About</h2>
          <p>This is the about page.</p>
        </Route>
        <Route path="/">
          <h2>Home</h2>
          <p>Welcome to the app!</p>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
