import React, { Component } from 'react';
import "./checkbox.css"
import authService from '../../services/auth.service';
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
        let ob = this.props.student.syncedCheckboxes
        ob[day]=!ob[day]
        this.props.dispatch({[this.props.state.currentuser.students[this.props.student.__v].syncedCheckboxes]:ob})
        authService.changeData("student", this.props.student._id, this.props.state.currentuser._id, {syncedCheckboxes: ob})
    }

    render() {
        
        return (

            <div style={{display:"flex", flexDirection:"row", }}>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.mon} />
                <label onClick={this.markcheckbox.bind(this, "mon")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>M</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.tues} />
                <label onClick={this.markcheckbox.bind(this, "tues")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>T</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.wed} />
                <label onClick={this.markcheckbox.bind(this, "wed")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>W</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.thur} />
                <label  onClick={this.markcheckbox.bind(this, "thur")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>R</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input  type="checkbox" checked={this.props.student?.syncedCheckboxes.fri} />
                <label onClick={this.markcheckbox.bind(this, "fri")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>F</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.sat} />
                <label onClick={this.markcheckbox.bind(this, "sat")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>S</p>
                </div>
                <div className="tick"></div>
                        </label>
                <input type="checkbox" checked={this.props.student?.syncedCheckboxes.sun} />
                <label onClick={this.markcheckbox.bind(this, "sun")} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>Su</p>
                </div>
                <div className="tick"></div>
                        </label>
                
           </div>
            )
}
}

export default Checkedd;