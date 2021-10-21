import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Homeworkes extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();

        this.more = this.more.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChanges = this.handleChanges.bind(this);

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;

        this.state = {

            type: "",
            more: false,
            yesnoCheckbox: false,
            yesnoTimes: false,
            time: false,
            link: false,
            dailytimebiao: false,
            hwtime: false,
            height: "auto",
        }

    };
    handleChange = (event) => {

        const { name, value } = event.target

        if (value === "true") {
            this.setState({
                [name]: true,
            })
        }
        else {
            this.setState({
                [name]: false,
            })
        }


    }

    more(){
        this.setState({
            more: !this.state.more,
        })
    }
    
    handleChanges = (event) => {
        this.props.handleChange(event);
        this.setState({
            height: "70%"
        });
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
                <div ref={this.wrapperRef} className="boxa " style={{ height:  this.state.height  }}>
                    
                    <span className="close-icon-2" onClick={this.props.handleClosing}>x</span>
                    <div className="homeworkScroll ">
                    <div className="form-group">
                        <label htmlFor="lastName">Add Homework</label>
                        <input
                            type="text"
                            className="form-control"
                            id="homework"
                            
                            onChange={this.props.handleChange}
                            name="homework"
                        />
                    </div>
                        <div style={{marginBottom:"15px", marginTop:"10px"}}>

                            <p className="rowss3a huv" onClick={this.more}>Advanced Options?</p>
                    </div>

                    {this.state.more ?
                        (<div>
                            <div>
                                <label htmlFor="hwtype">What Type of Homework is This?</label>
                                    <select htmlfor="hwtype" onChange={this.handleChanges } name="hwtype" id="hwtype">
                                    <option  value="assignment"></option>
                                    <option value="practice">Practice</option>
                                    <option value="assignment">Assignment</option>
                                    <option  value="research">Research</option>
                                    

                                </select>
                            </div>
                        
                            <div>
                                {
                                    this.props.practice ?
                                        (
                                            <div>
                                                <div className="form-group">
                                                    <label>Provide a Description for this assignment</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="hwdescription"
                                                        required
                                                        onChange={this.props.handleChange}
                                                        name="hwdescription"
                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <label>Would you like to use checkboxes to track practice progress for this student?</label>
                                                    <select htmlfor="yesnoCheckbox" onChange={this.handleChange} name="yesnoCheckbox" id="yesnoCheckbox">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                       
                                                    </select>
                                                </div>
                                                {this.state.yesnoCheckbox ? (<div>
                                                    <div className="form-group">
                                                        <label>How many times should this student practice every week?</label>
                                                        <select htmlfor="hwcheckboxes" onChange={this.props.handleChange} name="hwcheckboxes" id="hwcheckboxes">
                                                            <option value=""></option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="0">Does Not Apply</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Would you like checkboxes to match up with the exact day that this student practiced?</label>
                                                        <select htmlfor="hwsynccheck" onChange={this.props.handleChange} name="hwsynccheck" id="hwsynccheck">
                                                            <option value=""></option>
                                                            <option value={true}>yes</option>
                                                            <option value={false}>no</option>

                                                        </select>
                                                    </div>
                                                </div>) : (<div></div>)}
                                                
                                                <div className="form-group">
                                                    <label>Does this student have a certain amount of times they should practice per day?</label>
                                                    <select htmlfor="yesnoTimes" onChange={this.handleChange} name="yesnoTimes" id="yesnoTimes">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>

                                                    </select>
                                                </div>
                                                {this.state.yesnoTimes ? (<div>
                                                    <div className="form-group">
                                                        <label>How many times should this student practice per day?</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="daily"
                                                            required
                                                            onChange={this.props.handleChange}
                                                            name="daily"
                                                        />

                                                    </div>
                                                </div>) : (<div></div>)}
                                                
                                                <div className="form-group">
                                                    <label>Should this student be required to practice a certain amount of time for this assignment every week?</label>
                                                    <select htmlfor="hwtime" onChange={this.handleChange} name="hwtime" id="hwtime">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>

                                                    </select>
                                                </div>
                                                {this.state.hwtime ? (<div>
                                                    <div className="form-group" >
                                                        <label htmlFor="HWweeklytimebiao">How much time should this student practice every week?</label>
                                                        <input

                                                            type="text"
                                                            className="form-control"
                                                            id="HWweeklytimebiao"
                                                            style={{ width: "60px" }}
                                                            onChange={this.props.handleChange}
                                                            name="HWweeklytimebiao"
                                                        /><p>Minutes</p>


                                                    </div>

                                                    <div className="form-group" >
                                                        <label>Would you like to set a daily time goal?</label>
                                                        <select htmlFor="dailytimebiao" onChange={this.handleChange} name="dailytimebiao" id="dailytimebiao">
                                                            <option value=""></option>
                                                            <option value={true}>yes</option>
                                                            <option value={false}>no</option>
                                                            <option value={false}>Not Sure Yet</option>


                                                        </select>
                                                    </div>
                                                    {this.state.dailytimebiao ? (
                                                        <div className="form-group" >
                                                            <label htmlFor="hwdmin">How much time should this student practice every day?</label>
                                                            <input

                                                                type="text"
                                                                className="form-control"
                                                                id="hwdmin"
                                                                style={{ width: "60px" }}
                                                                onChange={this.props.handleChange}
                                                                name="hwdmin"
                                                            /><p>Minutes</p>


                                                        </div>
                                                    ) : (<div></div>)}

                                                    <div className="form-group" >
                                                        <label>Sync up practice time with the day it was practiced ie practiced 30 mins on monday. </label>
                                                        <select style={{ width: "40%" }} htmlFor="hwtimesync" onChange={this.props.handleChange} name="hwtimesync" id="hwtimesync">
                                                            <option value=""></option>
                                                            <option value={true}>Yes</option>
                                                            <option value={false}>No</option>

                                                        </select>
                                                    </div>
                                                </div>) : (<div></div>)}
                                               
                                                <div className="form-group" >
                                                    <label>Is there a website link you would like to add for this assignment </label>
                                                    <select style={{ width: "40%" }} htmlFor="link" onChange={this.handleChange} name="link" id="link">
                                                        <option value=""></option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>

                                                    </select>
                                                </div>
                                                {this.state.link ? (<div>
                                                    <div className="form-group" >
                                                        <label htmlFor="hwlink">Add link:</label>
                                                        <input
                                                            style={{ width: "40%" }}
                                                            type="text"
                                                            className="form-control"
                                                            id="hwlink"

                                                            onChange={this.props.handleChange}
                                                            name="hwlink"
                                                        />

                                                    </div>
                                                </div>) : (<div></div>)}
                                                
                                                <div className="form-group" >
                                                    <label>Would you like to add a text box for students to express where they are struggling with this assignment? </label>
                                                    <select style={{ width: "40%" }} htmlFor="struggles" onChange={this.props.handleChange} name="struggles" id="struggles">
                                                        <option value=""></option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>

                                                    </select>
                                                </div>
                                                <div className="form-group" >
                                                    <label>Would you like to add a feild for students to ask questions and you to respond? </label>
                                                    <select style={{ width: "40%" }} htmlFor="hwQuestions" onChange={this.props.handleChange} name="hwQuestions" id="hwQuestions">
                                                        <option value=""></option>
                                                        <option value={true}>Yes</option>
                                                        <option value={false}>No</option>

                                                    </select>
                                                </div>
                                               
                                            </div>
                                        ) :
                                        (<div>{
                                            this.props.assignment ?
                                                (<div>
                                                    <div className="form-group">
                                                    <label>When is this assignment due?</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                            id="hwdate"
                                                        required
                                                        onChange={this.props.handleChange}
                                                            name="hwdate"
                                                    />

                                                    </div>
                                                    <div className="form-group">
                                                        <label>Provide a Description for this assignment</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="hwdescription"
                                                            required
                                                            onChange={this.props.handleChange}
                                                            name="hwdescription"
                                                        />

                                                        </div>
                                                        <div className="form-group" >
                                                            <label>Would you like to add a text box for students to express where they are struggling with this assignment? </label>
                                                            <select style={{ width: "40%" }} htmlFor="struggles" onChange={this.props.handleChange} name="struggles" id="struggles">
                                                                <option value=""></option>
                                                                <option value={true}>Yes</option>
                                                                <option value={false}>No</option>

                                                            </select>
                                                        </div>
                                                        <div className="form-group" >
                                                            <label>Would you like to add a feild for students to ask questions and you to respond? </label>
                                                            <select style={{ width: "40%" }} htmlFor="hwQuestions" onChange={this.props.handleChange} name="hwQuestions" id="hwQuestions">
                                                                <option value=""></option>
                                                                <option value={true}>Yes</option>
                                                                <option value={false}>No</option>

                                                            </select>
                                                        </div>
                                                </div>)
                                                :
                                                (<div>{this.props.research ?
                                                    (<div>
                                                        <div className="form-group">
                                                            <label>When will this reseach need to be completed?</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="hwdate"
                                                                required
                                                                onChange={this.props.handleChange}
                                                                name="hwdate"
                                                            />

                                                        </div>
                                                        <div className="form-group">
                                                            <label>Provide a Description for this research assignment</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="hwdescription"
                                                                required
                                                                onChange={this.props.handleChange}
                                                                name="hwdescription"
                                                            />

                                                            </div>
                                                            <div className="form-group" >
                                                                <label>Would you like to add a text box for students to express where they are struggling with this assignment? </label>
                                                                <select style={{ width: "40%" }} htmlFor="struggles" onChange={this.props.handleChange} name="struggles" id="struggles">
                                                                    <option value=""></option>
                                                                    <option value={true}>Yes</option>
                                                                    <option value={false}>No</option>

                                                                </select>
                                                            </div>
                                                            <div className="form-group" >
                                                                <label>Would you like to add a feild for students to ask questions and you to respond? </label>
                                                                <select style={{ width: "40%" }} htmlFor="hwQuestions" onChange={this.props.handleChange} name="hwQuestions" id="hwQuestions">
                                                                    <option value=""></option>
                                                                    <option value={true}>Yes</option>
                                                                    <option value={false}>No</option>

                                                                </select>
                                                            </div>
                                                    </div>)
                                                    :
                                                    (<div></div>)}
                                                </div>)}</div>
                                        )}
                            </div></div>
                    ) : (<div></div>)
                    }

                        <div style={{ marginTop: "20px", }}>

                            <button className="btn btn-block" style={{ background: "#696eb5",  color: "#F0F2EF", }} onClick={this.props.handleClose}>Add Homework</button>
                    </div>




                        </div>
                </div>
            </div>

        )
    }
};

export default Homeworkes;