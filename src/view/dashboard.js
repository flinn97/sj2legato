import React, { Component } from 'react';
import Sidemenu from "./sidemenu.js";
import Dash from "./dash.js";
import "../view.css";
import Chat from "./chat.js";
import Studentview from "./studentDash.js";//"./studentdash.js" ;
import Metro from "./metro.js";//"../pages/metro.js" ;
import Calendar from "./calendar.js";//"../pages/calendar.js" ;
import Teacher from './teacher.js';
 
 

export default class Dashboard extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div style={{display:"flex", flexDirection:"row", justifycontent:"space-between"}}>
                <div className="sidemenu">
                <Sidemenu handleChange={this.props.handleChange} dispatch={this.props.dispatch} state={this.props.state}/>
                </div>
                <Switchcase handleChange={this.props.handleChange} dispatch={this.props.dispatch} state={this.props.state}/>
                

            </div>
        );
    }
}

function Switchcase (props) {
    let mypage={
        viewstudent: <Studentview handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>,
        metro: <Metro handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>,
        calendar: <Calendar handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>,
        chat: <Chat handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>,
        teacherpage: <Teacher handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>,
        dash: <Dash handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    }
    return mypage[props.state.myswitch]? mypage[props.state.myswitch]: <div></div>;

    // if( props.state.viewstudent ){
    //     return <Studentview handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    // }
    // else if(props.state.metro){
    //     return <Metro handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    // }
    // else if(props.state.calendar){
    //     return <Calendar handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    // } 
    // else if(props.state.chat){
    //     return <Chat handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    // }
    // else if(props.state.teacherpage){
    //     return <Teacher handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>
    // }
    // else{
    //     return <Dash handleChange={props.handleChange} dispatch={props.dispatch} state={props.state}/>

    // }
   
}
