import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//uploade above stuff from npm.
import "./App.css";
import authService from "./services/auth.service";
import Dashboard from "./view/dashboard.js"
import StudentProfile from "./view/dashboard.js"
import Login from './view/signin.js';
import Addstudent from './view/popups/addStudent.js';
import moment from 'moment';
// import Register from "./pages/usersignup";
// import Login from "./pages/signin";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Metro from "./pages/metro";
// import Contact from "./pages/contact";
// import UsrProfile from "./pages/userProfile";
// import Profile from "./pages/profile";
// import Calendar from "./pages/calendar";
// import StudentsTeacher from "./pages/students.teacher";
// import legato from "./legato.png";
// import Admin from "./services/admin.js";
// import Menu from "./menu.png";

// //import BoardUser from "./components/board-user.component";
// import Student from "./pages/student";
// import student_routes from "./components/student_routes";

//nav bar helps to navigate from page to page with authorizations to login or sign up etc. 
class App extends Component {
    constructor(props) {
        super(props);

        this.handleChange=this.handleChange.bind(this)
        this.dispatch=this.dispatch.bind(this)
        this.state = {
            currentuser: false,
            role: "",
            email: "",
            password: "",
            addstudent:false,
            myswitch: "dash",
            appointments:{},
            today: moment().format('dddd').toString(),
            currentstudent: undefined,
            title: "",
            link: "",
            description: "",
            goals: false,
            goal: undefined,
            maingoal:undefined,
            main: false,
            showgoal: false,
            archive: false,
            addnote:false,
            editnote: false,
            updatecircle: false,
            addhomework:false,
            checkbox: true,
            homework: undefined,
            addtime: false,
            dayfortimepopup: "",
            timeadded: "0",
            time: true,
            showhomework: true,
            hwlink: "",
            styles:{
                checkbox:{
                    size1: "change-label2a",
                    size2: "22px",
                },
                fonts:{
                    fontsize1: "18px"
                },
                colors:{
                    color1: "#338353"
                },
                margins:{
                    margin1: "2vw",
                    margin2: "2vh",
                    margin3: "40px",
                    margin4: "10px"
                }
            },
            switch:{
                student:{myswitch:"viewstudent" },
                dashboard:{myswitch:"dash" },
                metro:{myswitch:"metro" },
                calendar:{myswitch:"calendar" },
                chat:{myswitch:"chat" },
                teacher:{myswitch:"teacherpage"}
            }
        };
    }

 
    dispatch(obj){
        debugger
        for (const key in obj){
            this.setState({[key]:obj[key]})
        }

    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    render() {
        return (
            <div>
                {this.state.addstudent && (<Addstudent state={this.state} dispatch={this.dispatch} handleClose={this.dispatch.bind(this, {addstudent:false})}/>)}
                {/* {this.state.goals && (<addGoal state={this.state} dispatch={this.dispatch} handleClose={this.dispatch.bind(this, {goals:false})} handleChange={this.handleChange}/>)} */}

                {this.state.currentuser?(<div>
                    {this.state.role==="student"?(<StudentProfile handleChange={this.handleChange} dispatch={this.dispatch} state={this.state}/>
                        ):(
                        <Dashboard handleChange={this.handleChange} dispatch={this.dispatch} state={this.state}/>)}
                </div>):(<Login handleChange={this.handleChange} handleLogin={this.dispatch} state={this.state} />)}
                
            
            </div>
        );
    }
}
export default App;