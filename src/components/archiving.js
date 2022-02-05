import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Del extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;

        this.state = {
            
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

    render() {
       
        return (
            <div className="popup-box to-front">
                <div className="boxdel" ref={this.wrapperRef}>
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div>
                        <p style={{ marginTop: "10px" }}>Are you sure you would like to mark this goal as archived? You will lose access to use this as a goal.</p>
                        <div className="form-group forfiles1" style={{ marginTop: "20px" }}>
                            <div >
                                <button style={{ width: "140px", backgroundColor: "#696eb5", color: "#F0F2EF" }} className="btn  " value="submit" onClick={this.props.handlegoal}>Complete Goal</button>

                            </div>
                            <div>
                                <button style={{ width: "100px", backgroundColor: "#C8CAE4", color: "#F0F2EF" }}  className="btn   " value="submit" onClick={this.props.handleClose}>No</button>
                                
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
            </div>

        )
    }
};

export default Del;