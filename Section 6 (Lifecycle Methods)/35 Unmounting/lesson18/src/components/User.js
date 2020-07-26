import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import posed from 'react-pose'

const CardAnimation = posed.div({
    visible: {
        height: "min-content",
        applyAtStart: { display: "block" }
    },
    hidden: {
        height: "0%",
        applyAtEnd: { display: "none" }
    }
})

class User extends Component {
    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "unknown",
        surname: "unknown",
        department: "unknown",
        fatherName: "unknown"
    }
    //Lesson 19 Eventle State deyisimi
    changeVisibility = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    DeleteEvent = (dispatch, e) => {
        const { id } = this.props;
        dispatch({ type: "DELETE_USER", payload: id })
    }
    componentWillUnmount() {
        alert("componentWillUnmount")
    }
    
    render() {
        const { name, surname, department, fatherName } = this.props;
        const { isVisible } = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className=" card text-left col-md-12 p-0 mb-3" style={isVisible ? {backgroundColor: "lavender"} : null}>
                                <div className="card-header d-flex align-items-center justify-content-between" >
                                    <h3 className="m-0" onClick={this.changeVisibility} style={{ cursor: 'pointer' }}>{name} {surname}</h3>
                                    <i className="far fa-trash-alt p-2" onClick={this.DeleteEvent.bind(this, dispatch)} style={{ cursor: 'pointer' }}></i>
                                </div>
                                <CardAnimation pose={isVisible ? "visible" : "hidden"}>
                                    <div className={isVisible ? "card-body user-card" : "user-card card-body"}>
                                        <p className='m-0'>Department: {department}</p>
                                        <p className='m-0'>Father Name: {fatherName}</p>
                                    </div>
                                </CardAnimation>
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
    department: PropTypes.string.isRequired,
    fatherName: PropTypes.string.isRequired,
}
export default User;