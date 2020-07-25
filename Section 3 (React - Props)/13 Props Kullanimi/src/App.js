import React from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Navbar title="User App"></Navbar>
      <User name='Elmar' surname='Ibrahimli' birthday='1999'></User>
      <User name='Tuncay' surname='Abilsoylu' birthday='1999'></User>
      <User name='Kamran' surname='Orucov' birthday='1998'></User>
    </div>
  );
}

export default App;
