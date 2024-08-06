// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CalculatorPage} />
      </Routes>
    </Router>
  );
}

export default App;
