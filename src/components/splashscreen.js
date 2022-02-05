import React, { Component } from 'react';
import Logo from "../legato.png";
import Rendering from "./rendering.js"

//allows me to create a dialog box to pop up for adding students with names and emails.
class Splashscreen extends Component {
    constructor(props) {
        super(props);
        

        

      
        

        this.state = {
            width:"30%", alignSelf:"center", marginTop:"5%"
           

        }
       

    }
    componentDidMount() {
        if(parseInt(window.innerWidth) <= 550){
            this.setState({ tooSmall: true, 
                width:"85%",
                marginTop:"35%"
               
                
            });
        }
        this.wait();

        

    }
    async wait(){
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(500)
            await this.props.closesplash()
        
        
    }
   

   


    render() {

        return (
            <div className="popup-boxa1splash  to-front" style={{zIndex: "3000"}}>
                <div className="splashscreen">
                   

                   
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", }}>
                      

                       
                        <img src={Logo} alt="logo" style={{width: this.state.width, alignSelf:"center", marginTop: this.state.marginTop}}/>
                              


                                   
                    </div>
                    
                   
                </div>
            </div>
        )

    }
}

export default Splashscreen;