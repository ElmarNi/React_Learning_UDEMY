import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "unknown",
        surname: "unknown",
        birthday: "unknown",
        age: "unknown"
    }
    //Lesson 19 Eventle State deyisimi
    ClickEvent = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    DeleteEvent = (dispatch, e) => {
        const {id} = this.props;
        dispatch({type: "DELETE_USER", payload: id})
    }
    render() {
        const { name, surname, birthday, age } = this.props;
        const { isVisible } = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className=" card text-left col-md-8 p-0 mt-3">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h3 className="m-0" onClick={this.ClickEvent} style={{ cursor: 'pointer' }}>{name} {surname}</h3>
                                    <i className="far fa-trash-alt p-2" onClick={this.DeleteEvent.bind(this, dispatch)} style={{ cursor: 'pointer' }}></i>
                                </div>

                                <div className={isVisible ? "active card-body" : "card-body"}>
                                    <p className='m-0'>Birthday: {birthday}</p>
                                    <p className='m-0'>Age: {age}</p>
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    birthday: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
}
export default User;