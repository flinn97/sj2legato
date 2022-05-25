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
               <Progressbar text="Days Practiced:" day={true} amount={this.props.state.currentstudent.daysPracticed} goal={this.props.state.currentstudent.totalDays} />
               <Progressbar text="Time Practiced:" time={true} amount={this.props.state.currentstudent.timeTotal} goal={this.props.state.currentstudent.wmin} />
               <Progressbar text="Starpoints:"  day={false} amount={this.props.state.currentstudent.starpoints} goal={this.props.state.currentstudent.starpointsGoal}/>
            </div>
            </div>

               
        );
    }
}

export default Progress;