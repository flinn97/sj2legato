import React, { Component } from "react";
import "./components.css";
import AuthService from "../services/auth.service";

//this component details my dialog help component


class FileDialogue extends Component {
    constructor(props) {
        super(props);

        this.upload = this.upload.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.state = {
            selectedFile: null,
            tformData: null,
            width: "160px",
            width1: "135px",
            words: "Picture",
            tooSmall: false,
           
            currentUser: AuthService.getCurrentUser(),
            
        }

    }
    updateWindowDimensions() {
        if(parseInt(window.innerWidth) <= 400)
        this.setState({ width: "135px", width1:"135px", words:"Pic", tooSmall:true });
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }
    //get user if it exists from the jwt.sign for browser history. I don't use cookies for this app.
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions());
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
            <div className="file forfiles">
                <label className="file-label" style={{ background: "#696eb5", width:this.state.width }} >
                    <input className="file-input" type="file" name="resume" onChange={this.fileChangedHandler} style={{ background: "#696eb5", }} />
                    <span className="file-cta" style={{ background: "#696eb5", }}>
                        
                        <span className="file-label" style={{ background: "#696eb5", }}>
                            {this.props.background ? (<p style={{ margin: "0 auto", alignItems: "center", background: "#696eb5", color: "#F0F2EF",  }}>Change Background Pic</p>) : (<p style={{ margin: "0 auto", alignItems: "center", background: "#696eb5", color: "#F0F2EF" }}>Change Profile {this.state.tooSmall?(<span></span>):(<span>Pic</span>)}</p>)}
                           
                                    </span>

                                </span>
                        </label>
                <div style={{ width: this.state.width1,}}>

                    <label className="file-label" style={{ float: "right", background: "#696eb5", width: this.state.width1,}} onClick={this.upload} >
                        <div className="file-input" style={{ width: "130px", background: "#696eb5", }}>   </div>
                        <span className="file-cta" style={{ background: "#696eb5", width: this.state.width1,}}>
                            
                            <span className="file-label" style={{ background: "#696eb5", }}>
                                <div style={{ width: "130px" }}><p style={{ margin: "0 auto", alignItems: "center", background: "#696eb5", color: "#F0F2EF"}}>Save Changes </p></div>
                                    </span>

                        </span>
                    </label>
                </div>
            </div>


            
            )
    }
}


export default FileDialogue;