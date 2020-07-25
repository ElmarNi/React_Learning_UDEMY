import React, { Component } from 'react'

const UserContext = React.createContext();

export class UserProvider extends Component {

    state = {
        loopingUsers: [
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