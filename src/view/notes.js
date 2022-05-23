import React, { Component } from 'react';
import studentService from '../services/studentService';
import authService from '../services/auth.service';
import Newnote from './newnote';
class Notes extends Component {
    constructor(props) {
        //create state
        super(props);
        this.handlenotes=this.handlenotes.bind(this);

        this.state = {
            
        };
    }
    
    async handlenotes(note, myswitch){
        
        let mynote = note? note :{
            id: Date.now(),
            description: this.props.state.description,
            date: Date.now(),
            }
            mynote.description=this.props.state.description
        
        let mynotes =  await studentService.updateAddDelnotes(mynote, this.props.state.currentstudent.notes,  myswitch)
        ;
         await this.props.dispatch({[this.props.state.currentstudent.notes]:mynotes, addnote:false, editnote:false })
        authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {notes: mynotes})
    }
    render() {
       

        return (
            <div className="smallcardbottomRight" style={{marginTop:this.props.state.styles.margins.margin1}}>
            <h3>Notes</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
            <button  className="btn  btn-block"  onClick={this.props.dispatch.bind(this, {addnote:true})} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Notes</button>
            {this.props.state.addnote?(<Newnote myswitch="addnote" handleclose={this.props.dispatch.bind(this, {addnote:false, editnote:false})} handlenotes={this.handlenotes} state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>):(<div></div>)}
            {this.props.state.currentstudent?.notes.map((note, index) => <div key={index}>{this.props.state.editnote?(<Newnote  note = {note} myswitch="updatenote" handleclose={this.props.dispatch.bind(this, {addnote:false, editnote:false})} handlenotes={this.handlenotes} state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>):
            (<div><div onClick={this.props.dispatch.bind(this, {editnote: true, description: note.description})} >{note.description} </div><p onClick={this.handlenotes.bind(this, note, "delnote")}>delete</p></div>)}</div>)}

            </div>
            </div>

               
        );
    }
}

export default Notes;