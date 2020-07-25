import React, { Component } from 'react'

export default class AddUser extends Component {
    render() {
        return (
            <div className="row">
                <div className="card col-md-12 p-0">
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
                                    <input type="submit" className="btn btn-block btn-success" value="Add"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
