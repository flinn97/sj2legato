import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


export default class Student_routes extends Component {
    constructor(props) {
        super(props);
        
        this.logOut = this.logOut.bind(this);



        this.state = {
         

        };

    }
    logOut() {
        AuthService.logout();
        window.location.reload();
    }
    

    render() {
        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <div>Please login with the new password.</div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", marginTop:"25px"}}><button onClick={this.logOut} className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px",  }}>
                                Login</button></div>

                    
                </div>
            </div>
        );
    }
}