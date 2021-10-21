import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const phone = value => {
    if (value.length !== 10) {
        return (
            <div className="alert alert-danger" role="alert">
                Input 10 digits without any symbols
            </div>
        );
    }
};
//allows me to create a dialog box to pop up for adding students with names and emails.
class Studentedit extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }



    render() {
        return (
            <div className="popup-box to-front">
                <div className="diapicbox2">
                    <h1>Student Information </h1>
                    <span className="close-icon-2" onClick={this.props.handleEditClose}>x</span>

                    <Form
                        onSubmit={this.props.handleSub}
                        ref={c => {
                            this.form = c;
                        }}
                    >

                    <div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="first"
                                
                                onChange={this.props.handleChange}
                                name="first"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="last"
                                
                                onChange={this.props.handleChange}
                                name="last"
                            />
                        </div>
                        
                        <h3>Contact Info:</h3>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="email"
                                    validations={[email]}

                                onChange={this.props.handleChange}
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <Input
                                type="text"
                                className="form-control"
                                id="phone"
                                    validations={[phone]}

                                onChange={this.props.handleChange}
                                name="phone"
                            />
                        </div>
                        <h3>Scheduled Teaching Block:</h3>
                        <div className="form-group forfiles">
                            <div>
                                <label htmlFor="changetime">Scheduled Time:</label>
                                <input type="time" id="changetime" onChange={this.props.handleChange} name="changetime"
                                    min="0:00" max="23:59" />
                            </div>
                            <div>
                                <label htmlFor="day">Every:</label>
                                <select htmlfor="day" onChange={this.props.handleChange} name="day" id="day">
                                    <option value=""></option>
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                    <option value="Sunday">Sunday</option>

                                </select>
                            </div>
                            <div style={{ opacity: "0" }}>
                                thanks!
                                </div>
                        </div>
                        <div className="form-group">
                                <label >How many times per week should {this.props.student} practice?</label>
                            <select htmlfor="checkbox" onChange={this.props.handleChange} name="checkbox" id="checkbox">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="0">I don't want Taylor to have practice checkboxes</option>
                            </select>
                                </div>
                        <div style={{ marginTop: "35px" }}>
                            <button className="btn btn-primary" value="submit" >Save</button>
                        </div>
                        </div>
                        </Form>

                </div>
            </div>

        )

    }
}

export default Studentedit;