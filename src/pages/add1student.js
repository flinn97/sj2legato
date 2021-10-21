import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
import GoalEdit from "../components/diagoal.js";
import Homework from "../components/homeworks";
import ShowHomework from "../components/showHomework";
import Goal from "../components/showgoal.js";
import trash from "./Trash1.png";
import leaf from "./leaf.png";







//this component signs in a teacher allready in the database.
//using react-validation.
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class UpdateStudent extends Component {
    
    //state creation and binding.
    constructor(props) {
        super(props);
        this.handlegoal = this.handlegoal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.goalClose = this.goalClose.bind(this);
        this.Goalfunc = this.Goalfunc.bind(this);
        this.skip = this.skip.bind(this);
        this.Homeworkfunc = this.Homeworkfunc.bind(this);
        this.done = this.done.bind(this);
        this.next = this.next.bind(this);
        this.showHomework = this.showHomework.bind(this);
        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);
        this.handlegoalsClose = this.handlegoalsClose.bind(this);
        this.showGoal = this.showGoal.bind(this);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.deleteHomework = this.deleteHomework.bind(this);
        this.handletheclose = this.handletheclose.bind(this);
        this.handlethegoalclose = this.handlethegoalclose.bind(this);
        this.done1 = this.done1.bind(this);
        this.done2 = this.done2.bind(this);
        this.done3 = this.done3.bind(this);
        this.done4 = this.done4.bind(this);
        
        this.done5 = this.done5.bind(this);

        this.handleChangeforform = this.handleChangeforform.bind(this);

        
        
        
        this.handleHomework = this.handleHomework.bind(this);
        this.handleHomeworkClose = this.handleHomeworkClose.bind(this);
        this.skipped = this.skipped.bind(this);

        
        this.state = {
            homeworks: [],
            main: false,
            maingoal: "",
            goal: "",
            loading: false,
            message: "",
            goals: [],
            Goal: false,
            description: "",
            maindescription:"",
            next: false,
            maindate: "",
            checkbox: "",
            Homework: false,
            hwchecked: "",
            hwdescription: "",
            hwcheckboxes: "",
            hwdate: "",
            hwreasearch: "",
            assignment: false,
            research: false,
            practice: false,
            daily: "",
            hwtype: "",
            days: "",
            showHomework: false,
            currentHomework: undefined,
            currentgoal: undefined,
            showGoals: false,
            tempID: 1,
            HWtempID:1,
            tempGoal: "",
            tempDescription: "",
            tempday: "",
            tempcheckboxes: "",
            tempHW: "",
            edited: false,
            edit: "",
            editedd: "",
            val: false,
            yesnoCheckboxes: false,
            yesnoTime: false,
            timeframePractice: false,
            starPoints: false,
            manualsetup: false,
            syncCheckbox: false,
            dayorweekTime: "",
            timeSync: false,
            daysbool: false,
            timebool: false,
            smonths: "",
            emonths: "",
            temonths: "",
            tsmonths: "",
            Supporting_Goal: "",
            Homework_Practiced: "",
            timeframePracticebiao: false,
            min: "",
            weeklytimebiao: "",
            dailytimebiao: false,
            dmin: "",
            weekStreak: false,
            dayStreak: false,
            done: 0,
            hwsynccheck: false,
            hwdmin: "",
            HWweeklytimebiao: "",
            hwtimesync: false,
            hwlink: "",
            struggles: false,
            hwQuestions: false,
        };
    }
    //handles all changes with state.
    handleChange = (event, news) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })

        
    }
    handleChangeforform = (event, news) => {
        
        const { name, value } = event.target

        if (value === "true") {
            this.setState({
                [name]: true,
            })
        }
        else {
            this.setState({
                [name]: false,
            })
        }


    }

    componentDidMount() {
        
    }

   
   
    Goalfunc() {
        this.setState({
            Goal: true,
        })
    }
    Homeworkfunc() {
        this.setState({
            Homework: true,
        })
    }
    showHomework(homework) {
        this.setState({
            showHomework: true,
            currentHomework: homework,
        })



    }
    showGoal(goal) {
        this.setState({
            showGoals: true,
            currentgoal: goal,
        })



    }
    //submites for login using the controller to connect with backend. Sends to the teacher profile if teacher or the student if back end spits out student.
    handlegoal(e) {
        e.preventDefault();
        let newarr = this.state.goals;
        let newGoal = {
            title: this.state.goal,
            description: this.state.description,
            date: "no due date",
            tempID: this.state.tempID
            
        }
        newarr.push(newGoal);
        let x = this.state.tempID + 1;
        this.setState({
            goals: newarr,
            tempID: x
        })
        this.goalClose();
    }

    async handleHomework(e) {
        e.preventDefault();
        if (this.state.hwtype === "") {

            await this.setState({
                hwtype: "assignment"
            })

        }

        let newarr = this.state.homeworks;
        let hwID = this.state.HWtempID + 1;
        this.setState({
            HWtempID:hwID
        })
        
        let newHW = {
            
            title: this.state.homework,
            hwchecked: this.state.hwchecked,
            hwcheckboxes: this.state.hwcheckboxes,
            hwtype: this.state.hwtype,
            description: this.state.hwdescription,
            date: this.state.hwdate,
            daily: this.state.daily,
            HWtempID: this.state.HWtempID,
            hwsynccheck: this.state.hwsynccheck,
            hwlink: this.state.hwlink,
            hwstruggles: this.state.struggles,
            hwQuestions: this.state.hwQuestions,
            hwdmin: this.state.hwdmin,
            HWweeklytimebiao: this.state.HWweeklytimebiao,
            hwtimesync: this.state.hwtimesync



        }
        newarr.push(newHW);
        this.setState({
            homeworks: newarr,
        })
        this.handleHomeworkClose();
    }

    async done() {
        //add practicw streak
        
        this.done2();
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(5000);
        this.done3();
        await delay(5000);
        this.done4();
        await delay(5000);
        this.done1();
       
        
       
        
        
        


     


        

        
    }
    async done2() {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (this.state.yesnoCheckboxes) {
            if (this.state.syncCheckbox) {
                AuthService.syncCheckboxes(this.props.state.realtimestudent._id, this.state.checkbox);
                await delay(3000);

            }
            else {
                AuthService.checkboxes(this.props.state.realtimestudent._id, this.state.checkbox);
                await delay(3000);
            }
        }
        if (this.state.yesnoTime) {

            AuthService.timeSync(this.props.state.realtimestudent._id, this.state.timeSync, this.state.weeklytimebiao, this.state.dailytimebiao, this.state.dmin);
            await delay(3000);



        }
        if (this.state.timebool) {
            AuthService.timeTotal(this.props.state.realtimestudent._id, "0")
            await delay(3000);

        }
        if (this.state.daysbool) {
            AuthService.dayTotal(this.props.state.realtimestudent._id, "0")
            await delay(6000);

        }

        if (this.state.timeframePractice) {
            AuthService.updateSetDays(this.props.state.realtimestudent._id, this.state.days, this.state.smonths, this.state.emonths, this.state.timeframePracticebiao, this.state.min, this.state.tsmonths, this.state.temonths);
            await delay(3000);

        }
    }

    async done3() {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (this.state.dayStreak) {
            AuthService.setDayStreak(this.props.state.realtimestudent._id, this.state.dayStreak);
            await delay(3000);
        }
        if (this.state.weekStreak) {
            AuthService.setWeekStreak(this.props.state.realtimestudent._id, this.state.weekStreak);
            await delay(3000);

        }
        if (this.state.starPoints) {
            if (this.state.manualsetup) {
                AuthService.starPoints(this.props.state.realtimestudent._id, true,)
                await delay(3000);

            }
            else {
                AuthService.starPoints(this.props.state.realtimestudent._id, false)
                await delay(3000);

            }
        }
    }

    async done4() {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (this.state.goals[0]) {
            AuthService.AddGoals(this.props.state.realtimestudent._id, false, this.state.goals)
            await delay(5000);
        }

        if (this.state.maingoal!=="") {
            AuthService.AddGoal(this.props.state.realtimestudent._id, true, this.state.maingoal, this.state.maindescription, this.state.maindate,)
            await delay(3000);

        }
        if (this.state.homeworks[0]) {
            AuthService.AddHomeworks(this.props.state.realtimestudent._id, this.state.homeworks)
            await delay(3000);

        }
        await delay(3000);
    }
    async done1() {
        AuthService.doneUpdatingnewStudent(this.props.state.realtimestudent._id, true)
        if (this.state.done === 0) {
            this.setState({
                done: 1,
            })
            this.done5();
        }
        
        
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(6000);
        AuthService.doneUpdatingnewStudent(this.props.state.realtimestudent._id, true).then(response => {
            console.log(response.data);

            if (response.data.student) { window.location.reload();}
            
        });


        



       

    }
    async done5() {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        AuthService.AddGoals(this.props.state.realtimestudent._id, false, this.state.goals)
        await delay(6000);

        AuthService.AddGoal(this.props.state.realtimestudent._id, true, this.state.maingoal, this.state.maindescription, this.state.maindate,)
        await delay(6000);

        AuthService.AddHomeworks(this.props.state.realtimestudent._id, this.state.homeworks)
        await delay(6000);

        AuthService.setDayStreak(this.props.state.realtimestudent._id, this.state.dayStreak);
        await delay(6000);

}



    goalClose() {
        this.setState({
            Goal: false,
            main: false,
            goal: "",
            description: "",
        });
    }
    handleHomeworkClose() {
        this.setState({

            Homework: false,
            hwdate: "",
            daily: "",
            homework: "",
            hwdescription: "",
            hwcheckboxes: "",
            hwchecked: "",
            hwtype: "assignment",
            assignment: false,
            research: false,
            practice: false,
        });
    }

    next() {

            

        this.setState({
            next:true,
        })
    }
    skip() {
        this.setState({
            next: !this.state.next
        })
    }
    skipped() {
        AuthService.doneUpdatingnewStudent(this.props.state.realtimestudent._id, true);
        window.location.reload();
    }
    handlehwChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
        if (value === "assignment") {
            this.setState({
                assignment: true,
                research: false,
                practice: false,
            })
        }
        if (value === "research") {
            this.setState({
                assignment: false,
                research: true,
                practice: false,
            })
        }
        if (value === "practice") {
            this.setState({
                assignment: false,
                research: false,
                practice: true,
            })
        }

    }
    
    
    deleteHomework(homework) {

        let ar = [];
        for (let i = 0; i < this.state.homeworks.length; i++) {
            if (this.state.homeworks[i].HWtempID !== homework.HWtempID) {
                
                ar.push(this.state.homeworks[i]);
            }
                
        }
        this.setState({
            homeworks: ar,
        })

    }
    deleteGoal(goal) {
        let ar = [];
        for (let i = 0; i < this.state.goals.length; i++) {
            if (this.state.goals[i].tempID !== goal.tempID) {
               
                ar.push(this.state.goals[i]);
            }

        }
        this.setState({
            goals: ar,
        })
    }
    handletheclose(id, title, description, type, day, checkboxes, date, ) {
        let newHW = {

            title: title,
            hwcheckboxes: checkboxes,
            hwtype: type,
            description: description,
            date: date,
            daily: day,
            HWtempID: id
        }
        let ar = [];
        for (let i = 0; i < this.state.homeworks.length; i++) {
            if (this.state.homeworks[i].HWtempID === newHW.HWtempID) {

                ar.push(newHW);
            }
            else {
                ar.push(this.state.homeworks[i]);

            }

        }



        this.setState({

            homeworks: ar,
        })

    }

    hideHomeworkClose() {
        
        this.setState({
            showHomework: false,


        });
    };
    handlethegoalclose() {
        this.setState({
            showGoals: false
        });
    }
    handlegoalsClose(id, title, description) {
        
        let goalz = {
            title: title,
            description: description,
            tempID: id
        }

        let ar = [];
        for (let i = 0; i < this.state.goals.length; i++) {
            if (this.state.goals[i].tempID === goalz.tempID) {
                
                ar.push(goalz);
            }
            else {
                ar.push(this.state.goals[i]);

            }

        }



        this.setState({

            goals: ar,
        })


        
    };

    render() {

        //login page for the screen. 
        return (
            <div className="z1">
                <div className="popup-box" style={{ zIndex: "1010" }}>
                    <div className="diapicbox4b " style={{ zIndex: "1010" }}>
                        

                        {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main} />)}

                        {this.state.Homework && (<Homework handleHomework={this.handleHomework} handleChange={this.handlehwChange} handleClose={this.handleHomeworkClose} practice={this.state.practice} research={this.state.research} assignment={this.state.assignment} />)}
                        {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} role="teacher" handleChange={this.handleChange} edited={this.edited} handletheclose={this.handletheclose}/> )}
                        {this.state.showGoals && (<Goal Goal={this.state.currentgoal} handleClose={this.handlethegoalclose} role="teacher" handleChange={this.handleChange} handletheclose={this.handlegoalsClose}/>)}
                        <div className="homeworkScroll1">
                        <div className="fill1 centerizeaa " >
                            <h1 style={{ margin: "0 auto" }}>Additional Setup</h1>
                                <div className="checkboxstuff" style={{ margin: "0 auto" }}> <p>You can also </p> <p className="rowss1 huv " style={{ color: "#696eb5", marginLeft:"3px", marginRight:"3px"}} onClick={this.done1}>skip</p><p>for now</p></div>

                                <h2 style={{ color: "gray" }}>Set Goals For Student</h2>


                                <div style={{ marginTop: "5px", width: "250px", marginLeft: "30px" }} className="form-group" >
                                <label htmlFor=""><h5>Set Main Goal For Student</h5></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="maingoal"
                                    value={this.state.maingoal}
                                    onChange={this.handleChange}
                                    validations={[required]}
                                />
                            </div>

                                <div className="form-group" style={{ width: "375px", marginLeft: "30px", marginBottom:"50px" }} >
                                <label htmlFor="maindescription"><h5>Goal Description</h5></label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    rows="3"
                                    id="maindescription"
                                    value={this.state.maindescription}
                                    onChange={this.handleChange}
                                    name="maindescription"
                                ></textarea>
                            </div>
                                <h5 style={{ marginLeft: "30px" }}>Add Supporting Goals for this Student:</h5>

                                <div style={{ marginLeft: "30px", marginTop:"17px", marginBottom:"27px", height: "230px", width: "270px",  border: "2px solid green", borderRadius:"7%"  }}>
                                    <div className="homeworkScroll1 " style={{ height: "220px" }}>
                                {this.state.goals.map((goal, index) =>
                                    <div className="checkboxstuff4 " key={index} >
                                        
                                        <p className="huv rowss" onClick={this.showGoal.bind(this, goal)} >{goal.title} </p>
                                        <img
                                            src={trash}
                                            alt="delete"
                                            onClick={this.deleteGoal.bind(this, goal)}
                                            className="huv edit3"
                                            style={{ width: "17px", height: "17px", opacity: ".5" }}

                                        />
                                            </div>
                                    
                                        )}
                                      
                                        
                                        <div className="btn  btn-block"  onClick={this.Goalfunc}><span className="checkboxstuff1" style={{ width: "150" }}>
                                            <img
                                                src={leaf}
                                                className="edita"
                                                style={{ width: "20px", height: "20px" }}


                                            />
                                            <p>+</p><p className="rowss huv">Supporting Goal</p>
                                        </span></div>
                                    </div>
                            </div>

                            <div >
                                   
                            </div>


                        
                        </div>
                        <div>

                            <div className="fill1 columbized" >

                                    <h2 style={{ marginBottom: "15px", color: "gray"  }}>Set Up Homework For Student</h2>
                                    <h5 style={{ marginLeft: "30px" }}>Checkbox Setup:</h5>
                                    <div className="form-group" style={{ marginLeft: "55px" }} >
                                    <label>Should this student have checkboxes to track their daily practice progress?</label>
                                    <select  htmlFor="yesnoCheckboxes" onChange={this.handleChangeforform} name="yesnoCheckboxes" id="yesnoCheckboxes">
                                        <option value=""></option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                        <option value={false}>Not Sure Yet</option>
                                       
                                    </select>
                                </div>
                                {this.state.yesnoCheckboxes ? (<div style={{ marginLeft: "75px" }}>
                                    <div  className="form-group" >
                                        <label>How many days should this student practice every week?</label>
                                        <select  htmlFor="checkbox" onChange={this.handleChange} name="checkbox" id="checkbox">
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="0">I'm not sure how many yet</option>
                                        </select>
                                    </div>
                                    <div  className="form-group" >
                                        <label>Sync the checkboxes up with the day of the week?</label>
                                        <select  htmlFor="syncCheckbox" onChange={this.handleChangeforform} name="syncCheckbox" id="syncCheckbox">
                                            <option value=""></option>
                                            <option value={true}>yes</option>
                                            <option value={false}>no</option>
                                            <option value={false}>Not Sure Yet</option>


                                        </select>
                                        </div>
                                        <div className="form-group" >
                                            <label>Track Streak?</label>
                                            <select htmlFor="dayStreak" onChange={this.handleChangeforform} name="dayStreak" id="dayStreak">
                                                <option value=""></option>
                                                <option value={true}>yes</option>
                                                <option value={false}>no</option>
                                                <option value={false}>Not Sure Yet</option>


                                            </select>
                                        </div>
                                </div>) : (<div></div>)}
                                    <h5 style={{ marginTop: "7px", marginLeft: "30px"  }}>Time Tracking Setup:</h5>

                                    <div className="form-group" style={{  marginLeft: "55px" }}>
                                    <label>Should this student be required to practice a certain amount of time every week?</label>
                                    <select  htmlFor="yesnoTime" onChange={this.handleChangeforform} name="yesnoTime" id="yesnoTime">
                                        <option value=""></option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>
                                        <option value={false}>Not Sure Yet</option>


                                    </select>
                                    </div>
                                   

                                    {this.state.yesnoTime ? (<div style={{ marginLeft: "70px" }}>

                                        <div className="form-group"  >
                                            <label htmlFor="weeklytimebiao">How much time should this student practice every week?</label>
                                            <input

                                                type="text"
                                                className="form-control"
                                                id="weeklytimebiao"
                                                style={{ width: "60px" }}
                                                onChange={this.handleChange}
                                                name="weeklytimebiao"
                                            /><p>Minutes</p>


                                        </div>

                                        <div className="form-group" >
                                            <label>Would you like to set a daily time goal?</label>
                                            <select htmlFor="timeSync" onChange={this.handleChangeforform} name="timeSync" id="timeSync">
                                                <option value=""></option>
                                                <option value={true}>yes</option>
                                                <option value={false}>no</option>
                                                <option value={false}>Not Sure Yet</option>


                                            </select>
                                        </div>
                                        {this.state.timeSync ? (
                                            <div className="form-group" style={{ marginLeft: "30px" }}>
                                                <label htmlFor="dmin">How much time should this student practice every day?</label>
                                                <input

                                                    type= "text"
                                                    className="form-control"
                                                    id="dmin"
                                                    style={{ width: "60px" }}
                                                    onChange={this.handleChange}
                                                    name="dmin"
                                                /><p>Minutes</p>


                                            </div>
                                        ): (<div></div>)}
                                        

                                  
                                    
                                </div>) : (<div></div>)}
                                
                                    <h5 style={{ marginTop: "10px", marginLeft: "30px" }}>Add Homework for this Student:</h5>

                                
                                            <div style={{ marginLeft: "30px", marginTop: "23px", marginBottom: "50px", height: "230px", width: "270px", border: "2px solid green", borderRadius: "7%" }}>
                                                <div className="homeworkScroll1 " style={{ height: "220px" }}>
                                    {this.state.homeworks.map((homework, index) =>
                                        <div className="checkboxstuff4 " key={index} >
                                            <p className="huv rowss" onClick={this.showHomework.bind(this, homework)}> {homework.title}</p>
                                            <img
                                                src={trash}
                                                alt="delete"
                                                onClick={this.deleteHomework.bind(this, homework)}
                                                className="huv edit3"
                                                style={{ width: "17px", height: "17px", opacity: ".5" }}

                                            />

                                        </div>
                                            )}
                                            <div className="btn  btn-block" onClick={this.Homeworkfunc}><span className="checkboxstuff1" style={{ width: "150" }}>
                                                <img
                                                    src={leaf}
                                                    className="edita"
                                                    style={{ width: "20px", height: "20px" }}


                                                />
                                                <p>+</p><p className="rowss huv">Homework</p>
                                            </span></div>
                                    </div>
                                    </div>

                              
                                    <h5 style={{ marginTop: "20px",  }}>Other Homework and Generic Goals for Student:</h5>

                                    <div className="form-group" style={{ marginLeft: "30px" }}>
                                    <label>Track days practiced for the year starting today? </label>
                                    <select htmlFor="daysbool" onChange={this.handleChangeforform} name="daysbool" id="daysbool">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>


                                    </select>
                                </div>
                                    <div className="form-group" style={{ marginLeft: "30px" }} >
                                    <label>Track total time practiced for the year starting today? </label>
                                    <select htmlFor="timebool" onChange={this.handleChangeforform} name="timebool" id="timebool">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>

                                    </select>
                                    </div>
                                    <div style={{ marginLeft: "30px" }} className="form-group" >
                                        <label>Track Streak for perfect weeks?</label>
                                        <select htmlFor="weekStreak" onChange={this.handleChangeforform} name="weekStreak" id="weekStreak">
                                            <option value=""></option>
                                            <option value={true}>yes</option>
                                            <option value={false}>no</option>
                                            <option value={false}>Not Sure Yet</option>


                                        </select>
                                    </div>

                                    <div className="form-group" style={{ marginLeft: "30px" }}>
                                    <label>Would you like to set a larger practice goal for days practiced out of a time frame? </label>
                                    <select htmlFor="timeframePractice" onChange={this.handleChangeforform} name="timeframePractice" id="timeframePractice">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                        <option value={false}>I'll set this up later.</option>


                                    </select>
                                </div>
                                {this.state.timeframePractice ? (<div style={{ marginLeft: "55px" }}>
                                    <div className="form-group" >
                                        <label htmlFor="days">days to practice</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            id="days"
                                            style={{ width: "60px" }}
                                            onChange={this.handleChange}
                                            name="days"
                                        />


                                    </div>
                                        <div className="form-group checkboxstuff2" style={{ marginleft: "55px", marginBottome:"15px" }}>
                                        <div>
                                        <p>From:</p>
                                        <input
                                            id="smonths"
                                            name="smonths"
                                            style={{ width: "200px" }}
                                            type="date"
                                            className="form-control"


                                            onChange={this.handleChange}

                                            />
                                            </div>
                                        <div style={{  marginLeft: "60px" }}>
                                        <p>To:</p>
                                        <input
                                            id="emonths"
                                            name="emonths"
                                                style={{ width: "200px" }}
                                            type="date"
                                            className="form-control"


                                            onChange={this.handleChange}

                                            />
                                            </div>


                                    </div>
                                    </div>) : (<div></div>)}

                                    <div className="form-group" style={{ marginLeft: "30px" }} >
                                        <label>Would you like to set a larger practice goal for minutes practiced out of a time frame? </label>
                                        <select htmlFor="timeframePracticebiao" onChange={this.handleChangeforform} name="timeframePracticebiao" id="timeframePracticebiao">
                                            <option value=""></option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                            <option value={false}>I'll set this up later.</option>


                                        </select>
                                    </div>
                                    {this.state.timeframePracticebiao ? (<div style={{ marginLeft: "55px" }}>
                                        <div className="form-group" >
                                            <label htmlFor="min">Practice Minutes</label>
                                            <input

                                                type="text"
                                                className="form-control"
                                                id="min"
                                                style={{ width: "60px" }}
                                                onChange={this.handleChange}
                                                name="min"
                                            />


                                        </div>
                                        <div className="form-group checkboxstuff2" >
                                            <div>
                                                <p>From:</p>
                                                <input
                                                    id="tsmonths"
                                                    name="tsmonths"
                                                    style={{ width: "200px" }}
                                                    type="date"
                                                    className="form-control"


                                                    onChange={this.handleChange}

                                                />
                                            </div>
                                            <div style={{ marginLeft: "55px" }}>
                                                <p>To:</p>
                                                <input
                                                    id="temonths"
                                                    name="temonths"
                                                    style={{ width: "200px" }}
                                                    type="date"
                                                    className="form-control"


                                                    onChange={this.handleChange}

                                                />
                                            </div>


                                        </div>
                                    </div>) : (<div></div>)}

                                
                            </div>
                            
                        </div> 
                        <div>

                            <div className="fill1 columbized" >

                                    <h2 style={{ marginTop: "25px", color:"gray" }}>Set Up Star Points For Student</h2>

                                    <div className="form-group" style={{ marginLeft: "30px" }}>
                                    <label>Would you like to include Star Points for this student? Star points help gamify accountibility to make it fun!</label>
                                    <select  htmlFor="starPoints" onChange={this.handleChangeforform} name="starPoints" id="starPoints">
                                        <option value=""></option>
                                        <option value={true}>yes</option>
                                        <option value={false}>no</option>

                                    </select>
                                </div>
                                    {this.state.starPoints ? (<div style={{ marginLeft: "50px" }}>
                                    <div className="form-group" >
                                        <label>Would you like to manually setup star points or us legato automatic system?</label>
                                        <select  htmlFor="manualsetup" onChange={this.handleChangeforform} name="manualsetup" id="manualsetup">
                                            <option value=""></option>
                                            <option value={true}>Manually set up.</option>
                                            <option value={false}>Do it for me.</option>

                                        </select>
                                    </div>
                                        {this.state.manualsetup ? (<div style={{color:"#8C6057"}}>Manual setup is not available during the testing phase. </div>) : (<div></div>)}
                                    
                                </div>) : (<div></div>)}
                                

                                <div style={{ alignSelf: "flexEnd", marginTop:"30px" }}>

                                    <div style={{ width: "35%" }} className="form-group">
                                        <button onClick={this.done}
                                                className="btn btn-block backgroundColors"

                                        >
                                            Finish
                                            
                                    </button>
                                    </div>

                                    <div onClick={this.done1} className="huv rowss">skip</div>
                                    
                                </div>


                            </div>
                        </div> 
                            
                                
                        </div>
                        
                        
                    </div>
                </div>
                </div>


             
                          
        );
    }
}
/*
 * 
 * <div>
                                        <h4>Manual setup for Star Points.</h4>
                                        <div className="form-group" >
                                            <label htmlFor="lastName">Main Goal Complete</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="days"

                                                onChange={this.handleChange}
                                                name="days"
                                            />
                                        </div>
                                        <div className="form-group" >
                                            <label htmlFor="Supporting_Goal">Supporting Goal complete</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="Supporting_Goal"

                                                onChange={this.handleChange}
                                                name="Supporting_Goal"
                                            />
                                        </div>
                                        <div className="form-group" >
                                            <label htmlFor="Homework_Practiced">Homework Practiced</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="Homework_Practiced"

                                                onChange={this.handleChange}
                                                name="Homework_Practiced"
                                            />
                                        </div>
                                        <div className="form-group" >
                                            <label htmlFor="lastName">checked for all homework</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="days"

                                                onChange={this.handleChange}
                                                name="days"
                                            />
                                        </div>
                                        <div className="form-group" >
                                            <label htmlFor="lastName">Practice time logged</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="days"

                                                onChange={this.handleChange}
                                                name="days"
                                            />
                                        </div>
                                        <div className="form-group" >
                                            <label htmlFor="lastName">Done with days practiced in timeframe</label>
                                            <input
                                                style={{ width: "40%" }}
                                                type="text"
                                                className="form-control"
                                                id="days"

                                                onChange={this.handleChange}
                                                name="days"
                                            />
                                        </div>
                                    </div>
 */