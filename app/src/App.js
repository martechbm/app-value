// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CalculatorPage} />
      </Switch>
    </Router>
  );
}

export default App;
