import React, { Component } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import { isEmail } from "validator";
import Dropdown from "./dropdown.js"
import Down from "./downarrow.png"
import authService from "../../services/auth.service.js";
import "../../App.css"
import "../../pages/pages.css"
import "../../components/components.css"

import clock from "./clock.png"
import calendarService from "../../services/calendarService.js";
//this component details my dialog help component

class Addstudent extends Component{
    //using the functions sent from the profile page allows me to send back student information typed in to profile and then to the backend. 
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.selectDays = this.selectDays.bind(this);
        this.selectTime = this.selectTime.bind(this);
        this.closedrop = this.closedrop.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.addstudent=this.addstudent.bind(this);

        this.setWrapperRef = this.setWrapperRef;
        this.state = {
            homeworks: [],
            main: true,
            maingoal: "Change this",
            goal: "",
            loading: false,
            message: "",
            goals: [],
            Goal: false,
            description: "",
            maindescription:"You should change this to be a goal that you would like this student to have.",
            next: false,
            maindate: "",
            checkbox: "5",
            Homework: false,
            hwchecked: "",
            hwdescription: "",
            hwcheckboxes: "0",
            hwdate: "",
            hwreasearch: "",
            assignment: false,
            research: false,
            practice: false,
            daily: "100",
            hwtype: "",
            days: "100",
            showHomework: false,
            currentHomework: undefined,
            currentgoal: undefined,
            showGoals: false,
            tempID: 1,
            HWtempID:1,
            tempGoal: "",
            tempDescription: "",
            tempday: "",
            tempcheckboxes: "",
            tempHW: "",
            edited: false,
            edit: "",
            editedd: "",
            val: false,
            yesnoCheckboxes: true,
            yesnoTime: true,
            timeframePractice: true,
            starPoints: true,
            manualsetup: false,
            syncCheckbox: true,
            dayorweekTime: "",
            timeSync: true,
            daysbool: true,
            timebool: true,
            smonths: "",
            emonths: "",
            temonths: "",
            tsmonths: "",
            Supporting_Goal: "",
            Homework_Practiced: "",
            timeframePracticebiao: true,
            min: "100",
            weeklytimebiao: "60",
            dailytimebiao: true,
            dmin: "20",
            weekStreak: true,
            dayStreak: true,
            done: 0,
            hwsynccheck: true,
            hwdmin: "",
            HWweeklytimebiao: "",
            hwtimesync: true,
            hwlink: "",
            struggles: true,
            hwQuestions: true,
            yesnoday: true,
            yesnoweek: true,
            marginTop: "",
            marginLeft: "55px",
            selectDay: false,
            selectTime: false,
            day: "",
            time: "",
            first:"",
            last: "",
            time: "",
            toosmall: false
        }
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.handleClose();
        }
    }
   
    
    selectDay() {
        this.setState({
            selectDay: !this.state.selectDay,
        })
    }
    closedrop() {
        this.setState({
            selectDay: false,
            selectTime: false,

        })
    }
    selectTime() {
        this.setState({
            selectTime: !this.state.selectTime,
            
        })
    }
    async addstudent(){
        console.log(this.props.state)
        let student= await authService.addStudent(
            this.props.state.currentuser, this.state.first, this.state.last,  this.state.time, this.state.day,
            /*this is everything for checkboxes*//*done*/ this.state.yesnoCheckboxes, this.state.syncCheckbox, this.state.checkbox,
            /*this is everything for time. timebool is conditional clause if I want*/ this.state.yesnoTime, /*done*/ this.state.timeSync,/*done*/ this.state.weeklytimebiao,/*done*/ this.state.dailytimebiao,/*done*/ this.state.dmin,/*done*/ this.state.timebool, /*done*/ "0", /*done*/
        /*this is days practiced. daybool also conditional */ this.state.daysbool,/*done*/ "0",/*done*/
        /*updating time frame practiced for days.*/  this.state.days,/*done*/ this.state.smonths,/*done*/ this.state.emonths,/*done*/ this.state.timeframePracticebiao,/*done*/ this.state.min,/*done*/ this.state.tsmonths,/*done*/ this.state.temonths,/*done*/
        /*updating streak info and star points (last two)*/ this.state.dayStreak,/*done*/ this.state.weekStreak,/*done*/ this.state.starPoints,/*done*/ this.state.manualsetup,/*done*/
        /*add the goals first one is for conditional clause if I want.*/ this.state.goals[0],/*done*/ this.state.goals,/*done*/ this.state.maingoal,/*done*/  this.state.maindescription,/*done*/  this.state.maindate,/*done*/ 
        /*add the homeworks*/ this.state.homeworks,/*done*/ 
        /*done updating new student.*/ true, /*done*/ 


        )
        let current = this.props.state.currentuser
        console.log(current)
        console.log(student)

        let ar = current.students?current.students:[]
        ar.push(student.student);
        current.students=ar;
        let myappointments= await calendarService.getOrganizedCalendar(current.students)
        this.props.dispatch({currentuser:current, addstudent:false, appointments:myappointments })
    }
    selectDays(day) {
        this.setState({
            day: day
        })
        this.selectDay();
    }
    changeTime(time, showtime) {
        this.setState({
            time: showtime
        })
    }

    render() {
        return (
            <div className="popup-box">
                <div className="box_add" ref={this.wrapperRef}>
                    <span className="close-icon-2" style= {{color:"#8C6057"}} onClick={this.props.handleClose}>x</span>
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName"><b>Student First Name:</b>*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first"
                                onChange={this.handleChange}
                                name="first"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><b>Student Last Name:</b>*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last"
                                onChange={this.handleChange}
                                name="last"
                            />
                        </div>
                            <div className="form-group forfiles" >
                                <div>
                                    <label htmlfor="time"><b>Scheduled Time:</b></label>
                                    <div className="form-control" id="time" onClick={this.selectTime} style={{ width: "120px", height: "30px", flexDirection: "row", display: "flex" }}>
                                        <div style={{ width: "90px", alignSelf: "center" }}>{this.state.time}</div>
                                        <img src={clock} alt="clock" style={{ width: "15px", height: "15px", }} />
                                    </div>
                                    {this.state.selectTime ? (<Dropdown selectDay={this.selectDays} clock={true} closedrop={this.closedrop} changeTime={this.changeTime}/>) : (<div></div>)}
                                </div>
                                <div>
                                    <label htmlfor="day"><b>Day: </b></label>
                                    <div className="form-control"nid="day" onClick={this.selectDay}style={{ width: "110px", height: "30px", flexDirection: "row", display:"flex" }}>
                                        <div style={{width:"90px", alignSelf:"center"}}>{this.state.day}</div>
                                        <img src={Down} alt="arrowdow" style={{ width: "17px", height: "17px",  }} />
                                    </div>
                                    {this.state.selectDay ? (<Dropdown selectDay={this.selectDays} clock={false} closedrop={this.closedrop} />) : (<div></div>)}
                                </div>
                                {this.state.toosmall?(<div >
                                </div>):(<div style={{opacity:"0"}}>
                                thanks!
                                </div>)}
                        </div>
                        <div style={{ marginTop: "50px" }}>
                                <button className="btn " style={{background:"#696eb5", color:"#F0F2EF" }} onClick={this.addstudent}>Add Student</button>
                            </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default Addstudent;
