import React, { Component } from "react";
//allows me to create a dialog box to pop up for adding students with names and emails.
export default class Times extends Component {
    constructor(props) {
        super(props);
        //this.more = this.more.bind(this);
        //this.handleChange = this.handleChange.bind(this);

        this.state = {


        }

    };
    
    render() {

        return (

            <div style={{ zIndex: "1005" }}>

                <div className="popup-box" style={{ zIndex: "1010" }}>
                    <div className="box" style={{ zIndex: "1010" }}>
                        <span className="close-icon-2" onClick={this.props.handleClose}>x</span>

                        {this.props.weekly ? (

                            <div className="centerized">
                                <div>What day would you like to log time for?</div>
                                <div className="form-group" >
                                    <select style={{ width: "40%" }} htmlFor="timeedit" onChange={this.props.handleChange} name="timeedit" id="timeedit">
                                        <option value=""></option>
                                        <option value={"mon"}>Monday</option>
                                        <option value={"tues"}>Tuesday</option>
                                        <option value={"wed"}>Wednesday</option>
                                        <option value={"thur"}>Thursday</option>
                                        <option value={"fri"}>Friday</option>
                                        <option value={"sat"}>Saturday</option>
                                        <option value={"sun"}>Sunday</option>


                                    </select>
                                </div>
                                <div className="form-group" >
                                    <input

                                        type="text"
                                        className="form-control"
                                        id="minedit"
                                        style={{ width: "60px" }}
                                        onChange={this.props.handleChange}
                                        name="minedit"
                                    /><p>Minutes</p>


                                </div>
                                <div>

                                    <button className="btn btn-primary btn-block" onClick={this.props.change}>Submit Time</button>
                                </div>
                            </div>
                        ) : (<div className="centerized">
                            <div>Enter Time Practiced This Week.</div>

                            <div className="form-group" >
                                <input

                                    type="text"
                                    className="form-control"
                                    id="weeklyTimeEdit"
                                    style={{ width: "60px" }}
                                    onChange={this.props.handleChange}
                                    name="weeklyTimeEdit"
                                /><p>Minutes</p>


                            </div>
                            <div>

                                <button className="btn btn-primary btn-block" onClick={this.props.changeweek}>Submit Time</button>
                            </div>
                        </div>
                            

                        )}
                        
                    </div>
                </div>
            </div>

        )
    }
}

