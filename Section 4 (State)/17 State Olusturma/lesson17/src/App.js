import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <div className="App container">
      <Navbar title='User App'></Navbar>
      <div className='row justify-content-center'>
        <User name='Elmar' surname='Ibrahimli' birthday='1999' age='21'></User>
        <User name='Elmar' surname='Ibrahimli' birthday='1999' age='21'></User>
        <User name='Elmar' surname='Ibrahimli' birthday='1999' age='21'></User>
        <User name='Elmar' surname='Ibrahimli' birthday='1999' age='21'></User>
      </div>
    </div>
  );
}

export default App;
