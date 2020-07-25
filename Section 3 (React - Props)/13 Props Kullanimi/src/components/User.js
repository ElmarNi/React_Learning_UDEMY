import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const {name, surname, birthday} = this.props
        return (
                <ul className='text-left p-0 m-0 mt-5'>
                    <li>Ad: {name}</li>
                    <li>Soyad: {surname}</li>
                    <li>Doguldugu il: {birthday}</li>
                </ul>
        )
    }
}
