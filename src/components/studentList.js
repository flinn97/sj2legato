import React, { Component } from "react"
import "./components.css";
import edit from "./edit.png";
import trash from "./Trash1.png";
import Checkboxnum from "./practice.js";
import Progress from "./progress.js";
import ShowHomework from "../components/showHomework";
import Checkboxnum2 from "../components/practice2.js";
import Splashscreen  from "./splashscreen.js";

//import AuthService from "../services/auth.service";

//simply sets state and maps every student found in the current list of students to a button that is clickable.
export default class funcbotton extends Component {
    constructor(props) {
        super(props);
        this.showHomework = this.showHomework.bind(this);
        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);
        this.show = this.show.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);

        
        this.state = {
            
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            showHomework: false,
            zindex: "0",
            currenthw: undefined,
            c: false,
            tooSmall: false,
            width:"45%",
            width1:"55%",
            height:"70px",
            marginLeft: "10px",
            alignSelf:"",
            marginLeft1: '13px',
            marginTop:"5px",
            splashscreen:false,
        }

    };
    updateWindowDimensions() {
        if(parseInt(window.innerWidth) > 550){
            if(parseInt(window.innerWidth) <= 1200){
                this.setState({  
                    marginTop:"40px"
                });
               

            }
        }
        if(parseInt(window.innerWidth) <= 800)
        this.setState({ tooSmall: true, 
            width:"100%",
            width1:"100%",
            height:"50px",
            marginLeft: "0px",
            alignSelf:"center",
            marginLeft1:"0px",
        });
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions());
    }
    async profile(student) {
        await this.setState({splashscreen:true})
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(500)
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
    showHomework(homework, student) {
        this.setState({
            currents: student,
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
    async Splashscreen(){
        this.setState({
            splashscreen:false
        })
        
        

        

    }
    //                                    <Progress pic={'http://localhost8080' + student.profilepic} profile={true} goals={student.goals} main={student.mainGoal} /> "http://try.flinnapps.com/api/auth/"

    //                                    


    render() {
       
        return (<div className="big-student-container">
            {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
            <div>{this.state.showHomework && (<ShowHomework homework={this.state.currenthw} id={this.state.currenthw._id} hideHomework={this.hideHomeworkClose} homeworks={this.state.currents.homeworks} role="teacher" student={this.state.currents._id} fix={true} />)}</div>


            {
                this.props.students.map((student, index) =>

                    <div className="student-container" key={index} >
                    <div className="student-profile-pic">

                        <div className="centerized">
                            
                            {student.profilepic ? (
                                <div>
                                        <Progress pic={student.profilepic} profile={true} goals={student.mainGoals} />

                                    </div>
                            ) : (<div>
                                    <Progress pic={this.state.picture} profile={true}  goals={student.mainGoals} />
                                    </div>
                                    )}

                        </div>
                        <div className="centerized" >
                            {this.state.tooSmall?(
                                                                <h6 style={{ marginTop: "7px", color:"#696eb5", textDecoration:"underline" }} className="huv rowss1" onClick={this.profile.bind(this, student)}>{student.firstName} { student.lastName } </h6>

                            ):(                                <h6 style={{ marginTop: "7px" }} className="huv rowss1" onClick={this.profile.bind(this, student)}>{student.firstName} { student.lastName } </h6>
)}
                               
                        </div>
                    </div>
                    {this.state.tooSmall?(<img
                                    src={trash}
                                    alt="trash"
                                            className="edit3a huv"
                                    onClick={this.props.deleted.bind(this, student)}
                                            style={{ width: "20px", height: "20px",  opacity:".5", position: "absolute", alignSelf:"flex-end", marginRight:"5px", marginTop:"5px" }}

                                        />):(<div></div>)}

                                        {this.state.tooSmall?(
                                        <div style={{/*check boxes for the student.*/ display: "flex", marginTop:this.state.marginTop, alignSelf:this.state.alignSelf }}>

<div>{student ? (
    <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

        <div className="checkboxstuff1" style={{ marginLeft: this.state.marginLeft }}>

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
                                <div className=" centerized">{student.hwtime.mon} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Tues</div>
                                <div className=" centerized">{student.hwtime.tues} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Wed</div>
                                <div className=" centerized">{student.hwtime.wed} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Thurs</div>
                                <div className=" centerized">{student.hwtime.thur} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Fri</div>
                                <div className=" centerized">{student.hwtime.fri} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Sat</div>
                                <div className=" centerized">{student.hwtime.sat} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Sun</div>
                                <div className=" centerized">{student.hwtime.sun} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Total</div>
                                <div className=" centerized"> {parseInt(student.hwtime.mon) + parseInt(student.hwtime.tues) + parseInt(student.hwtime.wed) + parseInt(student.hwtime.thur) + parseInt(student.hwtime.fri) + parseInt(student.hwtime.sat) + parseInt(student.hwtime.sun)} M</div>
                            </div>

                        </div>

                    </div>



                ) : (<div>


                </div>)}

            </div>

        ) : (
                <div>
                    {student.edityesnoWeek ? (<div>
                        {!this.state.c ? (<p>Total Week Time: <b> {student.totalWeekTime.total}/ {student.min} Minutes </b> </p>) : (
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









</div>):(<div></div>)}
                    <div className="student-info">
                        <div className="homework" style={{alignSelf:this.state.alignSelf}}>
                            <div >
                                {this.state.tooSmall? (<h6 onClick={this.profile.bind(this, student)} style={{color:"#696eb5", }} > <u>Homework</u> ({student.homeworks.length})</h6>):(<h4><u>Homework</u></h4>)}
                                
                                
                            </div>
                                <div className="edit0a checkboxstuff3" >
                                
                                    <div onClick={this.show} style={{marginBottom: "25px" }}>
                                    {this.state.tooSmall? (<div></div>):( <img
                                    src={trash}
                                    alt="trash"
                                            className="edit3a huv"
                                    onClick={this.props.deleted.bind(this, student)}
                                            style={{ width: "17px", height: "17px", marginBottom:"7px", opacity:".5", }}

                                        />)}

                               
                                        </div>

                                
                            </div>
                            
                        </div>
                        <div style={{height: this.state.height, alignSelf:this.state.alignSelf}}>
                            {student.homeworks.length > 0?(
                                <div className= "homeworkScroll"> {
                                    
                                    student.homeworks.map((homework, index) =>

                                    

                                        <div key={index}>
                                            
                                            <div style={{marginLeft:this.state.marginLeft1, width:this.state.width, alignSelf:this.state.alignSelf,}}>
                                                {this.state.tooSmall?(
                                                    <div className="rowss huv" style={{ width: this.state.width1, color:"#696eb5"}} onClick={this.showHomework.bind(this, homework, student)}></div>
                                                ):(

<div className="rowss huv" style={{ width: this.state.width1,}} onClick={this.showHomework.bind(this, homework, student)}>{homework.title}</div>
                                                )}
                                                
                                                </div>

                                        </div>)
                                
                                

                                }</div>
                            ):(
                        
                        <div>No homework assigned yet</div>)}
                       
                            </div>


                            {this.state.tooSmall?(<div></div>):(

<div style={{/*check boxes for the student.*/ display: "flex", marginTop:this.state.marginTop, alignSelf:this.state.alignSelf }}>

<div>{student ? (
    <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

        <div className="checkboxstuff1" style={{ marginLeft: this.state.marginLeft }}>

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
                                <div className=" centerized">{student.hwtime.mon} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Tues</div>
                                <div className=" centerized">{student.hwtime.tues} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Wed</div>
                                <div className=" centerized">{student.hwtime.wed} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Thurs</div>
                                <div className=" centerized">{student.hwtime.thur} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Fri</div>
                                <div className=" centerized">{student.hwtime.fri} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Sat</div>
                                <div className=" centerized">{student.hwtime.sat} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Sun</div>
                                <div className=" centerized">{student.hwtime.sun} M</div>
                            </div>
                            <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                <div className=" centerized">Total</div>
                                <div className=" centerized"> {parseInt(student.hwtime.mon) + parseInt(student.hwtime.tues) + parseInt(student.hwtime.wed) + parseInt(student.hwtime.thur) + parseInt(student.hwtime.fri) + parseInt(student.hwtime.sat) + parseInt(student.hwtime.sun)} M</div>
                            </div>

                        </div>

                    </div>



                ) : (<div>


                </div>)}

            </div>

        ) : (
                <div>
                    {student.edityesnoWeek ? (<div>
                        {!this.state.c ? (<p>Total Week Time: <b> {student.totalWeekTime.total}/{student.min} Minutes </b> </p>) : (
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
                            )}
                            
                        
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