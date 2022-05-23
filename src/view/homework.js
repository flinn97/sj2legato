import React, { Component } from 'react';
import Checkedd from './components/checkbox';
import studentService from '../services/studentService';
import authService from '../services/auth.service';
class Homework extends Component {
    constructor(props) {
        //create state
        super(props);
        this.handlehomework= this.handlehomework.bind(this)
        this.state = {
            homeworks: undefined
        };
    }
    async handlehomework(homework, myswitch){
        
        let myhomework = homework? homework :{
            id: Date.now(),
            title: "my homework",
            description: "my des",
            hwchecked: {
                mon: false,
                tues: false,
                wed: false,
                thur: false,
                fri: false,
                sat: false,
                sun: false,
            },
            hwtype: "assignment",
            date: "",
            research: "",
            daily: "5",
            hwsynccheck: true,
            hwlink: "link",
            hwdmin: "20",
            hwtimesync: true,
            hwtime: {
                mon: "0",
                tues: "0",
                wed: "0",
                thur: "0",
                fri: "0",
                sat: "0",
                sun: "0",
            },
        }
        let homeworks =  studentService.updateAdddelhomework(myhomework, this.props.state.currentstudent.homeworks,  myswitch)
        ;
         await this.props.dispatch({[this.props.state.currentstudent.homeworks]:homeworks, })
        authService.changeData("student", this.props.state.currentstudent._id, this.props.state.currentuser._id, {homeworks: homeworks})
    }

    render() {
       

        return (
            <div className="bigcard" >
            <h3>Homework</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
            <button  className="btn  btn-block"  onClick={this.handlehomework.bind(this, "", "addhomework")} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Homework</button>
               <Checkedd size={this.props.state.styles.checkbox.size1} state={this.props.state} student={this.props.state.currentstudent} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
               {this.props.state.currentstudent?.homeworks.map((homework, index) => <div key={index}><div>{homework.title} </div><p onClick={this.handlehomework.bind(this, homework, "delhomework")}>delete</p></div>)}
            </div>
            </div>

               
        );
    }
}

export default Homework;