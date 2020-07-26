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
                        const { users } = value;
                        return (
                            <div className='row justify-content-center px-3'>
                                {
                                    users.map(u => {
                                        return (
                                            <User
                                                key={u.id}
                                                id={u.id}
                                                name={u.name}
                                                surname={u.surname}
                                                fatherName={u.fatherName}
                                                department={u.department}
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
