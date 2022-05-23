import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";



const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

//this component signs in a teacher allready in the database.
//using react-validation.
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    componentDidMount() {
        let auth = AuthService.getCurrentUser();
        if (auth) {
            if (auth.role === "teacher") {
                this.props.history.push("/profile");
                window.location.reload();
            }
            if (auth.role === "student") {
                this.props.history.push("/student_routes");
                window.location.reload();
            }
        }
    }
    //state creation and binding.
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            
            email: "",
            password: "",
            loading: false,
            message: "",
            attempts:0,
        };
    }
    //handles all changes with state.
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    //submites for login using the controller to connect with backend. Sends to the teacher profile if teacher or the student if back end spits out student.
    handleLogin(e) {
        e.preventDefault();
        let attempt = this.state.attempts + 1;
        this.setState({
            message: "",
            loading: true,
            attempts: attempt
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0)
        {
            if (!this.state.email || !this.state.password) {
                this.setState({
                    message:"Please include correct email and password"
                })
            }
            else { 
                var lower = this.state.email.toLowerCase();
            AuthService.login(lower, this.state.password).then(response => {
                //console.log(response);

                
                if (response.role === "admin") {
                    this.props.history.push("/admin")
                    window.location.reload();

                }
                else {
                    if (response.role === "student") {
                        console.log(response.data);
                        this.props.history.push({
                            pathname: "/student_routes",
                            state: { current: response.data }
                        });
                        window.location.reload();
                    }
                    else {
                        this.props.history.push("/profile");
                        window.location.reload();
                    }
                }
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
                );
            }
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        //login page for the screen. 
        return (
            <div className="z">
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                        {this.state.attempts < 3 ? (
                            <Form
                                onSubmit={this.handleLogin}
                                ref={c => {
                                    this.form = c;
                                }}
                            >
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        validations={[required, email]}
                                        maxLength="30"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        validations={[required]}
                                        maxLength="20"

                                    />
                                </div>

                                <div className="form-group" style={{marginTop:"37px"}}>
                                    <button
                                        className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "85spx" }}
                                        disabled={this.state.loading}
                                    >
                                        {this.state.loading && (
                                            <span className="spinner-border spinner-border-sm"></span>
                                        )}
                                        <span>Login</span>
                                    </button>
                                </div>

                                {this.state.message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}
                                <CheckButton
                                    style={{ display: "none" }}
                                    ref={c => {
                                        this.checkBtn = c;
                                    }}
                                />
                            </Form>
                        ) : (<div className="alert alert-danger">You have Reached the Maximum Attempts to login.</div>)}
                    
                </div>
            </div>
            </div>
        );
    }
}