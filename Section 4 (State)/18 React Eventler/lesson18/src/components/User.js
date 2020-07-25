import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
        // ------- binding way 1
        this.onClickEvent = this.onClickEvent.bind(this)
        //--------
    }
    // state ={isVisible : false}
    static defaultProps = {
        name: "unknown",
        surname: "unknown",
        birthday: "unknown"
    }
    // -------asagi
    onClickEvent(number, e) {
        console.log(this, number);
    }
    // binding way 2 arrow function

    // onClickEvent = (e) => {
    //     console.log(this);
    // }

    //------
    render() {
        const { name, surname, birthday, age } = this.props;
        const { isVisible } = this.state;
        return (
            <div className=" card text-left col-md-8 p-0 mt-3">
                <div className="card-header d-flex align-items-center justify-content-between">
                    {/* --------asagi */}
                    <h3 className="m-0" onClick={this.onClickEvent.bind(this, 34)}>{name} {surname}</h3>
                    {/* ------ */}

                    {/* --------binding way 3 
                    <h3 className="m-0" onClick={this.onClickEvent.bind(this)}>{name} {surname}</h3>
                    /* ------ */}

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