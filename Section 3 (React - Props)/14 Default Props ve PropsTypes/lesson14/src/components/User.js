import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    static defaultProps = {
        name : "unknown",
        surname : "unknown",
        birthday : "unknown"
    }
    render() {
        const { name, surname, birthday } = this.props;
        return (
            <ul className='text-left p-0 m-0 mt-5'>
                <li>Ad: {name}</li>
                <li>Soyad: {surname}</li>
                <li>Doguldugu il: {birthday}</li>
            </ul>
        )
    }
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    birthday : PropTypes.string.isRequired
}
export default User;