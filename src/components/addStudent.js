import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
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
    handleChange = (event) => {
        this.props.handleChange(event);
        
    }
    AddStudents = (e) => {
        this.props.AddStudents(e);

        
    }
    
    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon-2" style= {{color:"#8C6057"}} onClick={this.props.handleClose}>x</span>
                    <Form
                        onSubmit={this.AddStudents}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName"><b>Student First Name</b>*</label>
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
                            <label htmlFor="lastName"><b>Student Last Name</b>*</label>
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
                                <label htmlFor="email"><b>Student Email</b>*</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="email"
                                    validations={[required, email]}

                                onChange={this.handleChange}
                                name="email"
                            />
                        </div>
                       
                        <div className="form-group forfiles">
                            <div>
                                    <label htmlfor="time"><b>Scheduled Time:</b></label>
                            <input type="time" id="time" onChange={this.handleChange} name="time"
                                        min="00:00" max="23:59"  />
                            </div>
                            <div>
                                <label htmlFor="day"><b>Day</b></label>
                                    <select htmlfor="day" onChange={this.props.handleChange} name="day" id="day" style={{height:"30px", width:"110px"}}>
                                        <option className= "backgroundColorshover" value=""></option>
                                        <option className= "backgroundColorshover" value="Monday">Monday</option>
                                        <option className="backgroundColorshover" value="Tuesday">Tuesday</option>
                                        <option className= "backgroundColorshover" value="Wednesday">Wednesday</option>
                                        <option className="backgroundColorshover" value="Thursday">Thursday</option>
                                        <option className="backgroundColorshover" value="Friday">Friday</option>
                                        <option className="backgroundColorshover" value="Saturday">Saturday</option>
                                        <option className="backgroundColorshover" value="Sunday">Sunday</option>

                                </select>
                            </div>
                            <div style={{opacity:"0"}}>
                                thanks!
                                </div>
                        </div>

                        <div style={{ marginTop: "35px" }}>
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