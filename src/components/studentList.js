import React, { Component } from "react"
import "./components.css";
import edit from "./edit.png";
import trash from "./Trash1.png";
import Checkboxnum from "./practice.js";
import Progress from "./progress.js";
import ShowHomework from "../components/showHomework";
import Checkboxnum2 from "../components/practice2.js";

//import AuthService from "../services/auth.service";

//simply sets state and maps every student found in the current list of students to a button that is clickable.
export default class funcbotton extends Component {
    constructor(props) {
        super(props);
        this.showHomework = this.showHomework.bind(this);
        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);
        this.show = this.show.bind(this);

        this.state = {
            
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            showHomework: false,
            zindex: "0",
            currenthw: undefined,
            c: false,
            
        }

    };
   
 
    profile(student) {
        this.props.history.push({
            pathname: "/student",
            state: { detail: student }
        });
    
    }
    hideHomeworkClose() {
        this.setState({
            showHomework: false,
            zindex: "0"

        })
    }
    showHomework(homework) {
        this.setState({
            currenthw: homework,
            showHomework: true,
            zindex:"-1"
        })
    }
    show() {
        this.setState({
            zindex: "-1"
        })
    }
    hide() {
        this.setState({
            zindex: "0"
        })
    }
    //                                    <Progress pic={'http://localhost8080' + student.profilepic} profile={true} goals={student.goals} main={student.mainGoal} />

    //                                    


    render() {
       
        return (<div className="big-student-container">

            {
                this.props.students.map((student, index) =>

                    <div className="student-container" key={index} >
                    <div className="student-profile-pic">

                        <div className="centerized">
                            
                            {student.profilepic ? (
                                <div>
                                    <Progress pic={'http://localhost:8080' + student.profilepic} profile={true} goals={student.goals} main={student.mainGoal} />

                                    </div>
                            ) : (<div>
                                    <Progress pic={this.state.picture} profile={true} goals={student.goals} main={student.mainGoal} />
                                    </div>
                                    )}

                        </div>
                        <div className="centerized">
                                <h6 style={{ marginTop: "7px" }} className="huv rowss1" onClick={this.profile.bind(this, student)}>{student.firstName} { student.lastName } </h6>
                               
                        </div>
                    </div>
                    <div className="student-info">
                        <div className="homework">
                            <div >
                                <h4><u>Homework</u></h4>
                                
                            </div>
                                <div className="edit0a checkboxstuff3" >
                                
                                    <div onClick={this.show} style={{marginBottom: "25px" }}>
                                <img
                                    src={trash}
                                    alt="trash"
                                            className="edit3a huv"
                                    onClick={this.props.deleted.bind(this, student)}
                                            style={{ width: "17px", height: "17px", marginBottom:"7px", opacity:".5" }}

                                        />
                                        </div>

                                
                            </div>
                            
                        </div>
                        <div style={{height:"70px"}}>
                            {student.homeworks.length > 0?(
                                <div className= "homeworkScroll"> {
                                    
                                    student.homeworks.map((homework, index) =>

                                    

                                        <div key={index}>
                                            <div style={{marginLeft:"13px", width:"45%"}}>
                                                <div className="rowss huv" style={{ width: "55%" }} onClick={this.showHomework.bind(this, homework)}>{homework.title}</div>
                                            <div>{this.state.showHomework && (<ShowHomework homework={this.state.currenthw} hideHomework={this.hideHomeworkClose} />)}</div>
                                                </div>

                                        </div>)
                                
                                

                                }</div>
                            ):(
                        
                        <div>No homework assigned yet</div>)}
                       
                            </div>


                            
                            <div style={{/*check boxes for the student.*/ display: "flex", }}>

                                <div>{student ? (
                                    <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

                                        <div className="checkboxstuff1" style={{ marginLeft: "10px" }}>

                                            {student.syncedCheckbox ? (<Checkboxnum2 checkboxes={7} prac={student.checked} synced={true} role={"teacher"} sync={student.syncedCheckboxes} times={student.hwtime} synctimes={student.timeday} />
                                            ) : (

                                                    <Checkboxnum checkboxes={student.checkboxes} prac={student.checked} role={"teacher"} times={student.hwtime} synctimes={student.timeday} />
                                                )}
                                        </div>

                                        {student.timeday ? (
                                            <div>
                                                {!student.syncedCheckbox && student.checkboxes==="0" ? (
                                                    <div>
                                                        <div className="checkboxstuff1 centerized">
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Mon</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Tues</div>
                                                                <div className=" centerized">60 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Wed</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Thurs</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Fri</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Sat</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Sun</div>
                                                                <div className=" centerized">0 M</div>
                                                            </div>
                                                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                <div className=" centerized">Total</div>
                                                                <div className=" centerized"> 120 M</div>
                                                            </div>

                                                        </div>

                                                    </div>



                                                ) : (<div>


                                                </div>)}

                                            </div>

                                        ) : (
                                                <div>
                                                    {student.edityesnoWeek ? (<div>
                                                        {!this.state.c ? (<p>Total Time Practiced this Week: <b> / {student.min} Minutes </b> </p>) : (
                                                            <div>
                                                            </div>

                                                        )
                                                        }
                                                    </div>



                                                    ) : (<div>


                                                    </div>)}




                                                </div>)}

                                        

                                    </div>
                                ) : (<div></div>)}


                                </div>




                                
                            



                        </div>
                        
                    </div>


                             
                    </div>

                )
            }

    </div>
        )
                   

    }
}
//<img
//src = { edit }
//alt = "edut"
//className = "edit3a huv"
//onClick = { this.profile.bind(this, student) }

  //  />