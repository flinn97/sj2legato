import React, { Component } from 'react';
import ProfilePic from './profilepic';
import Menu from './menu.js';
import Logout from './logout.js';
class Sidemenu extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div style = {{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", height:"100%", background:this.props.state.styles.colors.color1}}>
                <h2 style={{marginTop:"10px"}}>Legato</h2>
                    <ProfilePic handleChange={this.props.handleChange} dispatch={this.props.dispatch} state={this.props.state}/>
                    <Menu handleChange={this.props.handleChange} dispatch={this.props.dispatch} state={this.props.state}/>
                    <Logout handleChange={this.props.handleChange} dispatch={this.props.dispatch} state={this.props.state}/>
                </div>
               
        );
    }
}

export default Sidemenu;