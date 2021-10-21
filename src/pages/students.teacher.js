import React, { Component } from "react";
import background from "./music.jpg";
import AuthService from "../services/auth.service";
import "./pages.css"
import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
class StudentsTeacher extends Component {
    constructor(props) {
        super(props);
        this.getCurrentUserinRealTime = this.getCurrentUserinRealTime.bind(this);


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
        }

    };

    getCurrentUserinRealTime() {
        console.log("i get here");
        let id = this.state.currentUser.account[0].userID;
        console.log(id);
        const API_URL = "http://localhost:8080/api/auth/";
       
        axios.post(API_URL + "getuser", {
            id,

        }).then(response => {
            console.log(response.data);

            this.setState({ realtimeusr: response.data.user })
            
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
            

            if (this.state.currentUser.role !== "student") {
                this.props.history.push("/");
            }
            else {
                this.getCurrentUserinRealTime();
            }

        }
        else {
            this.props.history.push("/login");
            window.location.reload();
        }
    }

    render() {

        return (

            <div className= "z2 columbized3">
                <div className="columbized3" style={{ height: "100%", width: "30%", marginTop: "5%" }}>

                    <div className=" columbized card-container0b " >
                

                <div>
                    <div className="front">



                        <div className="overlap">

                            <img
                                src={this.state.background}
                                alt="music"
                                className="back-screen cropped1"
                                
                            />
                        </div>


                                <div style={{marginTop:"80px"}}className="overlaps" >

                            <img
                                src={this.state.picture}
                                alt="profile-img"
                                className="profile-img-card cropped1"
                                
                            />
                           
                        </div>
                    </div>
                </div>
                        <div className="makeitwork0abc">

                    <div className="makeitworkagain">
                        <h2>{this.state.first} {this.state.last}</h2>

                    </div>
                            <div className="makeitworkagain">
                                {this.state.about === "Tell us more about yourself" ?
                                    (<div></div>) :
                                    (<div>{this.state.about}</div>)}
                                

                            </div>
                            <div>

                                {this.state.email}
                            </div>
                            <div>
                                {this.state.phone === "update phone number -> top right" ?
                                    (<div></div>) :
                                    (<div>{this.state.phone}</div>)}

                            </div>










                </div>
            </div>
                </div>
                <div className="columbized card-container0" style={{opacity:"0"}} >
                   

                    <div>
                        <div className="front">



                            <div className="overlap">

                                <img
                                    src={this.state.background}
                                    alt="music"
                                    className="back-screen huv cropped1"
                                />
                            </div>


                            <div className="overlaps" >

                                <img
                                    src={this.state.picture}
                                    alt="profile-img"
                                    className="profile-img-card huv cropped1"
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div className="makeitwork0">

                        <div className="makeitworkagain">
                            <h2>{this.state.first} {this.state.last}</h2>

                        </div>
                        <div className="makeitworkagain">
                            {this.state.about === "Tell us more about yourself" ?
                                (<div></div>) :
                                (<div>{this.state.phone}</div>)}
                            {this.state.about}

                        </div>
                        <div>

                            {this.state.email}
                        </div>
                        <div>
                            {this.state.phone === "update phone number -> top right" ?
                                (<div></div>):
                            (<div>{this.state.phone}</div>)}
                            
                        </div>










                    </div>
                    </div>
                </div>
        );
    }
}
export default StudentsTeacher;