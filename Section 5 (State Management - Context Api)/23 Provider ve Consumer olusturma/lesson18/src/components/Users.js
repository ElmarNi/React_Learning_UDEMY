import React, { Component } from 'react'
import User from './User';
import PropTypes from 'prop-types'

//lesson 20
export default class Users extends Component {
    render() {
        const { loopUsers, deleteUser } = this.props;
        return (
            <div className='row justify-content-center'>
                {
                    loopUsers.map(u => {
                        return (
                            <User
                                key={u.id}
                                id={u.id}
                                name={u.name}
                                surname={u.surname}
                                birthday={u.birthday}
                                age={u.age}
                                deleteUser={deleteUser}>
                            </User>
                        )
                    })
                }
            </div>
        )
    }
}

Users.propTypes ={
    loopUsers: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
}