import React, { Component } from 'react'
import User from './User';
//lesson 20
export default class Users extends Component {
    render() {
        const { loopUsers } = this.props;
        return (
            <div className='row justify-content-center'>
                {
                    loopUsers.map(u => {
                        return (
                            <User key={u.id} name={u.name} surname={u.surname} birthday={u.birthday} age={u.age}></User>
                        )
                    })
                }
            </div>
        )
    }
}
