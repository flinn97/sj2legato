import React, { Component } from 'react';
import Progress_circle from './components/progresscircle.js';
import Progressbar from './components/moreProgress.js';
class Progress extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div className="smallcardleft" >
            <h3>Progress</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
               <Progress_circle goals={this.props.state.currentstudent?.mainGoals} updatecircle={this.props.state.updatecircle} dispatch={this.props.dispatch}/>
               <Progressbar />
               <Progressbar />
               <Progressbar />
            </div>
            </div>

               
        );
    }
}

export default Progress;