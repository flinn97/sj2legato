import React, { Component } from 'react';
import Checkedd from './components/checkbox';
import studentService from '../services/studentService';
import authService from '../services/auth.service';
import Addhomework from './popups/addhomework';
import Times from './popups/times';
class Homework extends Component {
    constructor(props) {
        
        //create state
        super(props);
        this.handlehomework= this.handlehomework.bind(this)
        this.cleartimeorchecks= this.cleartimeorchecks.bind(this)

        this.state = {
            homeworks: undefined
        };
    }
    async handlehomework(homework, myswitch){
        let homeworks =  studentService.updateAdddelhomework(homework, this.props.state.currentstudent.homeworks,  myswitch);
         await this.props.dispatch({[this.props.state.currentstudent.homeworks]:homeworks, addhomework:false, showhomework:false})
        authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {homeworks: homeworks,})
    }
    async cleartimeorchecks(time){
        let timeorchecks=time?  this.props.state.currentstudent.hwtime :this.props.state.currentstudent.syncedCheckboxes;
        for(const key in timeorchecks){
            timeorchecks[key]= time? "0": false;
        }
         await this.props.dispatch(time?{[this.props.state.currentstudent.hwtime]:timeorchecks} : {[this.props.state.currentstudent.syncedCheckboxes]:timeorchecks,});
        authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, time?{ hwtime: timeorchecks}:{syncedCheckboxes: timeorchecks,});
    }

    render() {
       

        return (
            <div className="bigcard" >
                                    {this.props.state.addtime && (<Times state={this.props.state} handlehomework={this.handlehomework} handleClose={this.props.dispatch.bind(this, {addtime:false, timeadded:"0", dayfortimepopup:"", })} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>)}
                                {this.props.state.addhomework && (<Addhomework state={this.props.state} homework={this.props.state.homework} handlehomework={this.handlehomework} handleClose={this.props.dispatch.bind(this, {addhomework:false, title:"", description:""})} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>)}
            <h3>Homework</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
            <button  className="btn  btn-block"  onClick={this.props.dispatch.bind(this, {addhomework:true, showhomework:false})} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Homework</button>
            <button  className="btn  btn-block"  onClick={this.props.dispatch.bind(this, {addtime:true,})} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Time</button>
            <button  className="btn  btn-block"  onClick={this.cleartimeorchecks.bind(this, false)} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>Clear Checks</button>
            <button  className="btn  btn-block"  onClick={this.cleartimeorchecks.bind(this, true)} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>Clear Time</button>
               <Checkedd size={this.props.state.styles.checkbox.size1} state={this.props.state} student={this.props.state.currentstudent} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
               {this.props.state.currentstudent?.homeworks.map((homework, index) => <div key={index}><div onClick={this.props.dispatch.bind(this, {addhomework:true, showhomework:true, homework:homework})}>{homework.title} </div><p onClick={this.handlehomework.bind(this, homework, "delhomework")}>delete</p></div>)}
            </div>
            </div>

               
        );
    }
}

export default Homework;