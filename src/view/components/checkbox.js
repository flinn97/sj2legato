import React, { Component } from 'react';
import "./checkbox.css"
import authService from '../../services/auth.service';
import studentService from '../../services/studentService';
class Checkedd extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);
        this.state = {  
        }
    }
    /**
     * 
     * @param {*} e 
     * @param {*} day 
     * check the box send to backend.
     */
    async markcheckbox(day) {
        if(this.props.homework){
                let myhomework= this.props.homework
                let ob =  this.props.homework.hwchecked
                ob[day]=!ob[day]
                myhomework.hwchecked=ob
                debugger
                let i = studentService.compare(this.props.state.currentstudent.homeworks, this.props.homework, true)
                await this.props.dispatch({[this.props.state.currentstudent?.homeworks[i].hwchecked]:ob})
                authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {homeworks: this.props.state.currentstudent.homeworks})
        }
        else{
             let student = studentService.checkboxhelp(this.props.student.syncedCheckboxes, day, this.props.student, this.props.state.currentuser.students)  
             let mystudent=this.props.state.currentuser.students[student.i]
        this.props.dispatch({[mystudent]: student.student})
        authService.changeData("student", this.props.student._id, this.props.state.currentuser._id, {syncedCheckboxes: this.props.state.currentuser.students[this.props.student.__v].syncedCheckboxes, daysPracticed: parseInt(this.props.state.currentuser.students[this.props.student.__v].daysPracticed)})
        }
    }

    render() {
        
        return (

            <div style={{display:"flex", flexDirection:"row", }}>
                    <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.mon : this.props.student?.syncedCheckboxes.mon} />
                <label onClick={this.markcheckbox.bind(this, "mon")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>M</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.mon : this.props.student?.hwtime.mon}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.tues : this.props.student?.syncedCheckboxes.tues} />
                <label onClick={this.markcheckbox.bind(this, "tues")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>T</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.tues : this.props.student?.hwtime.tues}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.wed : this.props.student?.syncedCheckboxes.wed} />
                <label onClick={this.markcheckbox.bind(this, "wed")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>W</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.wed : this.props.student?.hwtime.wed}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.thur : this.props.student?.syncedCheckboxes.thur} />
                <label  onClick={this.markcheckbox.bind(this, "thur")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>R</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.thur : this.props.student?.hwtime.thur}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input  type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.fri : this.props.student?.syncedCheckboxes.fri} />
                <label onClick={this.markcheckbox.bind(this, "fri")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>F</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.fri : this.props.student?.hwtime.fri}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.sat : this.props.student?.syncedCheckboxes.sat} />
                <label onClick={this.markcheckbox.bind(this, "sat")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.sat : this.props.student?.hwtime.sat}</div>
                        </div>
                        <div style={{display: "flex", flexDirection:"column"}}>
                <input type="checkbox" checked={this.props.homework? this.props.homework?.hwchecked.sun : this.props.student?.syncedCheckboxes.sun} />
                <label onClick={this.markcheckbox.bind(this, "sun")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>Su</p>
                </div>
                <div className="tick"></div>
                        </label>
                        <div>{this.props.homework?this.props.homework.hwtime.sun : this.props.student?.hwtime.sun}</div>
                        </div>
                
           </div>
            )
}
}

export default Checkedd;