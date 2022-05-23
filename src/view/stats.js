import React, { Component } from 'react';

class Stats extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div className="smallcardleft" style={{marginTop:this.props.state.styles.margins.margin1}}>
            <h3>Stats</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
            </div>
            </div>

               
        );
    }
}

export default Stats;