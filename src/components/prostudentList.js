import React, { Component } from "react"
import "./components.css";
import edit from "./edit.png";
import trash from "./trash.png";
import Percent from "./percent.js";
//import { Dropdown } from "bootstrap";
import Short from "./short.js";
import Dropdown from "./dropdown.js";
//import AuthService from "../services/auth.service";

//simply sets state and maps every student found in the current list of students to a button that is clickable.
export default class proStudent extends Component {
    constructor(props) {
        super(props);
        this.dropdown = this.dropdown.bind(this);
        this.backup = this.backup.bind(this);

        
        this.state = {
            dropdown: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            
            
        }

    };
    dropdown() {
        this.setState({
            dropdown: true,
        })
    }
    backup() {
        this.setState({
            dropdown: false,
        })
    }
 
    profile(student) {
        
        this.props.history.push({
            pathname: "/student",
            state: { detail: student }
        });
    
    }
    

    render() {
       
        return (
            <div style={{ height: "100%", width: "100%" }} >
            <table  style={{ width: "100%" }} >
            <tr  style={{height:"50px"}}>
                <th style={{ height: "50px", width:"120px" }}>
                            <div style={{ opacity: "0", width: "60px"}} >
                        <img
                            src={this.state.picture}
                            alt="profile-img"
                            className="proStudpicture"

                        />
                    </div>

                    
                </th>
                <th style={{ height: "50px" }}>
                    <div style={{ marginTop: "10px" }}>
                        <p> Name: </p>

                        </div>
                    </th>
                <th style={{ width: "195px", height: "50px" }}>
                    <div style={{  marginTop: "10px", width:"100%" }}>
                    <p> Days Practiced</p>
                        </div>
                    </th>
                    <th>
                    <div style={{ marginTop: "10px" }}>
                    <p> Goal Progress </p>
                        </div>
                        </th>
                <th style={{ height: "50px" }}>
                    <div style= {{ opacity:"0" }} >
                        <img
                            src={this.state.picture}
                            alt="profile-img"
                            className="proStudpicture"

                        />
                        </div>
                        </th>
                    </tr>
                </table>
                <div style={{ height: "90%", width: "100%" }} className="homeworkScroll">

                                <table  style={{ width: "100%" }} >
        {
            this.props.students.map((student, index) =>

                <tr className ="prorow " key={index} >
                    <td style={{ height: "35px", }}>
                        <div className="proStudpic" style={{ width: "100%", marginTop:"8px"}}>

                        <div className="centerized">
                            {student.profilepic ? (
                                <img
                                    src={'http://localhost:8080' + student.profilepic}
                                    alt="profile-img"
                                        className="proStudpicture cropped1"

                                />
                            ) : (
                                    <img
                                        src={this.state.picture}
                                        alt="profile-img"
                                            className="proStudpicture cropped1"

                                    />
                                    )}

                            </div>
                        </div>
                        </td>
                    <td style={{ width: "150px", height: "35px",  }}>
                        <div className="proStud2" style={{ width: "100%", marginTop: "25px" }}>

                            {(student.firstName.length + student.lastName.length) > 17 ? (<p className="huv rowss1" onClick={this.profile.bind(this, student)}><Short word1={student.firstName} word2={student.lastName} wordtype="pro" /></p>) :
                                (<p className="huv rowss1" onClick={this.profile.bind(this, student)}>{student.firstName} {student.lastName} </p>)}

                        </div>
                        
                    </td>
                    <td style={{ width: "150px", height: "35px",  }}>
                        <div style={{marginLeft:"70px", marginTop:"25px"}}>
                        <p> 0</p>
                        </div>
                    </td>
                    <td >
                        <div style={{ marginLeft: "100px", marginTop: "25px", height: "35px" }}>
 
                            {student.mainGoal ? (<Percent goals={student.goals} main={student.mainGoal} />) : (<div>0%</div>)}
                        </div>
                    </td>
                    <td style={{ height: "35px", }}>
                        <div>
                            <div style={{ marginTop: "25px", float: "right", marginRight: "20px" }} onClick={this.props.del.bind(this, student)} className="rowss1 huv">Delete Student</div>
                        </div>
                    </td>
                   </tr>

                )
                    }

                    </table>
                    </div>
                </div>
        )
                   

    }
}
//hubz