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
import Splashscreen from "../components/splashscreen.js";







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
        this.goback = this.goback.bind(this);

        
        this.done5 = this.done5.bind(this);

        this.handleChangeforform = this.handleChangeforform.bind(this);

        
        
        
        this.handleHomework = this.handleHomework.bind(this);
        this.handleHomeworkClose = this.handleHomeworkClose.bind(this);
        this.skipped = this.skipped.bind(this);

        
        this.state = {
            homeworks: [],
            main: true,
            maingoal: "Change this",
            goal: "",
            loading: false,
            message: "",
            goals: [],
            Goal: false,
            description: "",
            maindescription:"You should change this to be a goal that you would like this student to have.",
            next: false,
            maindate: "",
            checkbox: "5",
            Homework: false,
            hwchecked: "",
            hwdescription: "",
            hwcheckboxes: "0",
            hwdate: "",
            hwreasearch: "",
            assignment: false,
            research: false,
            practice: false,
            daily: "100",
            hwtype: "",
            days: "100",
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
            yesnoCheckboxes: true,
            yesnoTime: true,
            timeframePractice: true,
            starPoints: true,
            manualsetup: false,
            syncCheckbox: true,
            dayorweekTime: "",
            timeSync: true,
            daysbool: true,
            timebool: true,
            smonths: "",
            emonths: "",
            temonths: "",
            tsmonths: "",
            Supporting_Goal: "",
            Homework_Practiced: "",
            timeframePracticebiao: true,
            min: "100",
            weeklytimebiao: "60",
            dailytimebiao: true,
            dmin: "20",
            weekStreak: true,
            dayStreak: true,
            done: 0,
            hwsynccheck: true,
            hwdmin: "",
            HWweeklytimebiao: "",
            hwtimesync: true,
            hwlink: "",
            struggles: true,
            hwQuestions: true,
            yesnoday: true,
            yesnoweek: true,
            marginTop: "",
            marginLeft: "55px"
            /*
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
            checkbox: "0",
            Homework: false,
            hwchecked: "",
            hwdescription: "",
            hwcheckboxes: "0",
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
            struggles: true,
            hwQuestions: true,
            yesnoday: false,
            yesnoweek: false,
            marginTop: "",
            marginLeft: "55px"
            */
        };
    }
    //handles all changes with state.
    handleChange = (event, news) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
        if(name==="dmin"){
            this.setState({
                timeSync:true
            })

        }
        

        
    }
    goback(){
        this.props.history.push("/profile");
        window.location.reload();
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
        if(parseInt(window.innerWidth) <= 600){
        this.setState({ marginTop: "310px", marginLeft: "0px" });
        }
        this.done()

        
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
            hwtimesync: this.state.hwtimesync,
            yesnoday: this.state.yesnoday,
            yesnoweek: this.state.yesnoweek,
            totalWeekTime: {
                total: "0",
            },
            hwtime: {
                mon: "0",
                tues: "0",
                wed: "0",
                thur: "0",
                fri: "0",
                sat: "0",
                sun: "0",
            },
            firstMessage: false,
            messages: [],
            syncedCheckboxes: {
                mon: false,
                tues: false,
                wed: false,
                thur: false,
                fri: false,
                sat: false,
                sun: false
            }



        }
        newarr.push(newHW);
        this.setState({
            homeworks: newarr,
        })
        this.handleHomeworkClose();
    }

    async done() {
        //add practicw streak
        AuthService.doitAll(
            /*this is everything for checkboxes*/this.props.state.realtimestudent._id,/*done*/ this.state.yesnoCheckboxes, this.state.syncCheckbox, this.state.checkbox,
            /*this is everything for time. timebool is conditional clause if I want*/ this.state.yesnoTime, /*done*/ this.state.timeSync,/*done*/ this.state.weeklytimebiao,/*done*/ this.state.dailytimebiao,/*done*/ this.state.dmin,/*done*/ this.state.timebool, /*done*/ "0", /*done*/
        /*this is days practiced. daybool also conditional */ this.state.daysbool,/*done*/ "0",/*done*/
        /*updating time frame practiced for days.*/  this.state.days,/*done*/ this.state.smonths,/*done*/ this.state.emonths,/*done*/ this.state.timeframePracticebiao,/*done*/ this.state.min,/*done*/ this.state.tsmonths,/*done*/ this.state.temonths,/*done*/
        /*updating streak info and star points (last two)*/ this.state.dayStreak,/*done*/ this.state.weekStreak,/*done*/ this.state.starPoints,/*done*/ this.state.manualsetup,/*done*/
        /*add the goals first one is for conditional clause if I want.*/ this.state.goals[0],/*done*/ this.state.goals,/*done*/ this.state.maingoal,/*done*/  this.state.maindescription,/*done*/  this.state.maindate,/*done*/ 
        /*add the homeworks*/ this.state.homeworks,/*done*/ 
        /*done updating new student.*/ true, /*done*/ 


        ).then(response => {
            console.log(response.data);

            if (response.data.student) { window.location.reload(); }

        });
      

        
           
       


        


       
       
     



        //this.done2();
        //const delay = ms => new Promise(res => setTimeout(res, ms));
        //await delay(5000);
        //this.done3();
       // await delay(5000);
        //this.done4();
        //await delay(5000);
       //this.done1();
       
        
       
        
        
        


     


        

        
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
        return (<div>

            <Splashscreen />
        </div>)
    }
}
/*
    render() {

        //login page for the screen. 
        return (
            {/** 
            <div className="z1">
                <div className="popup-box" style={{ zIndex: "1010" }}>
                    <div className="diapicbox4b " style={{ zIndex: "1010" }}>
                        

                        {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main} />)}

                        {this.state.Homework && (<Homework handleHomework={this.handleHomework} handleChange={this.handlehwChange} handleClose={this.handleHomeworkClose} practice={this.state.practice} research={this.state.research} assignment={this.state.assignment} />)}
                        {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} role="teacher" handleChange={this.handleChange} edited={this.edited} handletheclose={this.handletheclose}/> )}
                        {this.state.showGoals && (<Goal Goal={this.state.currentgoal} handleClose={this.handlethegoalclose} role="teacher" handleChange={this.handleChange} handletheclose={this.handlegoalsClose}/>)}
                        <div className="homeworkScroll1">
                        <div className="fill1 centerizeaa " >
                            <h1 style={{  }}>Additional Setup</h1>
                                <div className="" style={{ display:"flex", flexDirection:"row", marginLeft:"20px", width:"320px" }}> <p>You can also </p> <p className="rowss1 huv " style={{ color: "#696eb5", marginLeft:"3px", marginRight:"3px"}} onClick={this.done}><b>skip</b></p><p>for now. or go</p> <p className="rowss1 huv " style={{ color: "#696eb5", marginLeft:"3px", marginRight:"3px"}} onClick={this.goback}><b>back.</b></p> </div>

                                <h2 style={{ color: "gray" }}>Set Goals For Student</h2>


                                <div style={{ marginTop: "5px", width: "250px", marginLeft: "30px" }} className="form-group" >
                                <label htmlFor=""><h5>Main Goal For Student:</h5></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="maingoal"
                                    value={this.state.maingoal}
                                    onChange={this.handleChange}
                                    validations={[required]}
                                />
                            </div>

                                <div className="form-group" style={{ maxWidth: "375px", marginLeft: "30px", marginBottom:"50px", marginRight:"10px" }} >
                                <label htmlFor="maindescription"><h5>Goal Description:</h5></label>
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
                                <h5 style={{ marginLeft: "30px" }}>Add Supporting Goals for Student:</h5>

                                <div style={{ marginLeft: "30px", marginTop:"17px", marginBottom:"27px", height: "230px", width: "270px",  border: "2px solid green", borderRadius:"7%"  }}>
                                    <div className="homeworkScroll1 " style={{ height: "220px", marginTop:"5px", marginLeft:"10px" }}>
                                {this.state.goals.map((goal, index) =>
                                    <div className="checkboxstuff4 " key={index}  >
                                        
                                        <p className="huv rowss" onClick={this.showGoal.bind(this, goal)} >{goal.title} </p>
                                        <img
                                            src={trash}
                                            alt="delete"
                                            onClick={this.deleteGoal.bind(this, goal)}
                                            className="huv "
                                            style={{ width: "15px", height: "15px", opacity: ".5", marginTop:"5px" }}

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
                        <div style={{marginTop: this.state.marginTop}}>

                            <div className="fill1 columbized" >

                                    <h2 style={{ marginBottom: "15px", color: "gray"  }}>Setup Checkboxes:</h2>
                                    <div className="form-group" style={{ marginLeft: "55px" }} >
                                    <label>Should this student have daily checkboxes?</label>
                                    <select  htmlFor="yesnoCheckboxes" onChange={this.handleChangeforform} name="yesnoCheckboxes" id="yesnoCheckboxes">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                        <option value={false}>Not Sure Yet</option>
                                       
                                    </select>
                                </div>
                                {this.state.yesnoCheckboxes ? (<div style={{ marginLeft: "75px" }}>
                                    <div  className="form-group" >
                                        <label>How many days should the student practice?</label>
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
                                        <label>Should practice days sync with the week?</label>
                                        <select  htmlFor="syncCheckbox" onChange={this.handleChangeforform} name="syncCheckbox" id="syncCheckbox">
                                            <option value=""></option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                            <option value={false}>Not Sure Yet</option>


                                        </select>
                                        </div>
                                        <div className="form-group" >
                                            <label>Track daily streak?</label>
                                            <select htmlFor="dayStreak" onChange={this.handleChangeforform} name="dayStreak" id="dayStreak">
                                                <option value=""></option>
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                                <option value={false}>Not Sure Yet</option>


                                            </select>
                                        </div>
                                </div>) : (<div></div>)}
                                    <h5 style={{ marginTop: "7px", marginLeft: "30px"  }}>Setup Times:</h5>

                                    <div className="form-group" style={{  marginLeft: "55px" }}>
                                    <label>Would you like to set up a time goal?</label>
                                    <select  htmlFor="yesnoTime" onChange={this.handleChangeforform} name="yesnoTime" id="yesnoTime">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                        <option value={false}>Not Sure Yet</option>


                                    </select>
                                    </div>
                                   

                                    {this.state.yesnoTime ? (<div style={{ marginLeft: "70px" }}>

                                        <div className="form-group"  >
                                            <label htmlFor="weeklytimebiao">How much time should the student practice weekly?</label>
                                            <input

                                                type="text"
                                                className="form-control"
                                                id="weeklytimebiao"
                                                style={{ width: "60px" }}
                                                onChange={this.handleChange}
                                                name="weeklytimebiao"
                                            /><p>Minutes</p>


                                        </div>

                                        
                                            <div className="form-group" style={{  }}>
                                                <label htmlFor="dmin">How much time should the student practice daily?</label>
                                                <input

                                                    type= "text"
                                                    className="form-control"
                                                    id="dmin"
                                                    style={{ width: "60px" }}
                                                    onChange={this.handleChange}
                                                    name="dmin"
                                                /><p>Minutes</p>


                                            </div>
                                    
                                        

                                  
                                    
                                </div>) : (<div></div>)}
                                
                                    <h5 style={{ marginTop: "10px", marginLeft: "30px" }}>Add Homework for this Student:</h5>

                                
                                            <div style={{ marginLeft: "30px", marginTop: "23px", marginBottom: "50px", height: "230px", width: "270px", border: "2px solid green", borderRadius: "7%" }}>
                                                <div className="homeworkScroll1 " style={{ height: "220px",  marginTop:"5px", marginLeft:"10px" }}>
                                    {this.state.homeworks.map((homework, index) =>
                                        <div className="checkboxstuff4 " key={index} >
                                            <p className="huv rowss" onClick={this.showHomework.bind(this, homework)}> {homework.title}</p>
                                            <img
                                                src={trash}
                                                alt="delete"
                                                onClick={this.deleteHomework.bind(this, homework)}
                                                className="huv "
                                                style={{ width: "15px", height: "15px", opacity: ".5", marginTop:"5px",}}

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

                              
                                    <h5 style={{ marginTop: "20px",  }}>Other Student Settings:</h5>
                                    {this.state.yesnoCheckboxes?(<div>
                                        <div className="form-group" style={{ marginLeft: "30px" }}>
                                        <label>Do you want to track days practiced for the year? </label>
                                        <select htmlFor="daysbool" onChange={this.handleChangeforform} name="daysbool" id="daysbool">
                                            <option value=""></option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
    
    
                                        </select>
                                    </div></div>
                                    ):(<div></div>)}
                                    {this.state.yesnoTime?(
                                        <div className="form-group" style={{ marginLeft: "30px" }} >
                                        <label>Do you want to track time practiced for the year? </label>
                                        <select htmlFor="timebool" onChange={this.handleChangeforform} name="timebool" id="timebool">
                                            <option value=""></option>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
    
                                        </select>
                                        </div>
                                    ):(<div></div>)}

                                    
                                    
                                   

                                   <div className="form-group" style={{ marginLeft: "30px" }}>
                                    <label>Would you like to set up a goal for practice days? </label>
                                    <select htmlFor="timeframePractice" onChange={this.handleChangeforform} name="timeframePractice" id="timeframePractice">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                        <option value={false}>I'll set this up later.</option>


                                    </select>
                                </div>
                                {this.state.timeframePractice ? (<div style={{ marginLeft: "55px" }}>
                                    <div className="form-group" >
                                        <label htmlFor="days">How many days?</label>
                                        <input

                                            type="text"
                                            className="form-control"
                                            id="days"
                                            style={{ width: "60px" }}
                                            onChange={this.handleChange}
                                            name="days"
                                        /></div></div>):(<div></div>)}

 {/*
                                    </div>
                                        <div className="form-group checkboxstuff2foradd" style={{ marginleft: "55px", marginBottom:"15px" }}>
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
                                        <div style={{  marginLeft: this.state.marginLeft }}>
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
                                        <label>Would you like to set up goal for practice minutes? </label>
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


                                        </div></div>):(<div></div>)}
                                        {/*}
                                        <div className="form-group checkboxstuff2foradd" >
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
                                            <div style={{ marginLeft: this.state.marginLeft }}>
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
                                    </div>) : (<div></div>)}*/ /*}

<div className="form-group" style={{ marginLeft: "30px" }}>
                                    <label>Do you want to track Star Points?</label>
                                    <select  htmlFor="starPoints" onChange={this.handleChangeforform} name="starPoints" id="starPoints">
                                        <option value=""></option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>

                                    </select>
                                    <p style={{color:"gray", fontSize:"14px", marginTop:"5px", width:"90%"}}>(Star Points help gamify student accountability. Students receive Star Points whenever they complete a goal or finish their homework.)</p>
                                </div>
                            </div>
                            
                        </div> 
                        <div>

                            <div className="fill1 columbized" >
                                {/*}

                                    <h2 style={{ marginTop: "25px", color:"gray" }}>Set Up Star Points For Student</h2>

                                    
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
                                *//*}
                                {/*}

                                <div style={{ alignSelf: "flexEnd", marginTop:"30px" }}>
                                <div onClick={this.done} className="huv rowss">skip</div>
                                    <div style={{ width: "35%", marginTop:"7px" }} className="form-group">
                                        <button onClick={this.done}
                                                className="btn btn-block backgroundColors"

                                        >
                                            Finish
                                            
                                    </button>
                                    </div>

                                    
                                    
                                </div>
                                <div style={{width:"200px", height:"20px", opacity:"0"}}>Spacer</div>


                            </div>
                        </div> 
                            
                                
                        </div>
                        
                        
                    </div>
                </div>
                </div>

*//*}
             
                          
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