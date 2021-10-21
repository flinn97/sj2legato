import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class addGoal extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.more = this.more.bind(this);

        this.state = {

            type: "",
            more: false,
            

        }

    };
    more(){
        this.setState({
            more: !this.state.more,
        })
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.handleClosing();
        }
    }

    render() {
        return (
            <div className="popup-box" style={{ zIndex: "1010" }}>
                <div ref={this.wrapperRef}  className="diapicboxa" style={{ zIndex: "1010" }}>
                    <span className="close-icon-2" onClick={this.props.handleClosing}>x</span>
                    
                    <div className="form-group">
                        <label htmlFor="lastName"><h5>Add Goal</h5></label>
                        <input
                            type="text"
                            className="form-control"
                            id="goal"

                            onChange={this.props.handleChange}
                            name="goal"
                        />

                    </div>
                    <div >
                        <label htmlFor="description"><h5>Description</h5></label>
                        <div className="form-group" >

                            <textarea
                                type="text"
                                className="form-control"
                                rows="4"
                                id="description"
                                value={this.state.tempDescription}
                                onChange={this.props.handleChange}
                                name="description"

                            ></textarea>
                        </div>

                    </div>
                   

                    <div>

                        <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF" }}  onClick={this.props.handlegoal}>Add Goal</button>
                    </div>





                </div>
            </div>

        )
    }
};

export default addGoal;