import React, { Component } from "react";
import Progress from "../components/progress.js";
import Day from "../components/moreProgress.js";
import Points from "../components/moreProgress.js";
import GoalEdit from "../components/diagoal.js";
import AuthService from "../services/auth.service";
import Goal from "../components/showgoal.js";
import Checkedd2 from "../components/checkbox2.js";
import save from "../components/save.png";
import trash from "./trash.png";
import SetDay from "../components/setday.js";
import Short from "../components/short.js";
import moment from 'moment';
import leaf from "./leaf.png";
import Starpointz from "../components/starpointz.js"

//not much here but functionality will be added for the goals.
export default class Goals extends Component {
    constructor(props) {
        super(props);
        this.AddGoal = this.AddGoal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.goalClose = this.goalClose.bind(this);
        this.showGoal = this.showGoal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlegoal = this.handlegoal.bind(this);
        this.completeGoal = this.completeGoal.bind(this);
        
        this.showMainGoal = this.showMainGoal.bind(this);

        this.AddmainGoal = this.AddmainGoal.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.setday = this.setday.bind(this);
        this.setDays = this.setDays.bind(this);
        this.handlesetdayclose = this.handlesetdayclose.bind(this);
        
        this.handlegoalsClose = this.handlegoalsClose.bind(this);

        
        this.state = {
            progress: 5,
            style: "rotate(180deg)",
            Goal: false,
            showGoal: false,
            goals: [],
            description: "",
            goal: "",
            date: "",
            currentgoal: undefined,
            mainGoal: "",
            main:false,
            setdays: false,
            totalDays: this.props.totalDays,
        };
    }

    
    saveGoal(goal, main) {
        
        AuthService.savegoal(this.props.student, goal, main);
        window.location.reload();

    }
    deleteGoal(goal, main) {
        AuthService.deletegoal(this.props.student, goal, main);
        window.location.reload();
    }
    completeGoal(check, goal,main) {
        
        let complete = moment().subtract(10, 'days').calendar();
            AuthService.goalStatusChange(
                this.props.student,
                check,
                goal,
                main,
                complete,

            )
        window.location.reload();

    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
       
        

    }
    AddmainGoal(e) {
        this.setState({
            Goal: true,
            main: true,
        });

    }
    setday(e) {
        this.setState({
            setdays: true,
        });

    }
    AddGoal(e) {
        this.setState({
            Goal: true
        });

    }

    showGoal(goal) {
        this.setState({
            showGoal: true,
            currentgoal: goal,
        });

    }
    showMainGoal() {
        this.setState({
            showGoal: true,
            currentgoal: this.props.main,
        });

    }
    
    goalClose() {
        this.setState({
            Goal: false,
            main: false,
        });
    }

    handleClose() {
        this.setState({
            showGoal: false,
        });
    }

  
    handlegoalsClose(id, title, description) {

        let goalz = {
            title: title,
            description: description,
            _id: this.state.currentgoal._id
        }

        let ar = [];
        for (let i = 0; i < this.props.goals.length; i++) {
            if (this.props.goals[i]._id === goalz._id) {

                ar.push(goalz);
            }
            else {
                ar.push(this.props.goals[i]);

            }

        }
        console.log(ar);
        
        AuthService.AddGoals
            (
                this.props.student,
                false,
                ar
            );
            
        window.location.reload();


        



    };
    async handlegoal(e) {

        console.log("igothere");
        e.preventDefault();
        this.setState({
            Goal: false,
        });


        AuthService.AddGoal(
            this.props.student,
            this.state.main,
            this.state.goal,
            this.state.description,
            this.state.date,
        );

        this.setState({
            main: false,
        });


        window.location.reload();
    }
    handlesetdayclose() {
        this.setState({
            setdays: false,
        });
    }

    setDays() {
        this.setState({
            setdays: false,
            
        });
        AuthService.updateSetDays(this.props.student, this.state.totalDays);
        window.location.reload();
        
    }

    render() {
        return (

            <div className="fill1">
                

                {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main } role="student" />)}
                {this.state.showGoal && (<Goal Goal={this.state.currentgoal} handleClose={this.handleClose} role="teacher" handletheclose={this.handlegoalsClose} />)}

