import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class EditAlltheHomework extends Component {
    constructor(props) {
        super(props);

        this.state = {

          
        }

    };
    

  
    
 

    render() {
        return (
            <div className="popup-box" style={{ zIndex: "1010" }}>
                <div className="box" style={{ zIndex: "1010" }}>
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div className="form-group">
                        <label>Checkboxes synced with day</label>
                        <select htmlfor="yesnoCheckboxsync" onChange={this.props.handleChange} name="yesnoCheckboxsync" id="yesnoCheckboxsync">
                            <option value={this.props.yesnoCheckboxsync}>No Change</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Streak throughout week</label>
                        <select htmlfor="yesnoStreak" onChange={this.props.handleChange}  name="yesnoStreak" id="yesnoStreak">
                            <option value={this.props.yesnoStreak}>No Change</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>How many times should this student practice every week?</label>
                        <select htmlfor="yesnocheckboxes" onChange={this.props.handleChange} name="yesnocheckboxes" id="yesnocheckboxes">
                            <option value={this.props.yesnocheckboxes}>No Change</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="0">I Don't Want Checkboxes</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Weekly time track</label>
                        <select htmlfor="yesnoWeek" onChange={this.props.handleChange} name="yesnoWeek" id="yesnoWeek">
                            <option value={this.props.yesnoWeek}>No Change</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="yesnoWeektext">How much time should this student practice every week?</label>
                        <input

                            type="text"
                            className="form-control"
                            id="yesnoWeektext"
                            style={{ width: "60px" }}
                            onChange={this.props.handleChange}
                            name="yesnoWeektext"
                        /><p>Minutes</p>


                    </div>

                    <div className="form-group">
                        <label>Daily Time track</label>
                        <select htmlfor="yesnoDay" onChange={this.props.handleChange} name="yesnoDay" id="yesnoDay">
                            <option value={this.props.yesnoDay}>No Change</option>
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="yesnoDaytext">How much time should this student practice every day?</label>
                        <input

                            type="text"
                            className="form-control"
                            id="yesnoDaytext"
                            style={{ width: "60px" }}
                            onChange={this.props.handleChange}
                            name="yesnoDaytext"
                        /><p>Minutes</p>


                    </div>
                    

                    <div>
                        
                        <button className="btn btn-primary btn-block" value="submit" onClick={this.props.editAlltheHomework}>Save</button>
                    </div>





                </div>
            </div>

        )
    }
};

export default EditAlltheHomework;