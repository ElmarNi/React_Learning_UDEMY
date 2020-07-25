import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser'

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Navbar title='User App'></Navbar>
        <hr className="my-5"></hr>
        <AddUser></AddUser>
        <hr className="my-5"></hr>
        <Users></Users>
      </div>
    )
  }
}
export default App;