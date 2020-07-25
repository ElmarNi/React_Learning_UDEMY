import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
  //lesson 20 Compponentler arasi iletisim
  state = {
    users: [
      {
        id: 1,
        name: "Elmar",
        surname: "Ibrahimli",
        birthday: 1999,
        age: 21
      },

      {
        id: 2,
        name: "Tuncay",
        surname: "Abilsoylu",
        birthday: 1999,
        age: 21
      },

      {
        id: 3,
        name: "Kamran",
        surname: "Orucov",
        birthday: 1998,
        age: 21
      },
      {
        id: 4,
        name: "Lale",
        surname: "Hasanli",
        birthday: 1999,
        age: 21
      }
    ]
  }
  deleteUser (id) {
    this.setState({
      users: this.state.users.filter(u => id !== u.id)
    })
  }
  render() {
    return (
      <div className="App container">
        <Navbar title='User App'></Navbar>
        <Users deleteUser={this.deleteUser.bind(this)} loopUsers={this.state.users}></Users>
      </div>
    )
  }
}
export default App;