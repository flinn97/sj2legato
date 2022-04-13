import React, { Component } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import Dropdown from "./dropdown.js";
import Down from "./downarrow.png";
import clock from "./clock.png";
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
//allows me to create a dialog box to pop up for adding students with names and emails.
class Studentedit extends Component {
    constructor(props) {

            super(props);
            this.wrapperRef = React.createRef();
            this.handleClickOutside = this.handleClickOutside.bind(this);
            this.setWrapperRef = this.setWrapperRef;
            this.selectDay = this.selectDay.bind(this);
        this.selectDays = this.selectDays.bind(this);
        this.selectTime = this.selectTime.bind(this);
        this.closedrop = this.closedrop.bind(this);
        this.changeTime = this.changeTime.bind(this);

            this.state = {
                selectDay: false,
            selectTime: false,
            day: "",
            time: "",
            tooSmall: false
            }

        }

        componentDidMount() {
            if(parseInt(window.innerWidth) <= 500){
                this.setState({ tooSmall: true, 
                   
                    
                });
            }
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
        selectDays(day) {
            this.props.selectDay(day);
    
            this.setState({
                day: day
            })
            console.log(day);
            this.selectDay();
            
        }
        selectDay() {
            this.setState({
                selectDay: !this.state.selectDay,
            })
            
        }
        closedrop() {
            this.setState({
                selectDay: false,
                selectTime: false,
    
            })
        }
        changeTime(time, showtime) {
            this.setState({
                time: showtime
            })
            this.props.changeTime(time);
        }
        selectTime() {
            this.setState({
                selectTime: !this.state.selectTime,
                
            })
        }
    render() {
        return (
            <div className="popup-boxa to-fronta1" style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <div className="card-container6abc1shedit" ref={this.wrapperRef} >
                    <div className="homeworkScroll1">
                        <div style={{width: "96%"}}>
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
                        {this.state.tooSmall?(<div className="form-group forfiles" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                
                                <div>
                                    <label htmlfor="time"><b>Scheduled Time:</b></label>
                                    <div

                                        className="form-control"
                                        id="time"
                                        onClick={this.selectTime}
                                        style={{ width: "120px", height: "30px", flexDirection: "row", display: "flex" }}


                                    >
                                        <div style={{ width: "90px", alignSelf: "center" }}>{this.state.time}</div>
                                        <img src={clock} alt="clock" style={{ width: "15px", height: "15px", }} />

                                    </div>
                                    {this.state.selectTime ? (<Dropdown selectDay={this.selectDays} clock={true} closedrop={this.closedrop} changeTime={this.changeTime}/>) : (<div></div>)}


                                </div>
                                <div>
                                    <label htmlfor="day"><b>Day: </b></label>
                                    <div

                                        className="form-control"
                                        id="day"
                                        onClick={this.selectDay}
                                        style={{ width: "110px", height: "30px", flexDirection: "row", display:"flex" }}


                                    >
                                        <div style={{width:"90px", alignSelf:"center"}}>{this.state.day}</div>
                                        <img src={Down} alt="arrowdow" style={{ width: "17px", height: "17px",  }} />

                                    </div>
                                    {this.state.selectDay ? (<Dropdown selectDay={this.selectDays} clock={false} closedrop={this.closedrop} />) : (<div></div>)}
                                </div>
                                
                        
                        </div>

                        ):(
                            <div></div>
                            

                        )}
                        
                        
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
                        {/*  */}
                        {this.state.tooSmall?(<div>

                            <div style={{ marginTop: "20px" }}>
                                <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "75px", }} value="submit" >Save</button>
                        </div>
                        </div>):(
                            <div><h3 style={{marginTop:"10px"}}>Scheduled Teaching Block:</h3>
                            <div className="form-group forfiles" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                    
                                    <div>
                                        <label htmlfor="time"><b>Scheduled Time:</b></label>
                                        <div
    
                                            className="form-control"
                                            id="time"
                                            onClick={this.selectTime}
                                            style={{ width: "120px", height: "30px", flexDirection: "row", display: "flex" }}
    
    
                                        >
                                            <div style={{ width: "90px", alignSelf: "center" }}>{this.state.time}</div>
                                            <img src={clock} alt="clock" style={{ width: "15px", height: "15px", }} />
    
                                        </div>
                                        {this.state.selectTime ? (<Dropdown selectDay={this.selectDays} clock={true} closedrop={this.closedrop} changeTime={this.changeTime}/>) : (<div></div>)}
    
    
                                    </div>
                                    <div>
                                        <label htmlfor="day"><b>Day: </b></label>
                                        <div
    
                                            className="form-control"
                                            id="day"
                                            onClick={this.selectDay}
                                            style={{ width: "110px", height: "30px", flexDirection: "row", display:"flex" }}
    
    
                                        >
                                            <div style={{width:"90px", alignSelf:"center"}}>{this.state.day}</div>
                                            <img src={Down} alt="arrowdow" style={{ width: "17px", height: "17px",  }} />
    
                                        </div>
                                        {this.state.selectDay ? (<Dropdown selectDay={this.selectDays} clock={false} closedrop={this.closedrop} />) : (<div></div>)}
                                    </div>
                                    
                                <div style={{opacity:"0"}}>
                                    thanks!
                                    </div>
                            </div>
                            <div style={{ marginTop: "105px" }}>
                                <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "75px", }} value="submit" >Save</button>
                        </div>
                            </div>


                        )}
                        
                        
                       
                        
                        </div>
                        </Form>
                        </div>
                </div></div>
            </div>

        )

    }
}

export default Studentedit;