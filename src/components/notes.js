import React, { Component } from "react";
import AuthService from "../services/auth.service";
import moment from 'moment';
import edit from "./edit.png";
import leaf from "./leaf.png";


import trash from "./Trash1.png";


//not much here but functionality will be added for the goals.
export default class Notes extends Component {
    constructor(props) {
        super(props);
        this.deleted = this.deleted.bind(this);
        this.AddNote = this.AddNote.bind(this);
        this.sub = this.sub.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editnotes = this.editnotes.bind(this);
        this.close = this.close.bind(this);
        this.saveEdit = this.saveEdit.bind(this);

        
        
        
        this.state = {
            addnote: false,
            description: "",
            notes: this.props.notes,
            id: 1,
            descriptionHold: "",
            edit: false,
            noteId: ""
        };
    }

    addnote(note) {
        
        
    }
    close() {
        this.setState({
            edit: false,
            noteId: "",
        })
    }
    saveEdit(note) {
        let moments = moment().format('lll');
        let notes = {};
        if (note.tempId) {
            let ar = [];
            for (let i = 0; i < this.state.notes.length; i++) {


                if (this.state.notes[i].tempId === note.tempId) {
                    notes = {
                        tempId: note.tempId,
                        description: this.state.description,
                        date: moments,

                    }
                    ar.push(notes);

                }
                else {
                    ar.push(this.state.notes[i]);
                }
            }
            this.setState({
                notes: ar,
            })
            AuthService.changeNotes(this.props.student, note, notes );
        }
        else {
            let ar = [];
            for (let i = 0; i < this.state.notes.length; i++) {


                if (this.state.notes[i]._id === note._id) {
                    notes = {
                        _id: note._id,
                        description: this.state.description,
                        date: moments,

                    }
                    ar.push(notes);

                }
                else {
                    ar.push(this.state.notes[i]);
                }
            }
            this.setState({
                notes: ar,
                

            })
            AuthService.changenote(this.props.student, notes);

        }
        this.close();
    }

    editnotes(note) {

        if (note.tempId) {
            this.setState({
                edit: true,
                noteId: note.tempId,
                descriptionHold:note.description,
            })
        }
        else {
            this.setState({
                edit: true,
                noteId: note._id,
                descriptionHold: note.description,

            })
        }
    }

    deleted(note) {
        let id;
        if (note.tempId) {
            id = note.tempId;
        }
        else {
            id = note._id;
        }
        if (note.tempId) {
            let ar = [];

            for (let i = 0; i < this.state.notes.length; i++) {
                

                if (this.state.notes[i].tempId === id) {

                    
                }
                else {
                    ar.push(this.state.notes[i]);
                }
            }
            this.setState({
                notes:ar,
            })
            AuthService.deleteNotes(this.props.student, note );
        }

        else {
            let arr = [];
            for (let i = 0; i < this.state.notes.length; i++) {
                

                if (this.state.notes[i]._id !== id) {
                    arr.push(this.state.notes[i]);

                }

               
            }
            console.log(arr);

            this.setState({
                notes: arr,
            })

            AuthService.deletenote(this.props.student, id);

        }

    }

    AddNote() {
        this.setState({
            addnote:!this.state.addnote,
        })
    }