                {this.state.setdays && (<SetDay handleChange={this.handleChange} handleClose={this.setDays} handleClosing={this.handlesetdayclose} />)}
                {this.props.main ? (
                    <div className="fill1 checkboxstuff3" style={{ padding: "5px" }}>

                        <div className="centerized" style={{ marginBottom: "10px", borderRight: "1px solid gray", width: "45%", height: "100%" }}>
                            {this.props.main ?
                                
                                (<div style={{ width: "100%", height: "100%" }} ><div className="centerizeaa homeworkScroll" >
                                    <div><h2 style={{ marginBottom: "15px" }}>Progress</h2></div>
                                    <div style={{ marginBottom: "7px", marginTop: "20px", marginLeft: "20px" }}>
                                            <Progress goals={this.props.goals} main={this.props.main} />
                                            
                                            
                                        

                                       
                                            <div style={{ marginTop: "23px" }}>Goal Progress</div>
                                           

                                    </div>

                                    <div style={{ width: "200px" }}><Points day={false} role={this.props.role} /> </div>
                                    <div>
                                        {this.props.totalDays ?
                                            (<div style={{ width: "200px" }}>

                                                <Day role={this.props.role} day={true} daysPracticed={this.props.daysPracticed} totalDays={this.props.totalDays} setDays={this.setDays} open={this.setday} />
                                                <Day role={this.props.role} day={true} daysPracticed={this.props.daysPracticed} totalDays={this.props.totalDays} setDays={this.setDays} open={this.setday} /></div>)
                                            :

                                            (<div>
                                                {this.props.role === "student" ?
                                                    (<div><div>No Days Set by Teacher</div></div>) :
                                                    (<div><button style={{ width: "200px" }} className="btn btn-primary btn-block" value="submit" onClick={this.setday}>Set Days Practiced. </button></div>)
                                                }
                                            </div>)}
                                    </div>
                                </div></div>) : (<div></div>)
                                
                            }
                                </div>
                                    

                        <div className=" columbized4" style={{width:"55%", height: "100%"}} >





                            {
                                this.props.main ?
                                    (
                                        <div className="columbized fill2">

                                            <h2 style={{ marginBottom: "15px", marginLeft: "23px", marginTop: "5px", }}>Goals</h2>

                                            <div className="checkboxstuff1 rowss" style={{ marginLeft: "35px", width: "450px" }} >

                                                <div className="checkboxstuff2">
                                                    <Checkedd2 goal={this.props.main} goalStatusChange={this.completeGoal} main={true} />
                                                    <h2 className="huv" onClick={this.showMainGoal}><div>{this.props.main.title.length > 25 ? (<div><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div>{this.props.main.title}</div>)}</div></h2>
                                                </div>
                                                {this.props.role === "student" ? (
                                                    <div >
                                                    </div>) : (<div className="checkboxstuff1">
                                                        <div className="huv edit3b">
                                                            <img
                                                                src={save}
                                                                alt="download"
                                                                onClick={this.saveGoal.bind(this, this.props.main, true)}

                                                            />
                                                        </div>


                                                        <div className="huv edit3b">
                                                            <img
                                                                src={trash}
                                                                alt="delete"
                                                                onClick={this.deleteGoal.bind(this, this.props.main, true)}


                                                            />
                                                        </div>
                                                    </div>)}

                                            </div>


                                            <div className=" fill2" >
                                                <div style={{ marginLeft: "75px" }}>
                                                    {this.props.role === "student" ? (<div style={{ height: "250px" }}>
                                                        {this.props.goals ? (<div className="homeworkScroll">
                                                            {
                                                                this.props.goals.map((goal, index) =>

                                                                    <div className="checkboxstuff1 rowss" key={index} >

                                                                        <div className="checkboxstuff2">
                                                                            <div >
                                                                                <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                            </div>
                                                                            <div className="huv" onClick={this.showGoal.bind(this, goal)}> <div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                                        </div>


                                                                    </div>
                                                                )
                                                            }
                                                        </div>) : (
                                                                <div></div>)}

                                                    </div>) : (<div style={{ height: "250px" }}>{this.props.goals ? (<div className="homeworkScroll">
                                                        {
                                                            this.props.goals.map((goal, index) =>

                                                                <div className="checkboxstuff1 rowss" key={index} style={{ width: "350px" }} >

                                                                    <div className="checkboxstuff2">
                                                                        <div >
                                                                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                        </div>
                                                                        <div className="huv" onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                                    </div>
                                                                    <div className="checkboxstuff1">
                                                                        <div className="huv edit3b">
                                                                            <img
                                                                                src={save}
                                                                                alt="download"
                                                                                onClick={this.saveGoal.bind(this, goal, false)}

                                                                            />
                                                                        </div>
                                                                        <div className="huv edit3b">
                                                                            <img
                                                                                src={trash}
                                                                                alt="delete"
                                                                                onClick={this.deleteGoal.bind(this, goal, false)}


                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )
                                                        }
                                                        <div>
                                                            {this.props.role === "student" ? (<div></div>) : (<div style={{ width: "270px" }}>
                                                                <div className="btn  btn-block" style={{ marginTop: "10px", marginLeft: "20px" }} value="submit" onClick={this.AddGoal}><span className="checkboxstuff1" style={{ width: "250" }}>
                                                                    <img
                                                                        src={leaf}
                                                                        className="edita"

                                                                    />
                                                                    <p>+</p><p className="rowss huv">Supporting Goal</p>
                                                                </span></div>
                                                            </div>)}

                                                        </div>
                                                    </div>) : (
                                                            <div></div>)}</div>)}


                                                </div>

                                            </div>


                                        </div>

                                    ) : (
                                        <div className=" centerized" style={{ height: "100%" }}>
                                            <button className="btn btn-primary btn-block centerized" value="submit" onClick={this.AddmainGoal}>Add New Goals</button>
                                        </div>
                                    )
                            }







                        </div>



                    </div>

                ): (
                        <div className = " centerized" style = {{ height: "100%", width: "200px" }}>
                <button className="btn btn-primary btn-block centerized" value="submit" onClick={this.AddmainGoal}>Add New Goals</button>
            </div>)}
                




                </div>

            
        );
    }
}