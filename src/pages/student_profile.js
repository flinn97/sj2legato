import React, { Component } from "react";
import background from "./music.jpg";
import Pic from "../components/diapicture";
import AuthService from "../services/auth.service";
import "./pages.css"
import edit from "./edit.png";
import Editing from "../components/editing";
import EditBack from "../components/editBackground";
import Checkboxnum from "../components/practice.js";
import axios from "axios";
//import Goals from "./goals";
//import Goals from "./goals1";
import Goals from "./goals2";
import Timess from "../components/timess.js"

import ShowHomework from "../components/showHomework"
import Goal from "../components/showgoal.js";
import Checkboxnum3 from "../components/practice3.js"

import Checkboxnum2 from "../components/practice2.js"
import authService from "../services/auth.service";
export default class Student_profile extends Component {
    constructor(props) {
        super(props);
        this.openPic = this.openPic.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);
        this.editMe = this.editMe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editBackground = this.editBackground.bind(this);
        this.handleBackClose = this.handleBackClose.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.getCurrentUserinRealTime = this.getCurrentUserinRealTime.bind(this);
        this.practice = this.practice.bind(this);
        this.showHomework = this.showHomework.bind(this);
        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);
        this.showGoal = this.showGoal.bind(this);
        this.handlegoalClose = this.handlegoalClose.bind(this);
        this.handletimesClose = this.handletimesClose.bind(this);
        this.changeweek = this.changeweek.bind(this);

        this.handletimesOpen = this.handletimesOpen.bind(this);

        
        this.changetimes = this.changetimes.bind(this);

        this.state = {
            diaPic: false,
            edit: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            newPic: "",
            currentUser: AuthService.getCurrentUser(),
            realtimeusr: undefined,
            realtimeusr0: undefined,
            back: background,
            about: "this is how you learn",
            first: "",
            last: "",
            email: "",
            phone: "update phone info ->",
            edittheBackground: false,
            background: background,
            currentStudent: undefined,
            day: "",
            time: "",
            checkboxes: "",
            homework: "",
            practice: 0,
            daysPracticed: 0,
            totalDays: 0,
            homeworks: "",
            currentHomework: undefined,
            showGoal: false,
            newcheck: false,
            changetime: "",
            minedit: "",
            timeedit: "",
            timesedit: false,
            weeklyTimeEdit: "",
        }

    };
    showGoal(goal) {
        this.setState({
            showGoal: true,
            currentgoal: goal,
        });

    }
    handlegoalClose() {
        this.setState({
            showGoal: false,
        });
    }

    practice(sign, sync, day) {
        if (sync) {
            console.log("here");
            let x = this.state.practice;
            let xx = this.state.daysPracticed;
            if (sign) {
                x++;
                xx++;
                this.setState({ practice: x, daysPracticed: xx, });

            }
            else {
                x--;
                xx--;
                this.setState({ practice: x, daysPracticed: xx, });

            }
            AuthService.syncedchecking(this.props.props.props.currentPage._id, day, sign, this.state.practice, this.state.daysPracticed )
        }
        else {
            let x = this.state.practice;
            let xx = this.state.daysPracticed;
            if (sign) {
                x++;
                xx++;
                this.setState({ practice: x, daysPracticed: xx, });

            }
            else {
                x--;
                xx--;
                this.setState({ practice: x, daysPracticed: xx, });

            }
            AuthService.checked(this.props.props.props.currentPage._id, this.state.practice,);
            AuthService.daysPracticed(this.props.props.props.currentPage._id, this.state.daysPracticed,);
        }
    }


    getCurrentUserinRealTime(currentStudent) {
        

        console.log(currentStudent._id);
            let id = currentStudent._id;
            const API_URL = "http://localhost:8080/api/auth/";
        console.log(id);

        console.log(this.props);

            axios.post(API_URL + "getstudent", {
                id,

            }).then(response => {
                console.log("I ran this");
                this.setState({ realtimeusr: response.data.student });

                if (this.state.realtimeusr.profilepic) {
                    const porfilePic = 'http://localhost:8080' + this.state.realtimeusr.profilepic;
                    this.setState({ picture: porfilePic });
                }
                else {
                    const porfilePic = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
                    this.setState({ picture: porfilePic });
                }
                if (this.state.realtimeusr.backgroundpic) {
                    const background = 'http://localhost:8080' + this.state.realtimeusr.backgroundpic;
                    this.setState({ background: background });
                }
                else {
                    const background = this.state.back;

                    this.setState({ background: background });
                }

                var ar = "";
                let ampm = false;
                for (let i = 0, j = i + 1; i < this.state.realtimeusr.scheduling.length; i++, j++) {

                    if (i === 0) {


                        if (this.state.realtimeusr.scheduling.length === 4) {

                            if (this.state.realtimeusr.scheduling[0] === "1") {
                                
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "10";
                                    ampm = true;

                                }
                                if (this.state.realtimeusr.scheduling[1] === "1") {
                                    ar = ar + "11";
                                    ampm = true;
                                }
                                if (this.state.realtimeusr.scheduling[1] === "2") {
                                    ar = ar + "12";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "3") {
                                    ar = ar + "1";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "4") {
                                    ar = ar + "2";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "5") {
                                    ar = ar + "3";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "6") {
                                    ar = ar + "4";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "7") {
                                    ar = ar + "5";

                                    console.log(ar);

                                }
                                if (this.state.realtimeusr.scheduling[1] === "8") {
                                    ar = ar + "6";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "9") {
                                    ar = ar + "7";
                                }

                            } else if (this.state.realtimeusr.scheduling[0] === "2") {
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "8";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "1") {
                                    ar = ar + "9";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "2") {
                                    ar = ar + "10";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "3") {
                                    ar = ar + "11";
                                }
                            }
                            else if (this.state.realtimeusr.scheduling[0] === "0") {
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "12";
                                    ampm = true;
                                }
                            }
                        }
                        else {
                            ar = ar + this.state.realtimeusr.scheduling[i];

                        }
                    }



                    else {
                        if (this.state.realtimeusr.scheduling.length === 3) {
                            if (i === 1) {
                                ar = ar + ":";

                            }
                            ar = ar + this.state.realtimeusr.scheduling[i];

                            if (i === 2) {
                                ar = ar + " AM";
                            }


                        }
                        else {
                            if (this.state.realtimeusr.scheduling[j]) {
                                if (i === 1) {
                                    ar = ar + ":";
                                }
                                ar = ar + this.state.realtimeusr.scheduling[j];
                                if (i === 2) {
                                    if (ampm) {
                                        ar = ar + " AM";
                                    }
                                    else { ar = ar + " PM"; }

                                }

                            }
                        }


                    }


                }




                let prac = this.state.realtimeusr.checked;
                let days = this.state.realtimeusr.daysPracticed;
                let totaldays = this.state.realtimeusr.totalDays;
                if (this.state.realtimeusr.checked === undefined) {
                    prac = 0;
                }
                if (this.state.realtimeusr.daysPracticed === undefined) {
                    days = 0;
                }
                if (this.state.realtimeusr.totalDays === undefined) {
                    totaldays = 0;
                }

                this.setState({
                    about: this.state.realtimeusr.about,
                    first: this.state.realtimeusr.firstName,
                    last: this.state.realtimeusr.lastName,
                    email: this.state.realtimeusr.email,
                    phone: this.state.realtimeusr.phone,
                    day: this.state.realtimeusr.day,
                    time: ar,
                    checkboxes: this.state.realtimeusr.checkboxes,
                    homework: this.state.realtimeusr.homework,
                    homeworks: this.state.realtimeusr.homeworks,
                    daysPracticed: days,
                    totalDays: totaldays,
                    practice: prac,
                })
                this.props.props.currentUserChange(this.state.realtimeusr.firstName, this.props.props.props.currentPage._id);

            });
        
    }
     async componentDidMount() {
         

         await this.setState({
             currentStudent: this.props.props.props.currentPage,
         })

         console.log(this.props.props.props.currentPage);


        
                
         await this.getCurrentUserinRealTime(this.props.props.props.currentPage);

        

    }

    async componentDidUpdate(prep, pres) {
        console.log(prep);
        console.log(this.props);
        if (prep.props.props.currentPage._id !== this.props.props.props.currentPage._id) {
            await this.setState({
                currentStudent: this.props.props.props.currentPage,
                picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
                newcheck: !this.state.newcheck,
            })
            if (this.props.props.props.currentPage.profilepic)
                await this.setState({
                    picture: this.props.props.props.currentPage.profilepic,
                })
            await this.getCurrentUserinRealTime(this.props.props.props.currentPage);

        }
    }

    handleBackClose() {
        this.setState({
            edittheBackground: false
        });
    }
    editBackground() {
        this.setState({
            edittheBackground: true,
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    editMe() {
        this.setState({
            edit: true
        })
    }

    handleEditClose() {
        this.setState({
            edit: false
        });
    };

    handleClose() {
        this.setState({
            diaPic: false
        });
    };

    changePic(pic) {
        this.setState({
            diaPic: pic.toString()
        });
    };

    openPic = (event) => {
        this.setState(
            {
                diaPic: true
            });

    };
    handleSub(e) {
        e.preventDefault();
       
        
        AuthService.changeStudentinfo(
            this.props.props.props.currentPage._id,
            this.state.currentUser.id,
            this.state.first,
            this.state.last,
            this.state.about,
            this.state.email,
            this.state.phone,
            this.props.props.props.currentPage.scheduling,
            this.state.checkboxes,
            this.state.day
        ).then(response => {
            console.log(response.data.changed);
            this.setState({
                about: response.data.changed.about,
                first: response.data.changed.firstName,
                last: response.data.changed.lastName,
                email: response.data.changed.email,
                phone: response.data.changed.phone,
                edit: false,
                realtimeusr0: response.data.changed,
                
            });

        })
        
            .catch(e => {
                console.log(e);
            });
       window.location.reload();


        

    }
    showHomework(homework) {
        this.setState({
            showHomework: true,
            currentHomework: homework,
        })



    }
    hideHomeworkClose() {
        this.setState({
            showHomework: false
        });
    };
    handletimesOpen() {
        this.setState({
            timesedit: true
        });
    };
    handletimesClose() {
        this.setState({
            timesedit: false
        });
    };
    changetimes() {
        authService.changetimes(this.props.props.props.currentPage._id, this.state.timeedit, this.state.minedit);
        this.setState({
            timesedit: false
        });
        window.location.reload();
    }

    changeweek() {

        authService.changeweek(this.props.props.props.currentPage._id, this.state.weeklyTimeEdit);
        this.setState({
            timesedit: false
        });
        window.location.reload();
    }
    //render student information.  
    render() {
        
        return (


            <div className="z2 fill1 example">
                <div className="columbized card-container0 " style={{marginTop:"25px"}}>
                    {this.state.diaPic && (<Pic handleClose={this.handleClose} realusr={this.state.realtimeusr} />)}

                    {this.state.timesedit && (<Timess handleClose={this.handletimesClose} handleChange={this.handleChange} change={this.changetimes} changeweek={this.changeweek} weekly={this.state.timeday }/>)}

                {this.state.edittheBackground && (<EditBack handleBackClose={this.handleBackClose} realusr={this.state.realtimeusr} />)}

                {this.state.edit && (<Editing handleSub={this.handleSub} handleEditClose={this.handleEditClose} handleChange={this.handleChange} currentUser={this.state.currentUser.role}/>)}
                    {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} student={this.props.props.props.currentPage._id} role="student"/>)}
                    {this.state.showGoal && (<Goal Goal={this.state.currentgoal} hideGoal={this.handlegoalClose} />)}


                    
                    <div className="front1 centerized" style={{ position: "relative" }}>



                            <div className="overlap">

                                <img
                                    src={this.state.background}
                                    alt="music"
                                    className="back-screen huv cropped1"
                                    onClick={this.editBackground}
                                />
                            </div>


                        <div className="overlapsaab" >

                                <img
                                src={this.state.picture}
                                alt="profile-img"
                                className="profile-img-cardabc huv cropped1 centerized"
                                onClick={this.openPic}
                                style={{position:"relative"}}
                                />

                            </div>
                        </div>


                     
                
                    <div className="makeitwork0abc">

                    <div className="makeitworkagain">
                        <h2>{this.state.first} {this.state.last}</h2>

                    </div>
                    <div className="makeitworkagain">
                        {this.state.about}

                    </div>
                    <div>
                        {this.state.email}
                    </div>
                    <div>
                        {this.state.phone}
                    </div>
                    <div>
                        appointment time and day: {this.state.time} {this.state.day}
                        </div>
                        <div onClick={this.editMe} className="huv rowss1">
                                <p className="huv rowss3">Edit Profile</p>


                            </div>
                    

                </div>
                

               
                </div>
                <div className="columbized2a fill1" style={{marginTop:"25px"}}>
                <div className="proStud5 ">
                    <div className=" card-container5ab">
                        {this.state.realtimeusr ? (<div className="fill1">{
                                this.state.realtimeusr.mainGoal ?
                                (<div className="fill1">
                                        {this.state.realtimeusr ? (<Goals goalss={false} role={"student"} main={this.state.realtimeusr.mainGoal} goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} daysPracticed={this.props.props.props.currentPage.daysPracticed} totalDays={this.props.props.props.currentPage.totalDays} />
                                    ) : (<div> </div>
                                        )}
                                    {this.state.realtimeusr.goals[100] ? (<Goals goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} />
                                    ) : (<div> </div>
                                        )}</div>
                                    ) : (<div className="fill2 centerized"><h4 style={{ borderBottom: "1px solid gray", color: "gray", height: "40px", marginTop:"20%"}} >You have no goals assigned yet </h4></div>)
                            }</div>) : (<div className="fill2 centerized"><h4 style={{ borderBottom: "1px solid gray", color: "gray", height: "40px", marginTop:"20%" }} >You have no goals assigned yet </h4> </div>)}
                    

                        </div>

                        <div className=" card-container5abc">
                            {this.state.realtimeusr ? (<div className="fill1">{
                                this.state.realtimeusr.mainGoal ?
                                    (<div className="fill1">
                                        {this.state.realtimeusr ? (<Goals goalss={true} role={"student"} main={this.state.realtimeusr.mainGoal} goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} daysPracticed={this.props.props.props.currentPage.daysPracticed} totalDays={this.props.props.props.currentPage.totalDays} />
                                        ) : (<div> </div>
                                            )}
                                        {this.state.realtimeusr.goals[100] ? (<Goals goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} />
                                        ) : (<div> </div>
                                            )}</div>
                                    ) : (<div className="fill2 centerized"><h4 style={{ borderBottom: "1px solid gray", color: "gray", height: "40px", marginTop: "20%" }} >You have no goals assigned yet </h4></div>)
                            }</div>) : (<div className="fill2 centerized"><h4 style={{ borderBottom: "1px solid gray", color: "gray", height: "40px", marginTop: "20%" }} >You have no goals assigned yet </h4> </div>)}


                        </div>

            
                        <div className="card-container5ab ">
                                    <div className="fill1" >
                                <div className="fill2 centerized" style={{ marginBottom: "5px" }}><h2>Homework</h2></div>
                                <div className=" fill2">
                                    {this.state.currentStudent ? (<div className="checkboxstuff centerized">
                                        {this.state.currentStudent.syncedCheckbox ? (<Checkboxnum2 checkboxes={7} prac={this.state.currentStudent.checked} synced={true} practice={this.practice} sync={this.state.currentStudent.syncedCheckboxes} times={this.state.currentStudent.hwtime}/>
                                        ) : (<div className="checkboxstuff centerized">
                                            {
                                                this.state.newcheck ? (<div>{this.state.realtimeusr ? (<div className="checkboxstuff centerized" style={{ marginBottom: "15px" }}>
                                                        <Checkboxnum checkboxes={this.state.realtimeusr.checkboxes} prac={this.state.realtimeusr.checked} practice={this.practice} times={this.state.currentStudent.hwtime}/>
                                                </div>) : (<div></div>)}</div>) : (<div>{this.state.realtimeusr ? (<div className="checkboxstuff centerized" style={{ marginBottom: "15px" }}>
                                                            <Checkboxnum3 checkboxes={this.state.realtimeusr.checkboxes} prac={this.state.realtimeusr.checked} practice={this.practice} times={this.state.currentStudent.hwtime}/>
                                                </div>) : (<div></div>)}</div>)
                                            }

                                        </div>)



                                        }


                                    </div>) : (<div></div>)}
                                    <div className="fill2 centerized">
                                        <div style={{ width: "125px", height: "40px", marginTop: "5px", marginBottom: "7px" }} ><button style={{ height: "30px", background: "#696eb5", color: "#F0F2EF"  }} className="btn btn-block centerized" onClick={this.handletimesOpen}>Log Time</button></div>
                                        </div>

                                    <div className=" fill2">
                                        <table className="fill2" >
                                            <tr className="fill2">
                                                
                                                <div className="centerized fill2" style={{ height: "200px", marginBottom: "15px" }}>
                                                    <td style={{ width: "75%", height: "100%", border: "2px solid green", borderRadius:"3%" }}>
                                                        <div style={{ width: "100%", height: "98%",  }}>
                                                            {this.state.homeworks[0] ? (<div className="homeworkScroll1" style={{ width: "100%"}} >
                                                        {
                                                            this.state.homeworks.map((homework, index) =>

                                                                <div className="checkboxstuff1 centerized rowss" key={index} >
                                                                    <div className="huv checkboxstuff2 centerized" onClick={this.showHomework.bind(this, homework)}>{homework.title}</div>

                                                                    
                                                                </div>

                                                            )
                                                }

                                                    </div>) : (
                                                                <div>You have no Homework assigned yet.</div>)}
                                                    </div>
                                                            </td>
                                                        
                                                  
                                                </div>
                                            </tr>
                                            </table>
                                    </div>
                                    {this.state.currentStudent ? (<div>
                                        {this.state.currentStudent.timeday ? (<div>


                                        </div>
                                        ) : (
                                                <div>
                                                    {this.state.currentStudent.totalWeekTime ? (<h3>Total Time Practiced this Week: <b>{this.state.currentStudent.totalWeekTime.total} </b> </h3>) : (<div>


                                                    </div>)}


                                                </div>)}
                                    </div>) : (<div></div>)}

                                    
                                   

                                   
                                    
                                            

                                        </div>
                                       





                                </div>
                    </div>
                    
                        
                            

                    
                    


                </div>
                    <div className="proStud5a ">
                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized fill2" style={{ height: "200px" }}>
                                <div className="fill2" style={{ alignSelf: "flex-start" }}>
                                    <h2 className="centerized fill2">Stats</h2>
                                    <div className="homeworkScroll fill2">
                                        <div className="centerized columbized " style={{ marginTop: "25px", width: "90%", marginLeft: "30px", }}>


                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div style={{ width: "40%" }}><b>Week Streak:</b></div>
                                                <div style={{ width: "40%" }} className="centerized " > 0</div>

                                            
                                        </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div style={{ width: "40%" }}><b>Time Practiced:</b></div>
                                                <div style={{ width: "40%" }} className="centerized "> 2 hr 40 min</div>

                                            


                                        </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div style={{ width: "40%" }}> <b>Practice Days:</b> </div>
                                                <div style={{ width: "40%" }} className="centerized ">50</div>

                                            
                                            </div>
                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                        <div style={{ width: "40%" }}> <b>Streak:</b> </div>
                                                <div style={{ width: "40%" }} className="centerized ">  0</div>


                                            </div>
                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div style={{ width: "40%" }}> <b>Practice Goal:</b> </div>
                                                <div style={{ width: "40%" }} className="centerized ">  0/7</div>


                                            </div>
                                        

                                            </div>
                                    </div>
                                </div>
                            </div>) : (<div></div>)}
                        </div>

                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized" style={{ height: "75%" }}>
                                <div style={{ alignSelf: "flex-start" }}>
                                    <h2 style={{ marginBottom: "25px" }} className="centerized">Accomplished Goals</h2>
                                <div className="homeworkScroll ">
                                {this.state.realtimeusr.archive.map((goal, index) =>
                                    <div className="huv rowss centerized" onClick={this.showGoal.bind(this, goal) }>
                                {goal.title}
                            </div>

                                    )}</div>
                            </div>
                            </div>) : (<div></div>)}
                            
                        </div>
                        
                    </div>
                    <div className="proStud5ab " style={{ opacity: "0" }}>
                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized fill2" style={{ height: "200px" }}>
                                <div className="fill2" style={{ alignSelf: "flex-start" }}>
                                    <h2 className="centerized fill2">Stats</h2>
                                    <div className="homeworkScroll fill2">
                                        <div className="centerized columbized " style={{ marginTop: "25px", width: "75%" }}>


                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div>Week Streak</div>
                                                <div className="centerized " > 0</div>


                                            </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div>Time Practiced</div>
                                                <div className="centerized "> 2 hr 40 min</div>




                                            </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div> Practice Days </div>
                                                <div className="centerized ">50</div>


                                            </div>
                                           
                                            

                                            


                                        </div>
                                    </div>
                                </div>
                            </div>) : (<div></div>)}
                        </div>

                       

                    </div>

                </div>

                </div>

        );
    }
}
/*
  
 * */