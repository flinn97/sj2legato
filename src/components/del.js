import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Del extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;

        this.state = {
            marginTop: "300px"
            
        }

    }
    componentDidMount() {
        if(parseInt(window.innerWidth) <= 500){
            this.setState({ marginTop: "190px" });
            }
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
                <div className="boxdel" ref={this.wrapperRef} style={{marginTop: this.state.marginTop}}>
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div>
                        <p style={{ marginTop: "10px" }}>Are you sure you would like to delete this student? This cannot be undone.</p>
                        <div className="form-group forfiles1" style={{ marginTop: "20px" }}>
                            <div >
                                <button style={{ width: "100px", backgroundColor: "#7A9B76", color: "#F0F2EF" }} className="btn  " value="submit" onClick={this.props.delete}>Yes</button>

                            </div>
                            <div>
                                <button style={{ width: "100px", backgroundColor: "#6d1404", color: "#F0F2EF" }}  className="btn   " value="submit" onClick={this.props.handleClose}>No</button>
                                
                            </div>
                            
                        </div>

                        
                    </div>
                </div>
            </div>

        )
    }
};

export default Del;