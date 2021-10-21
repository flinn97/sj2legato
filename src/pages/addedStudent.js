import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
import GoalEdit from "../components/diagoal.js";
import Homework from "../components/homeworks";
import ShowHomework from "../components/showHomework";
import Goal from "../components/showgoal.js";
import trash from "./trash.png";






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

        };
    }
    //handles all changes with state.
    handleChange = (event, news) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })

        
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
            HWtempID: this.state.HWtempID



        }
        newarr.push(newHW);
        this.setState({
            homeworks: newarr,
        })
        this.handleHomeworkClose();
    }

      done() {
          AuthService.AddGoals(this.props.state.realtimestudent._id, false, this.state.goals)


          AuthService.AddGoal(this.props.state.realtimestudent._id, true, this.state.maingoal, this.state.maindescription, this.state.maindate,) 
         AuthService.AddHomeworks(this.props.state.realtimestudent._id, this.state.homeworks)
          AuthService.checkboxes(this.props.state.realtimestudent._id, this.state.checkbox);
          AuthService.updateSetDays(this.props.state.realtimestudent._id, this.state.days);
          AuthService.doneUpdatingnewStudent(this.props.state.realtimestudent._id, true)
             

        window.location.reload();


        

        
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
                    <div className="diapicbox4a" style={{ zIndex: "1010" }}>

                        {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main} />)}

                        {this.state.Homework && (<Homework handleHomework={this.handleHomework} handleChange={this.handlehwChange} handleClose={this.handleHomeworkClose} practice={this.state.practice} research={this.state.research} assignment={this.state.assignment} />)}
                        {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} role="teacher" handleChange={this.handleChange} edited={this.edited} handletheclose={this.handletheclose}/> )}
                        {this.state.showGoals && (<Goal Goal={this.state.currentgoal} handleClose={this.handlethegoalclose} role="teacher" handleChange={this.handleChange} handletheclose={this.handlegoalsClose}/>)}


                        {this.state.next ? (<div>

                            <div className="fill1 columbized" >

                                <h1 style={{ margin: "0 auto" }}>Set Up Homework For Student</h1>


                                <div className="form-group" >
                                    <label>How many days should this student practice every week?</label>
                                    <select style={{ width: "40%" }} htmlFor="checkbox" onChange={this.handleChange} name="checkbox" id="checkbox">
                                        <option value=""></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="0">I don't want this student to have practice checkboxes</option>
                                    </select>
                                </div>
                                
                                <div className="form-group" >
                                    <label htmlFor="lastName">How many days this year would be a good goal for this student to practice?</label>
                                    <input
                                        style={{ width: "40%" }}
                                        type="text"
                                        className="form-control"
                                        id="days"

                                        onChange={this.handleChange}
                                        name="days"
                                    />
                                </div>
                                <div style={{ height: "190px" }}>
                                    {this.state.homeworks.map((homework, index) =>
                                        <div className="checkboxstuff4 " key={index} >
                                            <p className="huv rowss" onClick={this.showHomework.bind(this, homework)}> {homework.title}</p>
                                            <img
                                                src={trash}
                                                alt="delete"
                                                onClick={this.deleteHomework.bind(this, homework)}
                                                className="huv edit3"
                                            />

                                        </div>
                                    )}
                                </div>

                                <div >
                                    <div className="form-group">
                                        <button
                                            onClick={this.Homeworkfunc}
                                            className="btn btn-primary btn-block"
                                        >

                                            Add Homework
                                        </button>
                                    </div>
                                </div>

                                <div style={{alignSelf: "flexEnd"}}>

                                <div style={{ width: "35%" }} className="form-group">
                                    <button onClick={this.done}
                                        className="btn btn-primary btn-block"
                                        
                                    >
                                        Finish
                                        
                                    </button>
                                </div>

                                <div onClick={this.skip} className="huv rowss">Back</div>

                                    </div>

                                
                            </div>
                        </div>) :
                            (
                            
                                <div className="fill1 centerizeaa" >

                                <h1 style={{ margin: "0 auto" }}>Set Goals For Student</h1>


                                <div style={{ marginTop: "40px" }} className="form-group" >
                                    <label htmlFor="">Set Main Goal For Student</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="maingoal"
                                        value={this.state.maingoal}
                                        onChange={this.handleChange}
                                        validations={[required]}
                                    />
                                    </div>

                                <div className="form-group" >
                                        <label htmlFor="maindescription">Goal Description</label>
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

                                    <div style={{height:"300px"}}>
                                    {this.state.goals.map((goal, index) =>
                                        <div className="checkboxstuff4" key={index} >
                                            <p className="huv rowss" onClick={this.showGoal.bind(this, goal)} >{goal.title} </p>
                                            <img
                                                src={trash}
                                                alt="delete"
                                                onClick={this.deleteGoal.bind(this, goal)}
                                                className="huv edit3"

                                            />

                                        </div>
                                    )}
                                </div>

                                <div >
                                    <div className="form-group">
                                        <button
                                            onClick={this.Goalfunc}
                                            className="btn btn-primary btn-block"
                                        >

                                            Add a Supporting Goal
                                        </button>
                                    </div>
                                </div>


                                    <div style={{alingSelf:"flexEnd"}}>
                                <div style={{ width: "35%" }} className="form-group">
                                        <button onClick={this.next}
                                        className="btn btn-primary btn-block"
                                    >
                                        
                                        Save
                                    </button>
                                </div>

                                {this.state.message && (
                                    <div className="form-group">
                                        <div className="alert alert-danger" role="alert">
                                            {this.state.message}
                                        </div>
                                    </div>
                                )}


                                        <div onClick={this.skip} className="huv rowss">skip</div>
                                    </div>
                            </div>
                            )}
                        
                    </div>
                </div>
                </div>


             
                          
        );
    }
}