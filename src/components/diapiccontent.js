import React, { Component } from "react";
import "./components.css";
import AuthService from "../services/auth.service";

//this component details my dialog help component


class FileDialogue extends Component {
    constructor(props) {
        super(props);

        this.upload = this.upload.bind(this);

        this.state = {
            selectedFile: null,
            tformData: null,
           
            currentUser: AuthService.getCurrentUser(),
            
        }

    }
    //going to have to update upon login or signup ect.
    async upload(e) {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append('profileImg', this.state.selectedFile);
        let background = false;

        if (this.props.background) {
            background = true;
        }
        let id = "";
        let role = "";
        if (this.state.currentUser.role === "student") {
            id = this.props.usr._id;
            role= "student"
        }
        else if (this.state.currentUser.login) {
            id = this.state.currentUser.user._id;
        }
        else if (this.state.currentUser.role === "admin") {
            if (this.props.usr.role === "student") {
                id = this.props.usr._id;
                role = "student";
            }
            else {
                id = this.props.usr._id;

            }
        }
        else {
            id = this.state.currentUser.id;
        }
        await AuthService.uploadPhoto(formData, id, background, role).then(response => {
            window.location.reload();
        })
    }

    fileChangedHandler = (event) => {
        console.log(event.target.files[0]);
        this.setState({ selectedFile: event.target.files[0] });
        this.props.handleChange(URL.createObjectURL(event.target.files[0]));
    }

    uploadHandler = () => {

        console.log(this.state.selectedFile);
    }

    render() {
        return (
            <div className="file forfiles" >
                <label className="file-label"  >
                    <input  className="file-input" type="file" name="resume" onChange={this.fileChangedHandler} />
                    <span className="file-cta">
                        
                        <span className="file-label">
                            {this.props.background ? (<p style={{ margin: "0 auto", alignItems: "center" }}>Change Background Pic...</p>):( <p style={{ margin: "0 auto", alignItems: "center" }}>Change Profile Pic...</p>)}
                           
                                    </span>

                                </span>
                        </label>
                <div style={{ width: "180px" }}>

                    <label className="file-label" style={{ float: "right", }} onClick={this.upload} >
                        <div className="file-input" style={{ width: "130px" }}>   </div>
                        <span className="file-cta">
                            
                            <span  className="file-label">
                                <div style={{ width: "130px" }}><p style={{margin:"0 auto", alignItems:"center"}}>Upload Picture</p></div>
                                    </span>

                        </span>
                    </label>
                </div>
            </div>


            
            )
    }
}


export default FileDialogue;