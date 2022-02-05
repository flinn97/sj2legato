import React, { Component } from 'react';
import Checkboxnum from "./practice.js";
import AuthService from "../services/auth.service";
import edit from "./edit.png";
import Checkboxnum2 from "./practice2.js";
import { button } from 'react-validation/build/button';

//import PropTypes from 'prop-types';


//allows me to create a dialog box to pop up for adding students with names and emails.
export default class EditProgress extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef;
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleChange = this.handleChange.bind(this);

        

        
        this.state = {
            starPoints: false,
            temppracticegoal:false,
            totalDays: this.props.state.totalDays,
            totalTime: this.props.state.totalTime,
            temptimegoal: false,
            justifyContent: ""

        }
       

    }
    handleChange(event){
    const { name, value } = event.target


    this.setState({
        [name]: value,
    })

    if (value === "true") {
        this.setState({
            [name]: true,
        })
    }
    else if (value === "false") {
        this.setState({
            [name]: false,
        })
    }
    this.props.handleChange(event);
}
    componentDidMount() {
        if(parseInt(window.innerWidth) <= 550){
            this.setState({ 
                justifyContent: "center"
                
            });
        }
        if(this.props.state.starPoints){
            this.setState({
                starPoints:true
            })
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
            <div className="popup-boxa to-front" style={{ }} >

                <div ref={this.wrapperRef} className="card-container6abc1shedit" >
                    <div className="fill2 homeworkScroll1" >
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div style={{ width: "100%" }}>
                    <h3 style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}>Progress</h3>
                       
                            <div className="form-group">
                                <label>Track Star Points?</label>
                                <select htmlfor="starPoints" onChange={this.props.handleChange} name="starPoints" id="starPoints">
                                    {this.props.state.starPoints?(<option value={true}>Current: yes</option>):( <option value={false}>Current: no</option>)}
                                     <option value={true}>yes</option>
                                     <option value={false}>no</option>

                                    
                                    

                                </select>
                            </div>
                            <div className="form-group">
                                <label>Track Total Days Practiced?</label>
                                <select htmlfor="daysbool" onChange={this.props.handleChange} name="daysbool" id="daysbool">
                                   {this.props.state.daysbool?(<option value={true}> Current: yes</option>):(<option value={false}> Current: no</option>)}
                                   <option value={true}>yes</option>
                                   <option value={false}>no</option>

                                    
                                    

                                </select>
                            </div>
                            <div className="form-group">
                                <label>Track Total Time Practiced?</label>
                                <select htmlfor="timebool" onChange={this.props.handleChange} name="timebool" id="timebool">
                                {this.props.state.timebool?(<option value={true}>Current: yes</option>):(<option value={false}>Current: no</option>)}
                                <option value={true}>yes</option>
                                   <option value={false}>no</option>

                                    

                                </select>
                            </div>
                            
                            
                            <div>
                            <div className="form-group">
                                <label>Set a new goal for practice days?</label>
                                <select htmlfor="temppracticegoal" onChange={this.handleChange} name="temppracticegoal" id="temppracticegoal">
                                <option value={false}>no</option>
                                    <option value={true}>yes</option>
                                    <option value="cancelday">Delete Current Goal</option>

                                </select>
                            </div>
                            {this.state.temppracticegoal  === true?(<div>

                                <div className="form-group" >
                                <label htmlFor="totalDays">Days to practice:</label>
                                <input

                                    type="text"
                                    className="form-control"
                                        id="totalDays"
                                    style={{ width: "60px" }}
                                    value={this.state.totalDays}
                                    onChange={this.handleChange}
                                        name="totalDays"
                                />


                            </div>
                            {/* 
                            <div className="form-group checkboxstuff2" style={{ marginleft: "55px", marginBottome: "15px" }}>
                                <div>
                                    <p>From:</p>
                                    <input
                                        id="tempsmonths"
                                            name="tempsmonths"
                                        style={{ width: "200px" }}
                                        type="date"
                                        className="form-control"


                                            onChange={this.props.handleChange}

                                    />
                                </div>
                                <div style={{ marginLeft: "60px" }}>
                                    <p>To:</p>
                                    <input
                                        id="tempemonths"
                                            name="tempemonths"
                                        style={{ width: "200px" }}
                                        type="date"
                                        className="form-control"


                                            onChange={this.props.handleChange}

                                    />
                                    </div>
                                </div>*/}
                            </div>):(<div>
                                Current Goal: {this.props.state.totalDays} days.
                            </div>)}
                            <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", marginTop:"5px", width:"185px" }} onClick={this.props.cleartotaldays}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Days Practiced</p></span></button>

                            
                                <div>
                            <div className="form-group">
                                <label>Set a new goal for practice time?</label>
                                <select htmlfor="temptimegoal" onChange={this.handleChange} name="temptimegoal" id="temptimegoal">
                                <option value={false}>no</option>

                                            <option value={true}>yes</option>
                                            <option value="canceltime">Delete Current Goal</option>

                                </select>
                                </div>
                                {this.state.temptimegoal === true?(<div>
                                    <div className="form-group" >
                                    <label htmlFor="totalTime">Practice minutes:</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                            id="totalTime"
                                            value={this.state.totalTime}
                                        style={{ width: "60px" }}
                                            onChange={this.handleChange}
                                            name="totalTime"
                                    />


                                </div>
                                {/* 
                                <div className="form-group checkboxstuff2" >
                                    <div>
                                        <p>From:</p>
                                        <input
                                            id="temptsmonths"
                                                name="temptsmonths"
                                            style={{ width: "200px" }}
                                            type="date"
                                            className="form-control"


                                                onChange={this.props.handleChange}

                                        />
                                    </div>
                                    <div style={{ marginLeft: "55px" }}>
                                        <p>To:</p>
                                        <input
                                            id="temptemonths"
                                                name="temptemonths"
                                            style={{ width: "200px" }}
                                            type="date"
                                            className="form-control"


                                                onChange={this.props.handleChange}

                                        />
                                    </div>
                                        </div>*/}
                            


                                </div>):(<div>
                                    Current Time Goal: {this.props.state.totalTime} Minutes
                                </div>)}
                                <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", marginTop:"5px", width:"185px" }} onClick={this.props.cleartimepracticed}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time Practiced</p></span></button>


                                

                  
                                </div>
                                <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", marginTop:"20px", width:"125px" }} onClick={this.props.editalltheProgress}><span className="fill1"><p style={{ marginBottom: "10px" }}>Save</p></span></button>

                    </div>
                   
                    
                </div>
                    </div>
                </div></div>
            

        )

    }
}
