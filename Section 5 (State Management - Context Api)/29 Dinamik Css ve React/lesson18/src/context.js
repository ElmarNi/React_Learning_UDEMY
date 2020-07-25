import React, { Component } from 'react'

const UserContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    default:
      return state
  }
}
export class UserProvider extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Elmar",
        surname: "Ibrahimli",
        department: "IT",
        fatherName: "Nariman"
      },

      {
        id: 2,
        name: "Tuncay",
        surname: "Abilsoylu",
        department: "IT",
        fatherName: "Niyazi"
      },

      {
        id: 3,
        name: "Kamran",
        surname: "Orucov",
        department: "IT",
        fatherName: "Samad"
      },
      {
        id: 4,
        name: "Lale",
        surname: "Hasanli",
        department: "IT"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;