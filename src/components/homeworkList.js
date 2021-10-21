import React, { Component } from "react"
import "./components.css";
//import AuthService from "../services/auth.service";

//simply sets state and maps every student found in the current list of students to a button that is clickable.
export default class HomeworkList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
            
            
            
        }

    };
 
    profile(homework) {
        
    
    }
    

    render() {
        console.log(this.props.homeworks[0].title);
       /*<div >
                           

                        </div>
        * 
        */
    return (<div>
        
        <p className="huv">{this.props.homeworks[0].title} </p>
      
                
        
    </div>
        )
                   

    }
}
