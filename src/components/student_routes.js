import React, { Component } from "react";
import AuthService from "../services/auth.service";
import Route from "./routeFunc";
import StudentArray from "./student_array.js";
import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
//works as a routing function for the student. Some tricky code here.
export default class Student_routes extends Component {
    //set state needed for backend usage.
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentsMounting = this.componentsMounting.bind(this);
        this.profile = this.profile.bind(this);
        this.goals = this.goals.bind(this);
        this.handlePage = this.handlePage.bind(this);
        this.changetoRealTime = this.changetoRealTime.bind(this);

        

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            password1: "",
            password2: "",
            profile: false,
            needPassword: true,
            pastFirstTime: AuthService.getCurrentUser(true).pastFirstTime,
            currentPage: "",
            default: [],
            currentUserChange: undefined,
            first: "",
            currentStudents: [],
           
            
        };
       
    }
    //logged in for a student this mounting step will help pick the first student in the account as the landing page.
    changetoRealTime(firstname, usr) {
        console.log(usr);
        this.setState({
            currentUserChange: usr,
            first: firstname,
        })
    }

    async componentDidMount() {
        if (this.state.currentUser) {


            if (this.state.currentUser.role !== "student") {
                this.props.history.push("/");
                window.location.reload();
            }
            else {
                
                if (this.state.currentUser) {
                    if (this.props.history.location) {
                        if (this.props.history.location.state) {
                            if (this.props.history.location.state.current) {
                                this.setState({
                                    pastFirstTime: this.props.history.location.state.current.pastFirstTime
                                })
                            }
                            else {
                                this.setState({
                                    pastFirstTime: this.state.currentUser.pastFirstTime
                                })
                            }
                        }
                        else {
                            this.setState({
                                pastFirstTime: this.state.currentUser.pastFirstTime
                            })
                        }
                    }
                }




                AuthService.getAccounts(this.state.currentUser.id).then(response => {
                    this.setState({
                        currentStudents: response.data,
                    });

                    for (let i = 0; i < this.state.currentStudents.length; i++) {

                        if (this.state.currentStudents[i].active === true) {
                            this.setState({
                                currentPage: this.state.currentStudents[i],
                            })
                        }
                    }

                });



                this.componentsMounting();

            }

        }
        else {
            this.props.history.push("/login");
            window.location.reload();
        }

    }
    //may or may not use this one.
     componentsMounting() {
        
        let id = this.state.currentUser.id
         const API_URL = "http://localhost:8080/api/auth/";



        
         
         axios.post(API_URL + "getAccount", {
            id,

        }).then(response => {
            console.log(response.data);
            if (response.data.account.pastFirstTime) {
                this.setState({
                    pastFirstTime: response.data.account.pastFirstTime,
                })
            }
            
        });
        /*
        if (this.state.currentUser.pastFirstTime) {

            return true;
        }
        else {

            return false;
        }*/
    }
       

    //helps handle all state changes.
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    //will be used with buttons later. It's used when there are multiple students on one account.
    handlePage = (student) => {
         
         AuthService.changeactivestudent(this.state.currentPage._id, student._id).then(response => {
             window.location.reload();

         })

        window.location.reload();


        
        
       
    }
    //this is used when the student logs in for the first time.
    handleLogin = (e) => {

        if (this.state.password2) {
            if (this.state.password1 !== this.state.password2) {
                this.setState({
                    message: "Make sure passwords match",
                    messag: true,
                })
            }
            else {
                this.setState({
                    profile: true,
                    needPassword: false,
                    pastFirstTime: true,
                });
                const account = [];
                for (let i = 0; i < this.state.currentUser.account.length; i++) {

                    account.push(this.state.currentUser.account[i]._id);

                }
                AuthService.setPastFirstTime(this.state.currentUser.id, account, this.state.password1);
            }

        }
        else {
            this.setState({
                message: "Make sure passwords match",
                messag: true,
            })
        }
        
        
    }



    //if profile is picked then it shows the profile page.
    profile=(e) => {
        this.setState({
            profile: true,

        });
    }
    //if goals are picked then it shows the goals page.
    goals = (e) => {
        this.setState({
            profile: false,

        });
    }
    //tricky render actually. Essentially if its the first time that the student has logged in they need to put in a new password. Otherwise the normal with show up.
    render() {
        
        return (
            <div>
                {this.state.currentUser ? (
                    <div className="z2">
                        {this.state.pastFirstTime ? (
                            <div className="fill1">
                                <StudentArray handlePage={this.handlePage} props={this.state.currentUser} currentUserChange={this.state.currentUserChange} first={this.state.first} />

                                <Route key={this.state.currentPage} props={this.state} handleChange={this.handleChange} handleLogin={this.handleLogin} currentUserChange={this.changetoRealTime} />
                            </div>
                        ) : (

                                <Route props={this.state} handleChange={this.handleChange} handleLogin={this.handleLogin} />
                            )}
                    </div>
                ): (<div></div>)}
            
                </div>
        );
    }
}