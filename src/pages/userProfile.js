//to do -> fix so that if X is pushed everything goes back to how it was.
//update the token in the browser storage.
// fix all edge cases. 
// all text boxes should have the current info as place holders. 

import React, { Component } from "react";
import background from "./music.jpg";
import Pic from "../components/diapicture";
import AuthService from "../services/auth.service";
import "./pages.css"
import edit from "./edit.png";
import Editing from "../components/editing";
import EditBack from "../components/editBackground";
import axios from "axios";
import List from "../components/prostudentList.js";
import moment from 'moment';
import DeleteStudent from '../components/deletestudent.js';
import Short from "../components/short.js"
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
class userProfile extends Component {
    constructor(props) {
        super(props);
        this.openPic = this.openPic.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);

        this.editMe = this.editMe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editBackground = this.editBackground.bind(this);
        this.handleBackClose = this.handleBackClose.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.getCurrentUserinRealTime = this.getCurrentUserinRealTime.bind(this);
        this.deleted = this.deleted.bind(this);
        this.del = this.del.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);

        
        
        this.state = {
            diaPic: false,
            edit: false, 
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            newPic: "",
            currentUser: AuthService.getCurrentUser(),
            realtimeusr: undefined,
            about: "this is how you learn",
            first: "",
            last: "",
            email: "",
            phone: "",
            edittheBackground: false,
            background: background,
            currentStudents: [],
            studentList: true,
            Today: [],
            del: false,
            delstudent: undefined,
        }

    };
    
    getCurrentUserinRealTime() {
        let id = "";
        const API_URL = "http://localhost:8080/api/auth/";
        if (this.state.currentUser.login) {
            id = this.state.currentUser.user._id;
        }
        else {
            id = this.state.currentUser.id;
        }

        axios.post(API_URL + "getuser", {
            id,

        }).then(response => {
            this.setState({ realtimeusr: response.data.user })
            console.log(response.data);
            if (this.state.realtimeusr.profilepic) {
                const porfilePic = 'http://localhost:8080' + this.state.realtimeusr.profilepic;
                this.setState({ picture: porfilePic });
            }
            if (this.state.realtimeusr.backgroundpic) {
                const background = 'http://localhost:8080' + this.state.realtimeusr.backgroundpic;
                this.setState({ background: background });
            }
            this.setState({
                about: this.state.realtimeusr.about,
                first: this.state.realtimeusr.firstname,
                last: this.state.realtimeusr.lastname,
                email: this.state.realtimeusr.email,
                phone: this.state.realtimeusr.phone,
            })
        });
    }
    componentDidMount() {
        if (this.state.currentUser) {


            if (this.state.currentUser.role !== "teacher") {
                this.props.history.push("/");
                window.location.reload();
            }
            else {
                this.getCurrentUserinRealTime();
                AuthService.getStudents(this.state.currentUser.account._id, this.state.studentList).then(response => {
                    this.setState({

                        currentStudents: response.data,
                    });
                    let today = [];
                    for (let i = 0; i < this.state.currentStudents.length; i++) {
                        if (this.state.currentStudents[i].day.toString() === moment().format('dddd').toString()) {

                            let scheduling = this.handleTime(this.state.currentStudents[i].scheduling);


                            today.push({
                                student: this.state.currentStudents[i],
                                time: scheduling,
                            }
                            );
                        }
                    }
                    this.setState({
                        Today: today,
                    })
                })
            }
        }
        else {
            this.props.history.push("/login");
            window.location.reload();
        }
    }

    handleTime(apptTime) {
        var ar = "";
        let ampm = false;
        for (let i = 0, j = i + 1; i < apptTime.length; i++, j++) {

            if (i === 0) {
                console.log(i);

                if (apptTime.length === 4) {

                    if (apptTime[0] === "1") {

                        if (apptTime[1] === "0") {
                            ar = ar + "10";
                            ampm = true;

                        }
                        if (apptTime[1] === "1") {
                            ar = ar + "11";
                            ampm = true;
                        }
                        if (apptTime[1] === "2") {
                            ar = ar + "12";
                        }
                        if (apptTime[1] === "3") {
                            ar = ar + "1";
                        }
                        if (apptTime[1] === "4") {
                            ar = ar + "2";
                        }
                        if (apptTime[1] === "5") {
                            ar = ar + "3";
                        }
                        if (apptTime[1] === "6") {
                            ar = ar + "4";
                        }
                        if (apptTime[1] === "7") {
                            ar = ar + "5";


                        }
                        if (apptTime[1] === "8") {
                            ar = ar + "6";
                        }
                        if (apptTime[1] === "9") {
                            ar = ar + "7";
                        }

                    } else if (apptTime[0] === "2") {
                        if (apptTime[1] === "0") {
                            ar = ar + "8";
                        }
                        if (apptTime[1] === "1") {
                            ar = ar + "9";
                        }
                        if (apptTime[1] === "2") {
                            ar = ar + "10";
                        }
                        if (apptTime[1] === "3") {
                            ar = ar + "11";
                        }
                    }
                    else if (apptTime[0] === "0") {
                        if (apptTime[1] === "0") {
                            ar = ar + "12";
                            ampm = true;
                        }
                    }
                }
                else {
                    console.log(apptTime);
                    ar = ar + apptTime[i];

                }

            }



            else {
                if (apptTime.length === 3) {
                    console.log(i);
                    if (i === 1) {
                        ar = ar + ":";

                    }
                    console.log(apptTime);
                    ar = ar + apptTime[i];

                    if (i === 2) {
                        ar = ar + " AM";
                    }


                }
                else {
                    if (apptTime[j]) {
                        if (i === 1) {
                            ar = ar + ":";
                        }

                        ar = ar + apptTime[j];
                        if (i === 2) {
                            if (ampm) {
                                ar = ar + " AM";
                            }
                            else { ar = ar + " PM"; }

                        }

                    }
                }


            }

            console.log(ar);

        }
        return ar;
    }

    profile(student) {

        this.props.history.push({
            pathname: "/student",
            state: { detail: student }
        });

    }

    handleBackClose() {
        this.setState({
            edittheBackground: false
        });
    }
    editBackground() {
        this.setState({
            edittheBackground: true,
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    editMe() {
        this.setState({
            edit: true
        })
    }

    handleEditClose() {
        this.setState({
            edit: false
        });
    };

    handleClose() {
        this.setState({
            diaPic: false
        });
    };

    changePic(pic) {
        this.setState({
            diaPic: pic.toString()
        });
    };

    openPic = (event) => {
        this.setState(
            {
                diaPic: true
            });

    };
    deleted() {
        AuthService.deleteStudent(this.state.delstudent._id, this.state.delstudent.email);
        window.location.reload();
    }
    async del(student) {
        await this.setState({
            delstudent: student,
            del:true,
        })
    }

    handleSub(e) {
        e.preventDefault();
        //var data = this.state;
        if (this.state.currentUser.login) {
            AuthService.changeuserinfo(
                this.state.currentUser.user._id,
                this.state.currentUser.account._id,
                this.state.first,
                this.state.last,
                this.state.about,
                this.state.email,
                this.state.phone,
            ).then(response => {
                console.log(response.data.changed.about);
                this.setState({
                    about: response.data.changed.about,
                    first: response.data.changed.firstname,
                    last: response.data.changed.lastname,
                    email: response.data.changed.email,
                    phone: response.data.changed.phone,
                    edit: false
                });


            })
        }
        AuthService.changeuserinfo(
            this.state.currentUser.id,
            this.state.currentUser.account._id,
            this.state.first,
            this.state.last,
            this.state.about,
            this.state.email,
            this.state.phone,
        ).then(response => {
            console.log(response.data.changed.about);
            this.setState({
                about: response.data.changed.about,
                first: response.data.changed.firstname,
                last: response.data.changed.lastname,
                email: response.data.changed.email,
                phone: response.data.changed.phone,
                edit: false
            });


        })
            .catch(e => {
                console.log(e);
            });
    }
    deleteStudent() {
        this.setState({
            del:false,
        })
    }
    render()
    {
        const { history } = this.props;
        return (

            <div className="z2 example">
                <div className="fill1">
                    <div className="columbized card-container0" style={{marginTop: "22px"}}>
                        {this.state.diaPic && (<Pic handleClose={this.handleClose} realusr={this.state.realtimeusr} />)}
                        {this.state.del && (<DeleteStudent handleClose={this.deleteStudent} delete={this.deleted} />)}


                {this.state.edittheBackground && (<EditBack handleBackClose={this.handleBackClose} realusr={this.state.realtimeusr} />)}

                    {this.state.edit && (<Editing handleSub={this.handleSub} handleEditClose={this.handleEditClose} handleChange={this.handleChange} state={this.state.realtimeusr} />)}

                        <div className="front1 centerized" style={{position:"relative"}}>
                

                
                <div className="overlap">

                    <img
                                src={this.state.background}
                                alt="music"
                                        className="back-screen huv cropped1"
                                onClick={this.editBackground}
                        />
                </div>

                    
                <div className="overlaps" >

                    <img
                        src={this.state.picture}
                    alt="profile-img"
                                    className="profile-img-cardabc huv cropped1 centerized"
                                onClick={this.openPic}
                                    />
                                    
                    </div>
                </div>
                        <div className="makeitwork0ab">
                    
                    <div className="makeitworkagain">
                        <h2>{this.state.first} {this.state.last}</h2>
                        
                    </div>
                    <div className="makeitworkagain">
                        {this.state.about}
                        
                    </div>
                    <div>
                        {this.state.email}
                    </div> 
                    <div>
                        {this.state.phone}
                            </div>
                            <div onClick={this.editMe} className="huv rowss1">
                                <p className="huv rowss3">Edit Profile</p>


                            </div>
                    

                    

                  





                </div>
                </div>
                    <div className="proStud" style={{ height: "750px" }}>
                        <div className="card-container1">
                            {this.state.currentStudents.length > 0 ? (<List role={this.state.currentUser.role} students={this.state.currentStudents} history={history} del={this.del} />) : (<div className="centerizeList"> <h4 style={{ borderBottom: "1px solid gray", color:"gray", height:"40px"}} >no current students </h4></div>)}
                    </div>
                <div className="card-container2">
                            <div className="flex-box2">
                            <div  style={{ width: "95%", borderLeft: "1px solid #e0e0eb", borderRight:"1px solid #e0e0eb", marginTop:"15px" }}>
                                <div className="cal-day-bottom centerized">
                                    <h2>Today's Appointments</h2>
                                </div>
                                    <div className="container">
                                        {
                                            this.state.Today.map((appointment, index) =>
                                                <div onClick={this.profile.bind(this, appointment.student)} className="huv rowss centerized" style={{ margin: "5px" }} key={index}>
                                                    {appointment.student.firstName.length > 9 ? (<div className="checkboxstuff1"> <Short word={appointment.student.firstName} wordtype="procal" /> <p style={{ marginLeft: "3px" }}>{appointment.time}</p></div>): (<p>{appointment.student.firstName} {appointment.time}</p>)}
                                                    
                                                    </div>
                                        )} 

                                </div>
                            </div>
                    </div>
                    </div>
                </div>

                </div>
                <div style={{ opacity: "0" }}>
                    <table style={{ width: "100%" }}>
                        <tr>
                            <td style={{ width: "40%" }}>
                                <div style={{ flexDirection: "column" }}>
                                    <div> <p>Mon: 0 Minutes</p></div>
                                    <div>  <p>Tues: 0 Minute</p></div>
                                    <div> <p>Wed: 0 Minutes</p></div>
                                    <div> <p>Thurs: 0 Minute</p></div>
                                </div>
                            </td>
                            <td style={{ width: "50%" }}>
                                <div style={{ flexDirection: "column" }}>
                                    <div> <p>Fri: 0 Minutes</p></div>
                                    <div>  <p>Sat: 0 Minutes</p></div>
                                    <div> <p>Sun: 0 Minute</p></div>
                                    <div><p> Total: 0/100 Minutes</p></div>
                                </div>

                            </td>
                        </tr>
                    </table>
                  
                </div>
                </div>
        );
    }
}
export default userProfile;