import React, { Component } from 'react';
import AuthService from "../services/auth.service";

import authService from "../services/auth.service";
import moment from 'moment';
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
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
            tpicture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            spicture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            placeholder: "Message this student about this homework",
            currentUser: AuthService.getCurrentUser(),

        }
       

    }
    componentDidMount() {
        if(this.props.role==="student"){
        this.setState({placeholder:"Message your teacher"})
        let id = this.state.currentUser.account[0].userID;
        //console.log(id);

        const API_URL = "https://legato.flinnapps.com/api/auth/";
       
        axios.post(API_URL + "getuser", {
            id,

        }).then(response => {
            //console.log(response.data);

            this.setState({ realtimeusr: response.data.user })
            
            if (this.state.realtimeusr.profilepic) {
                const porfilePic = this.state.realtimeusr.profilepic;
                this.setState({ tpicture: porfilePic });
            }
            
            
        });


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
                           

                <div style={{ marginTop: "15px", }}>
                    {this.props.role==="teacher"?(<p style={{ marginBottom: "10px" }}> <b>Message Student:</b> </p>):(<p style={{ marginBottom: "10px" }}> <b>Message Teacher:</b> </p>)}

                    
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
                        {this.props.role==="teacher"?(<p style={{ marginLeft: "20px", marginTop: "20px", color: "gray" }}>This is your first message about this homework to this student. </p>)
                        :(<p style={{ marginLeft: "20px", marginTop: "20px", color: "gray" }}>This is your first message about this homework to your teacher. </p>)}

                        
                    </div>

                </div>
                    ): (
                <div style={{ height: "200px", borderTop: "1px solid green", borderLeft: "1px solid green", borderRight: "1px solid green", display:"flex", flexDirection:"column"}}>
                                
                                {this.props.role==="teacher"?(<div className="homeworkScroll">

                                    {this.state.messages.map((message, index) =>
                                    <div key={index} style={{width:"100%", display:"flex",flexDirection:"column", }}>
                                        {message.role === "teacher" ? (
                                        <div style={{ width:"50%",alignSelf:"flex-end"}}>
                                                <div style={{  marginRight:"15px", marginTop:"7px", background:"#C8CAE4", padding:"5px", paddingLeft:'15px', paddingRight:'10px', borderRadius:"20px" }}>{message.m}</div> </div>
                                            
                                        ) : (
                                            <div style={{display:"flex", flexDirection:'row', marginTop:"10px", width:"50%"}}>
                                            <img src = {this.state.spicture} alt="teacher" className="proStudpicturemessage"/>
                                            <div style={{alignSelf:"flex-start" ,  background:"#696eb5", color:"#F0F2EF", padding:"5px", paddingLeft:'15px', paddingRight:'10px', borderRadius:"20px"}}>{message.m}</div>
                                        </div>)}
                                    </div>
                                    )

                                }
                                </div>):(<div className="homeworkScroll">


                                    {this.state.messages.map((message, index) =>
                                    <div key={index} style={{width:"100%", display:"flex", flexDirection:"column", }}>
                                        {message.role === "teacher" ? (<div style={{display:"flex", flexDirection:'row', marginTop:"10px", width:"50%"}}>
                                            <img src = {this.state.tpicture} alt="teacher" className="proStudpicturemessage"/>
                                            <div style={{alignSelf:"flex-start" ,  background:"#696eb5", color:"#F0F2EF", padding:"5px", paddingLeft:'15px', paddingRight:'10px', borderRadius:"20px"}}>{message.m}</div>
                                        </div>) : (<div style={{ width:"50%",alignSelf:"flex-end"}}>
                                                <div style={{  marginRight:"15px", marginTop:"7px", background:"#C8CAE4", padding:"5px", paddingLeft:'15px', paddingRight:'10px', borderRadius:"20px" }}>{message.m}</div> </div>)}
                                    </div>
                                    )

                                }
                                </div>)}
                                
                                


                </div>
                
                
                
                )}
                                
                               <div style={{ display:"flex", flexDirection:"row", marginBottom:"20px", }}> <div className="fill2">
                                    <div className="form-group" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            rows="1"
                                id="message"
                                value={this.state.message}
                                            placeholder={this.state.placeholder}
                                            onChange={this.handleChange}
                                name="message"
                                        />
                                    </div>

                    </div>
                    <div>
                        <button className="btn btn-block" style={{ background: "#696eb5", color: "#F0F2EF", width: "60px", }} onClick={this.message}>Send</button>

                        </div>
                        </div>

                            </div>

                        
                   
                    
                </div>
            
            

        )

    }
}
//Homeworking.propTypes = {
 //   children: PropTypes.element.isRequired,
//};

