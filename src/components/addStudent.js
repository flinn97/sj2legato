import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import Dropdown from "./dropdown.js"
import Down from "./downarrow.png"
import clock from "./clock.png"
//this component details my dialog help component
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const required = value => {
    if (value==="") {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
class Popup extends Component{
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

        
        
        
        
        this.setWrapperRef = this.setWrapperRef;
        

        
        this.state = {
            selectDay: false,
            selectTime: false,
            day: "",
            time: "",
        }

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



    handleChange = (event) => {
        this.props.handleChange(event);
        
    }
    AddStudents = (e) => {
        this.props.AddStudents(e);

        
    }
    selectDays(day) {
        this.props.selectDay(day);

        this.setState({
            day: day
        })
        console.log(day);
        this.selectDay();
        
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
    changeTime(time, showtime) {
        this.setState({
            time: showtime
        })
        this.props.changeTime(time);
    }
    selectTime() {
        this.setState({
            selectTime: !this.state.selectTime,
            
        })
    }
    render() {
        return (
            <div className="popup-box">
                <div className="box_add" ref={this.wrapperRef}>
                    <span className="close-icon-2" style= {{color:"#8C6057"}} onClick={this.props.handleClose}>x</span>
                    <Form
                        onSubmit={this.AddStudents}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName"><b>Student First Name:</b>*</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="first"
                                    validations={[required]}

                                onChange={this.handleChange}
                                name="first"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName"><b>Student Last Name:</b>*</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="last"
                                    validations={[required]}

                                onChange={this.handleChange}
                                name="last"
                            />
                        </div>
                        <div className="form-group">
                                <label htmlFor="email"><b>Student Email:</b>*</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="email"
                                    validations={[required, email]}

                                onChange={this.handleChange}
                                name="email"
                            />
                            </div>

                            
                       
                            <div className="form-group forfiles" >
                                
                                <div>
                                    <label htmlfor="time"><b>Scheduled Time:</b></label>
                                    <div

                                        className="form-control"
                                        id="time"
                                        onClick={this.selectTime}
                                        style={{ width: "120px", height: "30px", flexDirection: "row", display: "flex" }}


                                    >
                                        <div style={{ width: "90px", alignSelf: "center" }}>{this.state.time}</div>
                                        <img src={clock} alt="clock" style={{ width: "15px", height: "15px", }} />

                                    </div>
                                    {this.state.selectTime ? (<Dropdown selectDay={this.selectDays} clock={true} closedrop={this.closedrop} changeTime={this.changeTime}/>) : (<div></div>)}


                                </div>
                                <div>
                                    <label htmlfor="day"><b>Day: </b></label>
                                    <div

                                        className="form-control"
                                        id="day"
                                        onClick={this.selectDay}
                                        style={{ width: "110px", height: "30px", flexDirection: "row", display:"flex" }}


                                    >
                                        <div style={{width:"90px", alignSelf:"center"}}>{this.state.day}</div>
                                        <img src={Down} alt="arrowdow" style={{ width: "17px", height: "17px",  }} />

                                    </div>
                                    {this.state.selectDay ? (<Dropdown selectDay={this.selectDays} clock={false} closedrop={this.closedrop} />) : (<div></div>)}
                                </div>
                            <div style={{opacity:"0"}}>
                                thanks!
                                </div>
                        </div>

                        <div style={{ marginTop: "50px" }}>
                                <button className="btn " style={{background:"#696eb5", color:"#F0F2EF" }} value="submit" >Add Student</button>
                            </div>
                            {this.props.messag && (<div className="alert alert-danger" >{this.props.message} </div>)}

                    </div>
                    </Form>
                </div>
            </div>

        )
    }
};

export default Popup;
/*
  
 <div>
                                    <label htmlfor="time"><b>Scheduled Time:</b></label>
                                    <input type="time" id="time" onChange={this.handleChange} name="time"
                                        min="00:00" max="23:59" />
                                </div>
 */