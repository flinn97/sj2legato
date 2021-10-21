import React, { Component } from 'react';
import Files from "./diapiccontent.js";
import background from "./music.jpg";
import AuthService from "../services/auth.service";

//allows me to create a dialog box to pop up for adding students with names and emails.
class EditBack extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            setIsOpen: false,
            backsrc: background,
            current: AuthService.getCurrentUser(),

            previewImage: undefined,
        }

    }
    componentDidMount() {
        
        if (this.props.realusr.backgroundpic) {
            const backgroundpic = 'http://localhost:8080' + this.props.realusr.backgroundpic;

            this.setState({ backsrc: backgroundpic })

        }


    }
    handleChange = (files) => {
        this.setState({
            backsrc: files,

        })
    }

    render() {
        return (
            <div className="popup-box to-front">

                <div className="diapicbox3">


                    <div>
                        <span className="close-icon-2" onClick={this.props.handleBackClose}>x</span>
                        <h1>Background Photo</h1>
                    </div>
                    <div className="profile-img-card3" >
                        <img
                            src={this.state.backsrc}
                            alt="profile-img-card"
                            className="cropped2"
                            
                            

                        />
                    </div>
                    <div>

                        {this.state.current.role === "admin" ? (<div><Files handleChange={this.handleChange} usr={this.props.realusr} background={true} /></div>) : (<div>{this.props.realusr.role === "student" ? (<div><Files handleChange={this.handleChange} usr={this.props.realusr} background={true} /></div>) : (<div><Files handleChange={this.handleChange} background={true} /></div>)}</div>)}


                    </div>
                </div>

            </div>

        )

    }
}

export default EditBack;