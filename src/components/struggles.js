import React, { Component } from 'react';

import authService from "../services/auth.service";
import moment from 'moment';

//import PropTypes from 'prop-types';


//allows me to create a dialog box to pop up for adding students with names and emails.
export default class Hwmessage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.message = this.message.bind(this);


        
        this.state = {
            firstMessage: this.props.firstMessage,
            messages: this.props.messages,
            message: "",
            placeholder:"",
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",

        }
       

    }

    message() {
        var m1 = moment().format('MMMM Do YYYY, h:mm:ss a');

        if (this.state.message !== '') {
            let M = this.state.messages;
                let J = {
                    m: this.state.message,
                    date: m1,
                    role: this.props.role,
                }
            
            
            
            M.push(J);
            this.setState({
                firstMessage: false,
                messages:M,
            })
            authService.hwmessage(this.props.id, this.state.message, m1, this.props.role);
        }

        this.setState({
            message:"",
        })

    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    

    render() {

        return (
           
                    

                        <div style={{ borderTop: "1px solid gray" }} >
                            <div>
                    Student Struggles.
                            </div>

                <div style={{ marginTop: "15px", }}>

                    <p style={{ marginBottom: "10px" }}> Student questions and messaging. </p>
                    {this.state.firstMessage ? (

                        < div style={{ height: "200px", borderTop: "1px solid green", borderLeft: "1px solid green", borderRight: "1px solid green" }}>
                                    <div style={{ flexDirection: "column" }}>
                        <div style={{ width: "100%", height: "100px", }}>
                            <div style={{ width: "100px", height: "100px", float: "left", marginLeft: "10px", marginTop: "10px" }}>
                                <img
                                    src={this.state.picture}
                                    alt="profile-img"
                                    className="profile-img-card cropped1"
                                    style={{ alignSelf: "flex-start" }}

                                />
                            </div>
                        </div>
                        <p style={{ marginLeft: "20px", marginTop: "20px", color: "gray" }}>This is your first message about this homework to this student. </p>
                    </div>

                </div>
                    ): (
                <div style={{ height: "200px", borderTop: "1px solid green", borderLeft: "1px solid green", borderRight: "1px solid green" }}>
                                {this.state.messages.map((message, index) =>
                                    <div key={index}>
                                        {message.role === "teacher" ? (
                                            <div>{message.m}</div>
                                        ) : (
                                                <div>{message.m}student</div> )}
                                    </div>
                                    )

                                }


                </div>
                
                
                
                )}
                                
                                <div className="fill2" style={{
                                }}>
                                    <div className="form-group" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            rows="1"
                                id="message"
                                value={this.state.message}
                                            placeholder="Message this student about this homework"
                                            onChange={this.handleChange}
                                name="message"
                                        />
                                    </div>

                    </div>
                    <div>
                        <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.message}>Message</button>

                        </div>

                            </div>

                        
                   
                    
                </div>
            
            

        )

    }
}
//Homeworking.propTypes = {
 //   children: PropTypes.element.isRequired,
//};

