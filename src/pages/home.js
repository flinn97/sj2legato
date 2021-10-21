import AuthService from "../services/auth.service";

import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Homesarecool extends Component {
    constructor(props) {
        super(props);
        

    };
    componentDidMount() {
        let usr = AuthService.getCurrentUser();
        console.log(usr);
        if (usr) {
            if (usr.role === "admin") {
                //window.location.reload();
            }
            else {
                if (usr.role === "teacher") {
                    this.props.history.push("/profile");

                }
                else {
                    this.props.history.push({
                        pathname: "/student_routes",
                    });
                }
            }
        }
    }
    render() {

        return (
            <div>
                <h1 className="title is-1">This is the Home Page</h1>
                <p>
                    I'll need to add content to this page for marketing.
    </p>
            </div>

        )
    }
};

export default Homesarecool;