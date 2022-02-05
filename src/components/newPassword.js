import React, { Component } from "react";
//import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


export default class Student_routes extends Component {
    constructor(props) {
        super(props);
        
        this.messaging = this.messaging.bind(this);



        this.state = {
            message: "Make sure passwords match",
            messag: false,

        };

    }

    messaging(e) {
        e.preventDefault();
        if (this.props.props.props.password1 !== this.props.props.props.password2) {
            this.setState({
                messag: true,
            })
            console.log("here");
        }
        
        else {
            this.props.props.handleLogin();
            console.log("here1");

        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <div>Please change your current password. Good passwords generally contain letters numbers and symbols.</div>

                    <Form
                        onSubmit={this.messaging}
                        ref={c => {
                            //this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="password1">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password1"
                                //value= {this.props.props.password}
                                onChange={this.props.props.handleChange}
                                //validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password2">Retype New Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password2"
                                //value={this.state.password}
                                onChange={this.props.props.handleChange}
                                //validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }}>
                                Change Password
                            </button>
                        </div>
                        {this.state.messag && (<div className="alert alert-danger" >{this.state.message} </div>)}

                        
                    </Form>
                </div>
            </div>
        );
    }
}