import React, { Component } from "react";
import AuthService from "../services/auth.service";



export default class Login extends Component {
    componentDidMount() {
        let auth = AuthService.getCurrentUser();
        if (auth) {
            if (auth.role === "teacher") {
                this.props.history.push("/profile");
            }
            if (auth.role === "student") {
                this.props.history.push("/student_routes");
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

            // if (!this.state.email || !this.state.password) {
            //     this.setState({
            //         message:"Please include correct email and password"
            //     })
            // } 
                var lower = this.props.state.email.toLowerCase();
            AuthService.login(lower, this.props.state.password).then(response => {
                //console.log(response);

                this.props.handleLogin.bind(this,{currentuser:response.data, role:response.role,viewstudent:true})
               
                },
                
                );
            
    
    }

    render() {
        //login page for the screen. 
        return (
            <div >
            <div className="col-md-12">
                <div className="card card-container">
                    <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img" className="profile-img-card"/>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.props.state.email}
                                        onChange={this.props.handleChange}
                                        maxLength="30"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.props.state.password}
                                        onChange={this.props.handleChange}
                                        maxLength="20"

                                    />
                                </div>

                                <div className="form-group" style={{marginTop:"37px"}}>
                                    <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "85spx" }} onClick={this.props.handleLogin.bind(this,{currentuser:true,student:true,viewstudent:true})} >
                                        <span>Login</span>
                                    </button>
                                </div>

                   
                    
                </div>
            </div>
            </div>
        );
    }
}