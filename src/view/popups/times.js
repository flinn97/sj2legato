import React, { Component } from "react";
import studentService from "../../services/studentService";
import authService from "../../services/auth.service";
//allows me to create a dialog box to pop up for adding students with names and emails.
export default class Times extends Component {
    constructor(props) {
        super(props);
        //this.more = this.more.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef;
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handletime=this.handletime.bind(this);
        this.state = {
            
        }

    };
    componentDidMount() {

        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {

                this.props.handleClose(false);

        }
    }
    async handletime(){
        if(this.props.homework){
            let myhomework= this.props.homework;
            let ob =  this.props.homework.hwtime;
            ob[this.props.state.dayfortimepopup]=this.props.state.timeadded;
            myhomework.hwtime=ob;
            let i = studentService.compare(this.props.state.currentstudent.homeworks, this.props.homework, true);
            await this.props.dispatch({[this.props.state.currentstudent?.homeworks[i].hwtime]:ob});
            authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {homeworks: this.props.state.currentstudent.homeworks});
        }
        else{
            let ob= this.props.state.currentstudent?.hwtime;
            ob[this.props.state.dayfortimepopup]=this.props.state.timeadded;
            let mins = 0
            for(const key in ob){
                mins+= parseInt(ob[key])
            }
            let student= this.props.state.currentstudent
            student.timeTotal=mins;
            student.hwtime=ob;
            await this.props.dispatch({[this.props.state.currentstudent]:student});
            authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {hwtime: this.props.state.currentstudent.hwtime, timeTotal:mins });
        }
        this.props.handleClose();

    }

    render() {
        return (
            <div style={{ zIndex: "1100" }}>
                <div className="popup-box" style={{ zIndex: "1010", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="card-container5ab121 centerized" style={{ zIndex: "1010", flexDirection: "column"}} ref={this.wrapperRef}>
                        <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                        <h2 className="centerized" style={{ alignSelf: "flex-start", marginBottom: "15px"}} >Log Time</h2>
                        <div>
                                        <div>For which day are you submitting?</div>
                                    <div className="form-group" >
                                        <select style={{ width: "100%", marginBottom: "10px" }} htmlFor="dayfortimepopup" onChange={this.props.handleChange} name="dayfortimepopup" id="dayfortimepopup">
                                            <option value=""></option>
                                            <option value={"mon"}>Monday</option>
                                            <option value={"tues"}>Tuesday</option>
                                            <option value={"wed"}>Wednesday</option>
                                            <option value={"thur"}>Thursday</option>
                                            <option value={"fri"}>Friday</option>
                                            <option value={"sat"}>Saturday</option>
                                            <option value={"sun"}>Sunday</option>
                                        </select>
                                    </div>
                                     <div>How much time would you like to submit today?</div>
                                    <div className="form-group" style={{ display: "flex", flexDirection: "row", marginBottom: "17px" }}  >
                                        <input type="text" className="form-control" id="minedit" style={{ width: "60px" }} onChange={this.props.handleChange} name="timeadded"/><p>Minutes</p>
                                    </div>
                                    <div>
                                        <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.handletime}>Submit Time</button>
                                    </div>
                                </div>
                            </div>
                       
                        
                    </div>
                </div>
        )
    }
}

