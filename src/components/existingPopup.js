import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Epopup extends Component {


    render() {
        return (
            <div className="popup-box to-front">
                <div className="boxforexisting">
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div>
                    <p style={{ marginTop: "10px" }}>This email address you have entered already has a student associated with it. Would you like to combine accounts or keep seperate. Note: if kept seperate you must create a seperate password for this student.</p>

                        <div className="form-group forfiles fill2" style={{ marginTop: "20px", }}>
                        <div >
                            <button style={{ background: "#696eb5", height: "35px", color: "#F0F2EF",  width: "100px" }} className="btn  btn-bloc " value="submit" onClick={this.props.doubleAccount}>Combine</button>

                        </div>
                        <div>
                            <button style={{ background: "#696eb5", height: "35px", color: "#F0F2EF",  width: "150px" }} className="btn  btn-bloc  " value="submit" onClick={this.props.separate}>keep Seperate</button>

                        </div>

                    </div>


                </div>
            </div>
                </div>
        )
    }
};

export default Epopup;