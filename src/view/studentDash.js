import React, { Component } from 'react';
import Studentinfo from './studentinfo.js';
import Homework from "./homework.js";
import Progress from "./progress.js";
import Goals from './goals.js';
import Notes from './notes.js';
import Stats from './stats.js';

import "../view.css"
class Studentview extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (

                <div style={{display:"flex", flexDirection:"column", justifycontent:"center", marginLeft:this.props.state.styles.margins.margin3}}>
                    <h1 style={{marginTop:this.props.state.styles.margins.margin4}}>Student dash</h1>
                    <div style={{display:"flex", flexDirection:"row",  }}>
                    <Progress state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                        <Homework state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch} />
                    </div>
                    <div style={{display:"flex", flexDirection:"row", }}>
                    <Stats state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                        <Goals state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                        <Notes state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                    </div>
                </div>

        );
    }
}

export default Studentview;