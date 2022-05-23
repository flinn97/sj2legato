import React, { Component } from 'react';
import Checkedd from './components/checkbox.js';
class Student extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div className="bigcard">
                <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                    <h3>My Students</h3> <p style={{cursor:"pointer", color:"blue"}} onClick={this.props.dispatch.bind(this,{addstudent:true})}>Add Student</p></div>
                <div style={{display:"flex", flexDirection:"column"}}>
                <div>{this.props.state.currentuser?.students?.map((student, index) =><div key={index} style={{border:"1px solid green", width:"100%", height:"30px", display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                    <div ><div onClick={this.props.dispatch.bind(this,{currentstudent:student, myswitch:this.props.state.switch.student.myswitch })}style={{fontSize:"18px", cursor:"pointer"}}>{student.firstName} {student.lastName}LastNamePlaceholder</div></div><div style={{display:"flex", flexDirection:"row",}}><div style={{marginRight:"20px"}}><Checkedd size={this.props.state.styles.checkbox.size1} state={this.props.state} student={student} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/></div><div>edit</div></div>
                    </div>)}</div>
                </div>
                </div>

               
        );
    }
}

export default Student;
//                    {this.props.state.currentuser.students.length!==0?(<div>{this.props.state.currentuser.students.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>):(<></>)}
