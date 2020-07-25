import React, { Component } from 'react'
import User from './User';
import UserConsumer from '../context';
//lesson 20
export default class Users extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    value => {
                        const { loopingUsers } = value;
                        return (
                            <div className='row justify-content-center'>
                                {
                                    loopingUsers.map(u => {
                                        return (
                                            <User
                                                key={u.id}
                                                id={u.id}
                                                name={u.name}
                                                surname={u.surname}
                                                birthday={u.birthday}
                                                age={u.age}
                                                >
                                            </User>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
