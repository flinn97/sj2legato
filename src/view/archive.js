import React, { Component } from 'react';
import leaf from "./leaf.png"

class Archive extends Component {
    constructor(props) {
        //create state
        super(props);
       this.state = {
        };
    }
    /**
     * add goals.
     * @param {*} main 
     * @param {*} maingoal 
     */

    render() {


        return (
         <div>
                    {this.props.state.currentstudent?.archive.map((main, index) =>
                        <div key={index} >
                            <div>
                                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", }}>
                                    <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                                        <h4 style={{ marginBottom: "10px" }} className="huv rowss" ><span onClick={this.props.dispatch.bind(this, {goals:true, showgoal:true, main: true, maingoal:main,  })}>{main.mainGoal.title} </span></h4>
                                    </div>
                                    <div>
                                        <div onClick={this.props.AddUpdateDeleteArchiveGoal.bind(this, false, main, "delarchivegoal")} >delete</div>
                                    </div>
                                </div>
                            </div>
                            {main.mainGoal.goals.map((goal, index) =>
                                <div key={index} style={{ marginLeft: "30px" }} >
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <span  onClick={this.props.dispatch.bind(this, {goals:true, main: false, maingoal: main, goal:goal, showgoal:true})}>{goal.title}</span>
                                    </div>
                                    <div style={{ width: "25%", flexDirection: "row", justifyContent: "flex-end", display: "flex", }}>
                                    </div>
                                </div>
                            )}
                        </div>)}
              
            </div>
        );
    }
}

export default Archive;