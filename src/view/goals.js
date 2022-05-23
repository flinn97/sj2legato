import React, { Component } from 'react';
import leaf from "./leaf.png"
import Checkedd2 from './components/checkbox2';
import authService from '../services/auth.service';
import studentService from '../services/studentService';
import Addgoal from './popups/addGoal.js';
import Archive from './archive';
class Goals extends Component {
    constructor(props) {
        //create state
        super(props);
        this.AddUpdateDeleteArchiveGoal=this.AddUpdateDeleteArchiveGoal.bind(this);
        this.state = {
            
        };
    }
    /**
     * add goals.
     * @param {*} main 
     * @param {*} maingoal 
     */
    async AddUpdateDeleteArchiveGoal(goal, maingoal, myswitch){
        let currentmains = await studentService.updateAddGoals(goal, this.props.state.currentstudent.mainGoals, maingoal, myswitch, this.props.state.currentstudent.archive)
        this.props.dispatch({[this.props.state.currentstudent.mainGoals]:currentmains, updatecircle: true, [this.props.state.currentstudent.mainGoals]: currentmains.archive?currentmains.archive:this.props.state.currentstudent.archive, goals:false, showgoal:false, title:"", description:""})
        let myob= myswitch=== "archivegoal" ||myswitch=== "delarchivegoal"? {mainGoals: currentmains.currentmains, archive: currentmains.archive,}: {mainGoals: currentmains,}
        authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, myob, )
    }


    render() {


        return (
            <div className="smallcardleft" style={{ marginTop: this.props.state.styles.margins.margin1 }}>
                {this.props.state.goals && (<Addgoal state={this.props.state} AddUpdateDeleteArchiveGoal={this.AddUpdateDeleteArchiveGoal} handleClose={this.props.dispatch.bind(this, {goals:false, showgoal:false, title:"", description:""})} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>)}
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}><h3 onClick={this.props.dispatch.bind(this, {archive:false})}>Goals</h3><div onClick={this.props.dispatch.bind(this, {archive:true})}>completed goals</div><button  className="btn  btn-block"  onClick={this.props.dispatch.bind(this, {goals:true, main: true})} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "100px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Goal</button></div>
                {this.props.state.archive?(<Archive AddUpdateDeleteArchiveGoal ={this.AddUpdateDeleteArchiveGoal} state={this.props.state} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>):(
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {this.props.state.currentstudent.mainGoals.map((main, index) =>
                        <div key={index} >
                            <div>
                                <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", }}>
                                    <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                                        <Checkedd2 myswitch="updatemain" size= {this.props.state.styles.checkbox.size1} maingoal={main} state={this.props.state} main={true} AddUpdateDeleteArchiveGoal={this.AddUpdateDeleteArchiveGoal}/>
                                        <h4 style={{ marginBottom: "10px" }} className="huv rowss" ><span onClick={this.props.dispatch.bind(this, {goals:true, showgoal:true, main: true, maingoal:main,  })}>{main.mainGoal.title} </span></h4>
                                    </div>
                                    <div>
                                        <div onClick={this.AddUpdateDeleteArchiveGoal.bind(this, false, main, "archivegoal")}>archive</div>
                                        <div onClick={this.AddUpdateDeleteArchiveGoal.bind(this, false, main, "delmain")} >delete</div>
                                    </div>
                                </div>
                            </div>
                            {main.mainGoal.goals.map((goal, index) =>
                                <div key={index} style={{ marginLeft: "30px" }} >
                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                            <Checkedd2 myswitch="updategoal" size= {this.props.state.styles.checkbox.size1} goal={goal} maingoal={main} state={this.props.state} main={false} AddUpdateDeleteArchiveGoal={this.AddUpdateDeleteArchiveGoal}/>
                                        <span  onClick={this.props.dispatch.bind(this, {goals:true, main: false, maingoal: main, goal:goal, showgoal:true})}>{goal.title}</span>
                                    </div>
                                    <div style={{ width: "25%", flexDirection: "row", justifyContent: "flex-end", display: "flex", }}>
                                        <div onClick={this.AddUpdateDeleteArchiveGoal.bind(this, goal, main, "delgoal")}>delete</div>
                                    </div>
                                </div>
                            )}
                            <div className="btn  btn-block" style={{ margin: "0 auto", marginTop: "10px", display: 'flex', flexDirection: 'row', justifyContent: 'center' }} value="submit" onClick={this.props.dispatch.bind(this, {goals:true, main: false, maingoal: main})} >
                                <span className="checkboxstuff1" style={{ width: "250" }}><img src={leaf} style={{ width: "20px", height: "20px" }} /><p>+</p><p className="rowss huv">Supporting Goal</p></span></div>
                        </div>)}
                </div>
                )}
            </div>
        );
    }
}

export default Goals;