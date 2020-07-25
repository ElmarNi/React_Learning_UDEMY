import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Navbar title='User App'></Navbar>
        <Users></Users>
      </div>
    )
  }
}
export default App;