import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

//this component allow for teacher sign up.
//using the react-validation to help with arguments.
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The name must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
class signUp extends Component {
    //state creation.
    constructor(props) {
        super(props);
        this.handleSub = this.handleSub.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            //successful: false,
            message: "Sign Up",
           messag:false,
        };
    }


    //handles any change within state.
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }

  //when the submit button is pushed it uses the controller to sign up the teacher on the backend. then it shoots teacher to the profile page.
    handleSub(e) {
        e.preventDefault();
        //var data = this.state;
        if (!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.password) {
            this.setState({
                message: "Please fill out full form",
                messag: true,
            })
        }
        
        
            
            else {
               
            AuthService.register(
                this.state.firstname,
                this.state.lastname,
                this.state.email,
                this.state.password
            ).then(response => {
                this.setState({

                    firstname: response.data.firstname,
                    lastname: response.data.lastname,
                    email: response.data.email,
                    id: response.data.id,
                });
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                //console.log("igothere");

                //console.log(response.data);

                this.props.history.push("/profile");
                window.location.reload();
            })
            }
                

    }

    render() {
        //render signup form using the react-validation stuff.
        return (
            <div className="z">
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.handleSub}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleChange}
                                        validations={[required, vusername]}
                                    />
                                </div>
                                    <div className="form-group">
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lasttname}
                                        onChange={this.handleChange}
                                        validations={[required, vusername]}
                                    />
                                </div>

                                <div className="form-group">
                                    
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        validations={[required, email]}
                                    />
                                </div>

                                <div className="form-group">
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="New Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        validations={[required, vpassword]}
                                    />
                                </div>

                                <div className="form-group">
                                        <button className="btn btn-primary btn-block">Sign up</button>
                                    </div>
                                    {this.state.messag&&(<div className="alert alert-danger" >{this.state.message} </div>)}
                                    <CheckButton
                                        style={{ display: "none" }}
                                        ref={c => {
                                            this.checkBtn = c;
                                        }}
                                    />
                            </div>
                        )}

                       
                    </Form>
                </div>
                </div>
                </div>
        );
    }
}
export default signUp

