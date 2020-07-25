import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App container">
      <Navbar title='User App'></Navbar>
      <User name='Elmar' surname='Ibrahimli' birthday='1999'></User>
      <User name='Tuncay' surname='Abilsoylu' ></User>
      <User name='Kamran' birthday='1999'></User>
    </div>
  );
}

export default App;
