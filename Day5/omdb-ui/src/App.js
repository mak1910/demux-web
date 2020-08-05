import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import HomePage from './pages/HomePage/HomePage';

/**
 * The Router maps a url to a component
 */
function App() {
  return (
    <div className="container-fluid remove-padding">
      <Router>
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/details/:imdbID" component={DetailsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
