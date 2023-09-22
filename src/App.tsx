import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Link to="/login">login link</Link>
      <Link to="/profile">prof link</Link>
      <Link to="/iss">iss link</Link>
      <Link to="/astronauts">astronauts link</Link>
    </div>
  );
}

export default App;
