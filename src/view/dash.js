import React, { Component } from 'react';
import Student from './mystudents.js';
import Today from "./todaycomponent.js";
import Chat from "./chat.js";
import Metro from './metro.js';
import "../view.css"
import Admin from './admin.js';
class Dashboard extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
        
        };
    }
    

    render() {
       
        return (

                <div style={{display:"flex", flexDirection:"column", justifycontent:"center", marginLeft:this.props.state.styles.margins.margin3}}>
                    {this.props.state.role==="admin"?(<Admin />):(<div>
                    <h1 style={{marginTop: this.props.state.styles.margins.margin4}}>Dashboard</h1>
                    <div style={{display:"flex", flexDirection:"row",  }}>
                        <Student  state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                        <Today state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch} />
                    </div>
                    <div style={{display:"flex", flexDirection:"row", }}>
                        <Chat state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                        <Metro state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                    </div>
                    </div>)}
                    
                </div>

        );
    }
}

export default Dashboard;