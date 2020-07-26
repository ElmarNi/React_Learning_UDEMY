import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import Test from './Test';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <Test test="deneme" />
        <Navbar title='User App'/>
        <hr className="my-5"></hr>
        <AddUser/>
        <hr className="my-5"></hr>
        <Users/>
      </div>
    )
  }
}
export default App;