import React, { Component } from 'react';
class Menu extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       
        return (
            <div style={{display:"flex", flexDirection:"column", justifycontent:"center",}}>
                {this.props.state.currentuser.role==="student"?(<div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.student)}>Dashboard</div>
                ):(<div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.dashboard)}>Dashboard</div>)}
                <div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.metro)}>Metronome</div>
                {this.props.state.currentuser.role==="student"?(<div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.teacher)}>My Teacher</div>):(
                <div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.calendar)}>Calendar</div>)}
                <div style={{cursor:"pointer",}} onClick={this.props.dispatch.bind(this,this.props.state.switch.chat)}>Chat</div>

            </div>

               
        );
    }
}

export default Menu;