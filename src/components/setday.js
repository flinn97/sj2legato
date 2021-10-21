import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Setday extends Component {
    constructor(props) {
        super(props);

        this.state = {


        }

    };
  
    
 

    render() {
        return (
            <div style={{ zIndex: "1005" }}>
            <div className="popup-box" style={{ zIndex: "1010" }}>
                <div className="box" style={{ zIndex: "1010" }}>
                    <span className="close-icon-2" onClick={this.props.handleClosing}>x</span>
                    <div className="form-group">
                        <label htmlFor="lastName">Update the days needed for Practice</label>
                        <input
                            type="text"
                            className="form-control"
                                id="totalDays"
                            
                            onChange={this.props.handleChange}
                                name="totalDays"
                        />
                    </div>
                    <div>
                        
                        <button className="btn btn-primary btn-block" value="submit" onClick={this.props.handleClose}>Update</button>
                    </div>





                </div>
            </div>
            </div>
        )
    }
};

export default Setday;