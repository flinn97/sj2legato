import React, { Component } from 'react';
import authService from '../services/auth.service';

class Logout extends Component {
    constructor(props) {
        //create state
        super(props);
        this.logout=this.logout.bind(this)
    }
    logout(){
        this.props.dispatch({currentuser: undefined})
        authService.logout()
    }

    render() {
       

        return (
            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <div>Settings</div>
                <div style={{cursor:"pointer",}} onClick={this.logout}>Logout</div>
            </div> 

               
        );
    }
}

export default Logout;