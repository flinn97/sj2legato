import React, { Component } from 'react';

class Chat extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div className="bigcard" style={{marginTop:this.props.state.styles.margins.margin1}}>
            <h3>Chat</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
                <div>tom</div>
                <div>Sam</div>
                <div>Jared</div>
            </div>
            </div>
               
        );
    }
}

export default Chat;