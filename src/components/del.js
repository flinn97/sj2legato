import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Del extends Component {

    render() {
       
        return (
            <div className="popup-box to-front">
                <div className="box">
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div>
                        <p style={{ marginTop: "10px" }}>Are you sure you would like to delete this Student?</p>
                        <div className="form-group forfiles1" style={{ marginTop: "20px" }}>
                            <div >
                                <button style={{ width: "100px" }} className="btn greenb " value="submit" onClick={this.props.delete}>Yes</button>

                            </div>
                            <div>
                                <button style={{ width: "100px" }}  className="btn redb  " value="submit" onClick={this.props.handleClose}>No</button>
                                
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
            </div>

        )
    }
};

export default Del;