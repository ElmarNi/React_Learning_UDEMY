import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    state ={
        isVisible : false
    }
    static defaultProps = {
        name: "unknown",
        surname: "unknown",
        birthday: "unknown"
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isVisible : false
    //     }
    // }
    render() {
        const { name, surname, birthday, age } = this.props;
        const { isVisible } = this.state;
        return (
            <div className=" card text-left col-md-8 p-0 mt-3">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h3 className="m-0">{name} {surname}</h3>
                    <i className="far fa-trash-alt p-2" style={{ cursor: 'pointer' }}></i>
                </div>
                {
                    isVisible ? <div className="card-body">
                        <p>Birthday: {birthday}</p>
                        <p>Age: {age}</p>
                    </div>
                    : null
                }
            </div>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired
}
export default User;