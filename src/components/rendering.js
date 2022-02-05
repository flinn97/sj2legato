import React, { Component } from 'react';
import Logo from "../legato.png";
import Rendering from "./rendering.js"

//allows me to create a dialog box to pop up for adding students with names and emails.
class Splashscreen extends Component {
    constructor(props) {
        super(props);
        

        

      
        

        this.state = {
           

        }
       

    }
    async componentDidMount() {
        await this.wait(500);
        this.props.closesplash();
        

    }


   


    render() {

        return (
            <div >
                Loading...
            </div>
        )

    }
}

export default Splashscreen;