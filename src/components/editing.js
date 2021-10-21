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

        this.state = {
           realusr: this.props.state,
        }

    }

    

    render() {
        return (
        <div>
                {
                    this.props.currentUser === "student" ?
                        (<div className="popup-box to-front">
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
                                    <h3>About:</h3>
                                    <div className="form-group" >
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="3"
                                            id="about"
                                            
                                            onChange={this.props.handleChange}
                                            name="about"
                                        ></textarea>
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


                                    <div className="doit">
                                        <button className="btn btn-primary " value="submit">Save</button>
                                    </div>
                                </div>
                                </Form>



                            </div>
                        </div>
                        ) : (
                            <div className="popup-box to-front">
                                <div className="diapicbox2">
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
                                        <h3>About:</h3>
                                        <div className="form-group" >
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                rows="3"
                                                id="about"
                                                
                                                onChange={this.props.handleChange}
                                                name="about"
                                            ></textarea>
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



                                        <div className="doit">
                                            <button className="btn btn-primary " value="submit" >Save</button>
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