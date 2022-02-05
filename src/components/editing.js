import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
//allows me to create a dialog box to pop up for adding students with names and emails.
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

class Editing extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;

        this.state = {
           realusr: this.props.state,
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
            this.props.handleEditClose();
        }
    }

    render() {
        return (
        <div>
                {
                    this.props.currentUser === "student" ?
                        (<div className="popup-box to-front homeworkScroll">
                            <div className="diapicbox2 " ref={this.wrapperRef}>
                                <h1>Student Information: </h1>
                                <span className="close-icon-2" onClick={this.props.handleEditClose}>x</span>


                                <Form
                                    onSubmit={this.props.handleSub}
                                    ref={c => {
                                        this.form = c;
                                    }}
                                >
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="firstName"><b>First Name:</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first"
                                            placeholder={this.props.state.first}
                                            onChange={this.props.handleChange}
                                            name="first"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName"><b>Last Name:</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last"
                                            placeholder={this.props.state.last}
                                            onChange={this.props.handleChange}
                                            name="last"
                                        />
                                    </div>
                                    
                                    
                                    <div className="form-group">
                                        <label htmlFor="email"><b>Email:</b></label>
                                            <Input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            validations={[email]}
                                            placeholder={this.props.state.email}

                                            onChange={this.props.handleChange}
                                            name="email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone"><b>Phone Number:</b></label>
                                            <Input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            validations={[phone]}
                                            placeholder={this.props.state.phone}
                                            onChange={this.props.handleChange}
                                            name="phone"
                                        />
                                    </div>
                                    <p><b>About:</b></p>
                                    <div className="form-group" >
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="3"
                                            id="about"
                                            placeholder={this.props.state.about}
                                            onChange={this.props.handleChange}
                                            name="about"
                                        ></textarea>
                                    </div>


                                    <div className="doit">
                                            <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "75px", marginTop: "15px" }} value="submit">Save</button>
                                    </div>
                                </div>
                                </Form>



                            </div>
                        </div>
                        ) : (
                            <div className="popup-box to-front homeworkScroll">
                                <div className="diapicbox2" ref={this.wrapperRef}>
                                    <h1>Teacher Information </h1>
                                    <span className="close-icon-2" onClick={this.props.handleEditClose}>x</span>
                                    <Form
                                        onSubmit={this.props.handleSub}
                                        ref={c => {
                                            this.form = c;
                                        }}
                                    >
                                    <div>
                                        <div className="form-group">
                                            <label htmlFor="firstName"><b>First Name:</b></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="first"
                                                placeholder={this.props.state.firstname}
                                                onChange={this.props.handleChange}
                                                name="first"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastName"><b>Last Name:</b></label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="last"
                                                placeholder={this.props.state.lastname}
                                                onChange={this.props.handleChange}
                                                name="last"
                                            />
                                        </div>
                                        
                                        
                                        <div className="form-group">
                                            <label htmlFor="email"><b>Email:</b></label>
                                                <Input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                validations={[email]}
                                                placeholder={this.props.state.email}
                                                onChange={this.props.handleChange}
                                                name="email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone"><b>Phone Number:</b></label>
                                                <Input
                                                type="text"
                                                className="form-control"
                                                id="phone"
                                                validations={[phone]}
                                                placeholder={this.props.state.phone}

                                                onChange={this.props.handleChange}
                                                name="phone"
                                            />
                                            </div>
                                            
                                        <div className="form-group" >
                                        <label htmlFor="phone"><b>About:</b></label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                rows="3"
                                                id="about"
                                                placeholder={this.props.state.about}
                                                onChange={this.props.handleChange}
                                                name="about"
                                            ></textarea>
                                        </div>



                                        <div className="doit">
                                                <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "75px", marginTop: "15px" }} value="submit" >Save</button>
                                        </div>
                                        </div>
                                    </Form>

                                </div>
                            </div>
                        )}
        </div>
        )

    }
}

export default Editing;