    sub() {
        let moments = moment().format('lll');

        AuthService.addNote(this.props.student, this.state.description, moments);
       
        let ar = this.state.notes;

        let noted = {
            tempId: this.state.id,
            date: moments,
            description: this.state.description
        }
       
        let id = this.state.id + 1

        ar.push(noted);

        this.setState({
            notes: ar,
            addnote: false,
            description: "",
            id: id
        })

        this.props.keep();
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (

            <div >
                

                <div >
                    
                    
              
                    <div className="fill2" style={{ height: "275px",  marginTop:"15px"}} >
                        <div className="homeworkScroll fill2">
                            {this.props.notes ? (<div className="fill2">
                                {
                                    this.state.notes.map((note, index) =>

                                        <div className="checkboxstuff1a fill2" key={index} style={{ marginLeft: "8px", marginBottom: "4px" }}>
                                            {this.state.edit ? (<div className="checkboxstuff1a fill2">

                                                {this.state.noteId === note._id ? (<div className="columbized" style={{ width: "95%" }}>
                                                    <div className=" fill2">
                                                        <p style={{ float: "right", marginTop: "7px"}} className="huv" onClick={this.close}>X</p>
                                                        </div>
                                                    <div className="form-group" >
                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        rows="3"
                                                        id="description"
                                                        onChange={this.handleChange}
                                                        placeholder={note.description}
                                                        name="description"
                                                    ></textarea>
                                                    </div>
                                                    <div >
                                                       
                                                        
                                                        <button style={{ height: "45px",  width: "125px", float:"right" }} className="btn  btn-block" onClick={this.saveEdit.bind(this, note)}>Submit</button>

                                                           
                                                        
                                                    </div>
                                                </div>) : (

                                                        <div className="fill2">{this.state.noteId === note.tempId ?

                                                            (<div className="columbized" style={{ width: "95%" }}>
                                                                <div className=" fill2">
                                                                    <p style={{ float: "right", marginTop: "7px" }} className="huv" onClick={this.close}>X</p>
                                                                </div>
                                                                <div className="form-group" >
                                                                    <textarea
                                                                        type="text"
                                                                        className="form-control"
                                                                        rows="3"
                                                                        id="description"
                                                                        onChange={this.handleChange}
                                                                        placeholder={note.description}
                                                                        name="description"
                                                                    ></textarea>
                                                                </div>
                                                                <div >


                                                                    <button style={{  height: "45px",  width: "125px", float:"right" }} className="btn  btn-block" onClick={this.saveEdit.bind(this, note)}>Submit</button>



                                                                </div>
                                                            </div>)
                                                            :
                                                            (<div className="checkboxstuff1a">
                                                                <div style={{width:"80%"}}>
                                                                    <strong>{note.date}</strong>
                                                                    <p className=" " style={{ marginRight: "10px" }}>{note.description}</p>
                                                                </div>
                                                                <div className="checkboxstuff3" style={{marginRight:"7px"}}>
                                                                    <div className="checkboxstuff3">
                                                                        <img
                                                                            src={edit}
                                                                            alt="edit"
                                                                            onClick={this.editnotes.bind(this, note)}
                                                                            className="huv edit3"
                                                                            style={{ width: "20px", height: "20px", opacity: ".5" }}


                                                                        />
                                                                        <img
                                                                            src={trash}
                                                                            alt="delete"
                                                                            onClick={this.deleted.bind(this, note)}
                                                                            className="huv edit3"
                                                                            style={{ width: "20px", height: "20px", opacity: ".5" }}


                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                
                                                                )}


                                                        </div>





                                                    )}
                                            </div>) : (
                                                    <div className="checkboxstuff1a" >
                                                        <div style={{ width: "80%" }}>
                                            <strong>{note.date}</strong>
                                                <p className=" " style={{ marginRight: "10px" }}>{note.description}</p>
                                                        </div>
                                                        <div className="checkboxstuff3">
                                                            <div className="checkboxstuff3forarchive" style={{ marginRight: "7px" }}>
                                                                <img
                                                                    src={edit}
                                                                    alt="edit"
                                                                    onClick={this.editnotes.bind(this, note)}
                                                                    className="huv edit3" 
                                                                    style={{ width: "23px", height: "23px", opacity: ".5" }}


                                                                />
                                                                <img
                                                                    src={trash}
                                                                    alt="delete"
                                                                    onClick={this.deleted.bind(this, note)}
                                                                className="huv edit3" 
                                                                style={{ width: "23px", height: "23px", opacity: ".5" }}


                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                }
                                            

                                            

                                        </div>
                                    )
                                }
                            </div>) : (
                                    <div></div>)}
                            <div>
                                {this.state.addnote ? (<div>
                                    <div>
                                        <div className="form-group" >
                                            <div className=" fill2 checkboxstuff1a">
                                                
                                            
                                                <label htmlFor="description">note:</label>
                                                <p style={{ float: "right", }} className="huv" onClick={this.AddNote}>X</p>
                                            </div>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                rows="3"
                                                id="description"
                                                onChange={this.handleChange}

                                                name="description"
                                            ></textarea>
                                        </div>

                                    </div>
                                    <button style={{ height: "45px",  width: "125px", float:"right" }} className="btn btn-block" onClick={this.sub}><span className="checkboxstuff1" style={{ width: "250" }}>
                                        <img
                                            src={leaf}
                                            className="edita"
                                            style={{ width: "25px", height: "25px", opacity: "1" }}


                                        />
                                        <p className="rowss huv">Submit</p>
                                    </span></button>
                                </div>
                                ) : (
                                        <div className="fill2">
                                            <button className="btn btn-block  centerized" style={{ width: "150px" }} onClick={this.AddNote}><span className="checkboxstuff1" style={{ width: "250" }}>
                                                <img
                                                    src={leaf}
                                                    className="edita"
                                                    style={{ width: "20px", height: "20px", opacity: ".75" }}


                                                />
                                                <h6>+</h6><h6 className="rowss huv"> New Note</h6>
                                            </span></button>
                                        </div>
                                    )}

                            </div>

                        </div>

                        

                    </div>
                        
                        
                    </div>
                    
                        

                    



                </div>

            
        );
    }
}
/*
 * 
 * <div className="checkboxstuff " style={{ marginBottom: "10px" }} >
                        <div style={{ width: "150px", height: "40px" }}><button className="btn btn-block" onClick={this.props.changenotes.bind(this, false)} style={{ marginRight: "10px", background: "#C8CAE4", color: "#F0F2EF", width: "150px", height: "40px" }}>Completed Goals</button></div>
                        <div style={{ width: "100px", height: "40px" }}><button className="btn btn-block" style={{ marginLeft: "10px", background: "#696eb5",  color: "#F0F2EF" }}  onClick={this.props.changenotes.bind(this, true)} >Notes</button></div>


                    </div>*/