import React, { Component } from 'react';
import posed from 'react-pose';

const FormAnimation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: { display: "block" }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: { display: "none" }
    }
})

export default class AddUser extends Component {
    state = {
        isVisible: false
    }
    changeVisibility = (e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    render() {
        const { isVisible } = this.state;
        return (
            <div className="row">
                <div className="col-md-12 mb-3">
                    <button onClick={this.changeVisibility} className="btn btn-lg btn-info btn-block">{isVisible ? "Hide form" : "Show form"}</button>
                </div>
                <div className="col-12">
                    <FormAnimation pose={isVisible ? "visible" : "hidden"}>
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-left m-0">Add User</h2>
                            </div>
                            <div className="card-body text-left">
                                <form>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Name</label>
                                            <input type="text"
                                                name="name"
                                                id="id"
                                                placeholder="Enter name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="surname">Surname</label>
                                            <input type="text"
                                                name="surname"
                                                id="id"
                                                placeholder="Enter surname"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="department">Department</label>
                                            <input type="text"
                                                name="department"
                                                id="id"
                                                placeholder="Enter department"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="fatherName">Father Name</label>
                                            <input type="text"
                                                name="fatherName"
                                                id="id"
                                                placeholder="Enter Father Name"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group col-12 m-0">
                                            <input type="submit" className="btn btn-block btn-success" value="Add" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </FormAnimation>
                </div>
            </div>
        )
    }
}
