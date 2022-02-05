import React, { Component } from "react";
import Progress from "../components/progress.js";
import Day from "../components/moreProgress.js";
import Points from "../components/moreProgress.js";
import GoalEdit from "../components/diagoal.js";
import AuthService from "../services/auth.service";
import Goal from "../components/showgoal.js";
import Checkedd2 from "../components/checkbox2.js";
import save from "../components/save.png";
import trash from "./Trash1.png";
import SetDay from "../components/setday.js";
import Short from "../components/short.js";
import moment from 'moment';
import leaf from "./leaf.png";
import edit from "./edit.png";
import EditProgress from "../components/editProgress.js";
import Starpointz from "../components/starpointz.js";
import Archiving from "../components/archiving.js";

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
        this.cleartimepracticed = this.cleartimepracticed.bind(this);
        this.cleartotaldays = this.cleartotaldays.bind(this);

        
        this.showMainGoal = this.showMainGoal.bind(this);
        this.editalltheProgress = this.editalltheProgress.bind(this);

        this.AddmainGoal = this.AddmainGoal.bind(this);
        this.saveGoal = this.saveGoal.bind(this);
        this.deleteGoal = this.deleteGoal.bind(this);
        this.setday = this.setday.bind(this);
        this.setDays = this.setDays.bind(this);
        this.handlesetdayclose = this.handlesetdayclose.bind(this);
        
        this.handlegoalsClose = this.handlegoalsClose.bind(this);
        this.editProgress = this.editProgress.bind(this);
        this.handleProgressChange = this.handleProgressChange.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        
        
        
        this.state = {
            archiving:false,
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
            currentgoalforarchive: undefined,
            currentmainforarchive: false,
            


            totalTime: this.props.totalTime,
            totalDays: this.props.totalDays,
            editProgress: false,
            starPoints: this.props.starPoints,
            timebool: this.props.timebool,
            daysbool: this.props.daysbool,
            temptimegoal: false,
            temppracticegoal: false,
            tempsmonths: "",
            tempemonths: "",
            temptsmonths: "",
            temptemonths: "",
            borderRight: "1px solid gray",
            borderBottom: "none",
            height:"100%",
            width: "70%",
            marginLeft: "50px",
            alignself: "",
            marginLeft1: "23px",
            marginLeft2: "35px",
            marginLeft3: "75px",
            widthgoal: "400px",
            widthgoals: "420px",
            maingoal: {},

            widthmgoal: "450px" 

        };
    }
    archiving(goal, main){
        this.setState({
            currentgoalforarchive: goal,
            currentmainforarchive: main,
            archiving: !this.state.archiving
        })
    }
    updateWindowDimensions() {
        var iOS = 
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream;
    
    if(parseInt(window.innerWidth) <= 500)
    this.setState({ 
        widthgoal: "200px",
        widthgoals: "250px",
        widthmgoal: "265px" 
        
       
    });
        if(parseInt(window.innerWidth) <= 800){
        this.setState({ 
            borderRight: "none",
            borderBottom: "1px solid gray",
            height:"900px",
            width: "100%",
            marginLeft: "0px",
            alignself: "center",
            marginLeft1: "3px",
            marginLeft2: "0px",
            marginLeft3: "15px"
            
           
        });
        }
        if(parseInt(window.innerWidth) <= 1000){
        if(parseInt(window.innerWidth) > 800){
        this.setState({ 
            borderRight: "1px solid gray",
            borderBottom: "none",
            height:"100%",
            width: "75%",
            marginLeft: "0px",
            alignself: "center",
            marginLeft1: "0px",
            marginLeft2: "5px",
            marginLeft3: "35px"
            
           
        });}
     }
     if (iOS){
        this.setState({ 
           
            height:"500px",
            
            
           
        });
    }
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions());
    }
    editProgress() {
        
        this.setState({
            editProgress: !this.state.editProgress,
            

            

        })
        
        

    }
    cleartimepracticed(){
        AuthService.cleartimepracticed(this.props.student)
    }
    cleartotaldays(){
        AuthService.cleartotaldays(this.props.student)
    }
    editalltheProgress() {



        AuthService.editalltheProgress(this.props.student,
             

            this.state.temptimegoal,
            this.state.temppracticegoal,
            this.state.totalTime,
            this.state.totalDays,
            this.state.starPoints,
            this.state.tempsmonths,
            this.state.tempemonths,
            this.state.temptsmonths,
            this.state.temptemonths,
            this.state.daysbool,
            this.state.timebool

        )
       // window.location.reload();
       this.props.splashscreen()
        
        
        

    }
    
    
     saveGoal(goal, main) {
        
        
        AuthService.savegoal(this.props.student, this.state.currentgoalforarchive, this.state.currentmainforarchive);
        let ar = [];
        
            
            
            
            
            for (let i =0; i<this.props.MainGoals.length; i ++){
                if(this.props.MainGoals[i]._id !== this.state.currentgoalforarchive._id){
                  
                    ar.push(this.props.MainGoals[i])
                }

            }
            console.log(ar);
            AuthService.newMainGoal(
                this.props.student,
                ar
            )

           
            
        

        //window.location.reload();
        this.props.splashscreen()

    }
    deleteGoal(goal, main) {

        console.log(goal);
        let ar = [];
        if (main){
            
            
            
            
            for (let i =0; i<this.props.MainGoals.length; i ++){
                if(this.props.MainGoals[i]._id !== goal._id){
                  
                    ar.push(this.props.MainGoals[i])
                }

            }
           
            
        }
        else{
           
           
            for (let i =0; i<this.props.MainGoals.length; i++){
                let maingoal = this.props.MainGoals[i];
                let arr = [];
                for (let i =0; i < maingoal.mainGoal.goals.length; i++){
                    console.log(maingoal.mainGoal.goals[i]._id)
                    console.log(goal._id)
                    if( maingoal.mainGoal.goals[i]._id !== goal._id){
                        
                        arr.push(maingoal.mainGoal.goals[i])
                    }

                }
                maingoal.mainGoal.goals= arr;
                ar.push(maingoal);
               

            }
           
            
        }
        console.log(ar);
         AuthService.newMainGoal(
         this.props.student,
         ar
     )
    this.props.splashscreen();
        //AuthService.deletegoal(this.props.student, goal, main);
        //window.location.reload();
        //this.props.splashscreen()
    }
    async completeGoal(check, goal,main) {
        let sp = "";
        let pass = false;
        let npass= false;
        let daystreak= parseInt(this.props.daystreak)+1;
        let complete = moment().subtract(10, 'days').calendar();
        if(check){
        
            if(main){
                
                sp = (parseInt(this.props.starpoints) + (100* daystreak)).toString();
    
                
                if (parseInt(sp) >= parseInt(this.props.spGoal)){
                    pass= true;
    
                }
            }
            else{
                sp =(parseInt(this.props.starpoints) + (50* daystreak)).toString();
    
                
                if (parseInt(sp) >= parseInt(this.props.spGoal)){
                    pass= true;
    
                }
            }
            let goalcomplete;
        let ar=[]
        if(main){
            
            goalcomplete = {mainGoal:{
                complete: true,
                completed: complete,
                title: goal.mainGoal.description,
                description: goal.mainGoal.description,
                goals: goal.mainGoal.goals

            },
            _id: goal._id
        }
        
        for(let i =0;i< this.props.MainGoals.length; i++){
            if(this.props.MainGoals[i]._id===goalcomplete._id){
                ar.push(goalcomplete)
            }
            else{
                ar.push(this.props.MainGoals[i])
            }
            
        }
        }
        else{
            goalcomplete={
                complete: true,
                completed: complete,
                title: goal.title,
                description: goal.description,
                _id: goal._id
            }
            for (let i =0; i<this.props.MainGoals.length; i++){
                let maingoal = this.props.MainGoals[i];
                let arr = [];
                for (let i =0; i < maingoal.mainGoal.goals.length; i++){
                    if( maingoal.mainGoal.goals[i]._id === goal._id){
                        arr.push(goalcomplete)
                    }
                    else{
                        arr.push(maingoal.mainGoal.goals[i])
                    }

                }
                maingoal.mainGoal.goals= arr;
                ar.push(maingoal);
               

            }
        }
        
        
        
        

        AuthService.newMainGoal(
            this.props.student,
            ar
        )
        }
        else{
            if(main){
                
                sp = (parseInt(this.props.starpoints) - (100* daystreak)).toString();
    
                
                if (parseInt(sp) <= 0){
                    pass= true;
                    npass=true;
    
                }
            }
            else{
                console.log(this.props.starpoints)
                sp =(parseInt(this.props.starpoints) - (50* daystreak)).toString();
                console.log(sp)
    
                
                if (parseInt(sp) <= 0){
                    pass= true;
                    npass=true;
    
                }
            }
            let goalcomplete;
        let ar=[]
        if(main){
            console.log(goal);
            goalcomplete = {mainGoal:{
                complete: false,
                completed: "",
                title: goal.mainGoal.description,
                description: goal.mainGoal.description,
                goals: goal.mainGoal.goals

            },
            _id: goal._id
        }
        console.log(goalcomplete);
        
        for(let i =0;i< this.props.MainGoals.length; i++){
            if(this.props.MainGoals[i]._id===goalcomplete._id){
                ar.push(goalcomplete)
            }
            else{
                ar.push(this.props.MainGoals[i])
            }
            
        }
        }
        else{
            goalcomplete={
                complete: false,
                completed: "",
                title: goal.title,
                description: goal.description,
                _id: goal._id
            }
            for (let i =0; i<this.props.MainGoals.length; i++){
                let maingoal = this.props.MainGoals[i];
                let arr = [];
                for (let i =0; i < maingoal.mainGoal.goals.length; i++){
                    if( maingoal.mainGoal.goals[i]._id === goal._id){
                        arr.push(goalcomplete)
                    }
                    else{
                        arr.push(maingoal.mainGoal.goals[i])
                    }

                }
                maingoal.mainGoal.goals= arr;
                ar.push(maingoal);
               

            }
        }
        
        
        
        console.log(ar);

         AuthService.newMainGoal(
            this.props.student,
            ar
        )
        }


        
        
        console.log(check, main, complete, sp, this.props.level, this.props.spGoal, pass, npass)
        console.log(goal)
        

            AuthService.goalStatusChange(
                this.props.student,
                check,
                goal,
                main,
                complete,
                this.props.level, sp, this.props.spGoal, pass, npass
                

             )
       
        //window.location.reload();
        this.props.splashscreen()

    }

    handleProgressChange(event) {
        const { name, value } = event.target
        if (value !== "no change") {


            if (name === "tempstartpoints") {
                this.setState({
                    spisedited: true,
                })
            }
            if (name === "temppracticegoal") {
                this.setState({
                    goalisedited: true,
                })
            }
            if (name === "tempdays") {
                if (value !== "") {
                    this.setState({
                        dayisedited: true,
                    })
                }
                else {
                    this.setState({
                        dayisedited: false,
                    })
                }
            }
            if (name === "tempsmonths") {
                this.setState({
                    smonthsisedited: true,
                })
            }
            if (name === "tempemonths") {
                this.setState({
                    emonthsisedited: true,
                })
            }
            if (name === "temptimegoal") {
                this.setState({
                    timegoalisedited: true,
                })
            }
            if (name === "tempmin") {
                if (value !== "") {
                    this.setState({
                        minisedited: true,
                    })
                }
                else {
                    this.setState({
                        minisedited: false,
                    })
                }
            }
            if (name === "temptsmonths") {
                this.setState({
                    tsmonthsisedited: true,
                })
            }
            if (name === "temptemonths") {
                this.setState({
                    temonthsisedited: true,
                })
            }
            
            this.handleChange(event);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target


        this.setState({
            [name]: value,
        })

        if (value === "true") {
            this.setState({
                [name]: true,
            })
        }
        else if (value === "false") {
            this.setState({
                [name]: false,
            })
        }


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
    AddGoal(goal) {
        console.log(goal);
        this.setState({
            Goal: true,
            maingoal: goal
            
        });

    }

    showGoal(goal) {
        this.setState({
            showGoal: true,
            currentgoal: goal,
        });

    }
    showMainGoal(maingoal) {
        console.log(maingoal);
        let main = {
            main: maingoal.mainGoal,
            _id: maingoal._id,
            maingoal: true,
        }
        this.setState({
            showGoal: true,
            currentgoal: main,
            
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

  
    handlegoalsClose(id, title, description, main) {
        
        let ar = [];
        if (main){
            
            
            let maingoal = {
                title: title,
                description: description,
                complete: this.state.currentgoal.complete,
                completed: this.state.currentgoal.completed,
                goals: this.state.currentgoal.main.goals
            }
            console.log(maingoal);
            for (let i =0; i<this.props.MainGoals.length; i ++){
                if(this.props.MainGoals[i]._id === this.state.currentgoal._id){
                    let newmain={
                        mainGoal: maingoal,
                        id: this.state.currentgoal._id
                    }
                    ar.push(newmain)
                }
                else{
                    ar.push(this.props.MainGoals[i])
                }

            }
           
            
        }
        else{
            let goal = {
                title: title,
                description: description,
                complete: this.state.currentgoal.complete,
                completed: this.state.currentgoal.completed,
                _id: this.state.currentgoal._id
            }
            console.log(this.props.MainGoals);
            console.log(goal);

            for (let i =0; i<this.props.MainGoals.length; i++){
                let maingoal = this.props.MainGoals[i];
                let arr = [];
                for (let i =0; i < maingoal.mainGoal.goals.length; i++){
                    if( maingoal.mainGoal.goals[i]._id === goal._id){
                        arr.push(goal)
                    }
                    else{
                        arr.push(maingoal.mainGoal.goals[i])
                    }

                }
                maingoal.mainGoal.goals= arr;
                ar.push(maingoal);
               

            }
           
            
        }
        AuthService.newMainGoal(
        this.props.student,
        ar
    )
    this.props.splashscreen()

        /*
        let goalz = {
            title: title,
            description: description,
            _id: this.state.currentgoal._id
        }
        if (main) {
            AuthService.AddGoals
                (
                    this.props.student,
                    true,
                    goalz
                );

        }
        else {

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
        }
        //window.location.reload();
        

        */



    };
    async handlegoal() {

        let goal;
        let ar = []
        
       
        if(this.state.main){
             ar = this.props.MainGoals;

         goal =  {mainGoal: {
            title: this.state.goal,
            description: this.state.description,
            complete: false,
            completed: "",
            goals:[]
         }
        }
         
            

        
        ar.push(  goal);

    }
    
    else{
        
        goal = {
            title: this.state.goal,
            description: this.state.description,
            complete: false,
            completed: "",
            
            

        }
        let maingoal= this.state.maingoal;
        maingoal.goals.push(goal)
        
        for(let i = 0; i < this.props.MainGoals.length; i++){
            if (this.props.MainGoals[i].title ===this.state.maingoal.title){
                ar.push(maingoal);

            }
            else{
                ar.push(this.props.MainGoals[i])
            }

        }


    }
    AuthService.newMainGoal(
        this.props.student,
        ar
    )
    
    
        


        /*AuthService.AddGoal(
            this.props.student,
            this.state.main,
            this.state.goal,
            this.state.description,
            this.state.date,
        );
*/
        this.setState({
            main: false,
        });
       


        //window.location.reload();
        this.props.splashscreen()
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
        this.props.splashscreen()
        //window.location.reload();
        
    }

    render() {
        return (

            <div className="fill1">
                
                
                {this.state.editProgress && (<EditProgress state={this.state} editalltheProgress={this.editalltheProgress} handleChange={this.handleProgressChange} handleClose={this.editProgress}
                    tempstartpoints={ this.state.tempstartpoints }
                    temppracticegoal={this.state.temppracticegoal}
                    cleartimepracticed={this.cleartimepracticed}
                    cleartotaldays={this.cleartotaldays}
                    temptimegoal={this.state.temptimegoal}
                    

                />)}

                                {this.state.archiving && (<Archiving handlegoal={this.saveGoal}  handleClose={this.archiving} main={this.state.main } />)}


                {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main } />)}
                {this.state.showGoal && (<Goal Goal={this.state.currentgoal} handleClose={this.handleClose} role="teacher" handletheclose={this.handlegoalsClose} />)}

                {this.state.setdays && (<SetDay handleChange={this.handleChange} handleClose={this.setDays} handleClosing={this.handlesetdayclose} />)}
                
                    <div className="fill1" >
                        {this.props.tooSmall?(<div className=" fill1 checkboxstuff3tocolumn" style={{ padding: "5px" }}>

                        {this.props.iwantgoals? (

                        <div className="centerized" style={{height:this.state.height, borderRight: this.state.borderRight, width: this.state.width, borderBottom: this.state.borderBottom }}>
                            
                                
                                <div style={{ width: "100%", height: "100%" }} ><div className="centerizeaa " >
                                    <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: "15px" }}><h2 >Progress</h2> <div className="huv" onClick={this.editProgress}>
                                       
                                        <img
                                            src={edit}
                                            alt="edit"
                                            style={{width: "25px", height: "25px", marginRight: "10px"}}

                                        />
                                    </div></div>
                                    {this.props.tooSmall?(<div>
                                        {this.props.thousand?(<div style={{ marginBottom: "7px", marginTop: "20px", marginLeft: "20px" }}>
                                       
                                       <Progress goals={this.props.MainGoals} />
                                       
                                       
                                       
                                       
                                       <div className="checkboxstuff1a " style={{ width: "95%" }}>
                                       <div style={{ marginTop: "23px" }}><b>Goal Progress</b></div>
                                       {this.props.timebool?(
                                           <div style={{ flexDirection: "colomn" }}>
                                           <div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
                                           {!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
                                                </div>)}  
                                           
                                       
                                           min</div>
                                       
                                           
                                           <div><b>Time Practiced</b></div>
                                       
                                       </div>
                                       ):(<div></div>)}
                                       
                                       {this.props.daysbool?(
                                           <div style={{ flexDirection: "colomn" }}>
                                       
                                           <div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>
                                       
                                       <div> <b>Practice Days</b> </div>
                                       </div>
                                       ):(<div></div>)}
                                                                                   </div>
                                       </div>):(<div style={{ marginBottom: "7px", marginTop: "20px", display:"flex", flexDirection:"column", alignItems:"center" }}>
                                            <Progress goals={this.props.MainGoals} />
                                            <div style={{  display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginTop: "10px" }}>
                                       
                                        
                                        
                                        {this.props.daysbool?(
                                            <div style={{ flexDirection: "colomn" }}>

                                            <div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>

                                        <div> <b>Practice Days</b> </div>
                                        </div>
                                        ):(<div></div>)}
                                        {this.props.timebool?(
                                            <div style={{ flexDirection: "colomn" }}>
                                            <div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
                                            {!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
                                                 </div>)}  
                                            

                                            min</div>

                                            
                                            <div><b>Time Practiced</b></div>

                                        </div>
                                        
                                        ):(<div></div>)}
                                        </div>
                                        
                                        
                                    

                                    
                                </div>)}

                                        
                                



                                </div>):(

<div style={{ marginBottom: "7px", marginTop: "20px", marginLeft: "20px" }}>
                                       
<Progress goals={this.props.goals} main={this.props.main} />




<div className="checkboxstuff1a " style={{ width: "95%" }}>
<div style={{ marginTop: "23px" }}><b>Goal Progress</b></div>
{this.props.timebool?(
    <div style={{ flexDirection: "colomn" }}>
    <div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
    {!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
         </div>)}  
    

    min</div>

    
    <div><b>Time Practiced</b></div>

</div>
):(<div></div>)}

{this.props.daysbool?(
    <div style={{ flexDirection: "colomn" }}>

    <div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>

<div> <b>Practice Days</b> </div>
</div>
):(<div></div>)}
                                            </div>
</div>
                                    )}
                                   
                                    
                                    {this.props.starPoints?(
                                                                            <div style={{ width: "200px", marginLeft: this.state.marginLeft, alignSelf:this.state.alignself }}><Points day={false} role={this.props.role} starpoints={this.props.starpoints} spGoal={this.props.spGoal}/> </div>

                                    ):(<div></div>)}

                                    
                                    {this.props.totalDays !== "" ?
                                                            (<div style={{ marginLeft: this.state.marginLeft , width: "200px", alignSelf:this.state.alignself }}>

                                                            <Day role={this.props.role} day={true} daysPracticed={this.props.daysPracticed} totalDays={this.props.totalDays} setDays={this.setDays} open={this.setday} />
                                                                </div>
                                                                )
                                                        
                                                                :

                                                            (<div className="centerized">
                                                            
                                                                <div style={{opacity:"0"}}>space</div> 
                                                                
                                                            
                                                        </div>)}

                                                        {this.props.totalTime !== "" ?(
                                                           <div style={{ marginLeft: this.state.marginLeft , width: "200px", alignSelf:this.state.alignself, }}>

                                                           <Day role={this.props.role} time={true} timePracticed={this.props.timePracticed} totaltime={this.props.totalTime} setDays={this.setDays} open={this.setday} /></div>

                                                        ):(<div></div>)}
                                                        
                                        
                                    
                                    
                                </div></div>
                                
                            
                                </div>
                                    ):(

                        <div className=" columbized4 fill1" >





                            {
                                this.props.main ?
                                    (
                                        <div className="columbized fill1">
                                            <div style={{ marginBottom: "15px", marginLeft: this.state.marginLeft1, marginTop: "0px", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                                            <h2 >Goals</h2>
                                            <button  className="btn  btn-block" value="submit" onClick={this.AddmainGoal} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "100px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Goal</button>

                                            </div>
                                            {this.props.MainGoals ?(<div className="homeworkScroll1" >
                                            {this.props.MainGoals.map((main, index) =>
                                            <div key={index} >
                                                <div >
                        <div className="checkboxstuff2" style={{display:'flex', flexDirection:"row", justifyContent:"space-between",}}>
                            <div style={{display:'flex', flexDirection:"row", alignItems:"center"}}>
                        <Checkedd2 goal={main} goalStatusChange={this.completeGoal} main={true}  />
                        
                        {this.props.tooSmall?(<h4 style={{marginBottom:"10px"}} className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><span>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</span></h4>):(<h2 className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h2>)}
                        </div>
                        <div className="checkboxstuff1">
                                <div className="huv edit3">
                                    <img
                                        src={save}
                                        alt="download"
                                        onClick={this.archiving.bind(this, main, true )}

                                        //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                    />
                                </div>


                                <div className="huv edit3">
                                    <img
                                        src={trash}
                                        alt="delete"
                                        onClick={this.deleteGoal.bind(this, main, true)}
                                        style={{ width: "15px", height: "15px", opacity: ".5" }}


                                    />
                                </div>
                            </div>
                            


                    </div>
                    </div>
                    {main.mainGoal.goals.map((goal, index) =>
                    <div className="checkboxstuff1 " key={index}  style={{ width: this.state.widthgoal, marginLeft: "30px" }} >
                        

                    <div className="checkboxstuff2">
                        <div >
                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                        </div>
                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                    </div>
                    <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                        <div className="huv edit3b1">
                            {/* <img
                                src={save}
                                alt="download"
                                onClick={this.archiving.bind(this, goal, false)}
                                //onClick={this.saveGoal.bind(this, goal, false)}

                            /> */}
                        </div>
                        <div className="huv edit3b1">
                            <img
                                src={trash}
                                alt="delete"
                                onClick={this.deleteGoal.bind(this, goal, false)}
                                style={{ width: "15px", height: "15px", opacity:".5" }}


                            />
                        </div>
                    </div>

                </div>
                    
                    )}
                    <div className="btn  btn-block" style={{ margin:"0 auto", marginTop: "10px",  display:'flex', flexDirection:'row', justifyContent:'center'}} value="submit" onClick={this.AddGoal.bind(this, main.mainGoal)}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
        src={leaf}
        className="edita"
        style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div>
                    </div>
                        
                        )
                        }
                            
                            </div>):(<div></div>)}
                                            {/* <div className="checkboxstuff1 " style={{ marginLeft: this.state.marginLeft2, width: this.state.widthmgoal }} >

                                                <div className="checkboxstuff2">
                                                    <Checkedd2 goal={this.props.main} goalStatusChange={this.completeGoal} main={true} />
                                                    {this.props.tooSmall?(

<h4 className="huv rowss" onClick={this.showMainGoal}><div>{this.props.main.title.length > 25 ? (<div><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div>{this.props.main.title}</div>)}</div></h4>

                                                    ):(

<h2 className="huv rowss" onClick={this.showMainGoal}><div>{this.props.main.title.length > 25 ? (<div><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div>{this.props.main.title}</div>)}</div></h2>

                                                    )}



                                                </div>
                                                {this.props.role === "student" ? (
                                                    <div >
                                                    </div>) : (<div className="checkboxstuff1">
                                                        <div className="huv edit3b">
                                                            <img
                                                                src={save}
                                                                alt="download"
                                                                onClick={this.archiving.bind(this, this.props.main, true )}

                                                                //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                                            />
                                                        </div>


                                                        <div className="huv edit3b">
                                                            <img
                                                                src={trash}
                                                                alt="delete"
                                                                onClick={this.deleteGoal.bind(this, this.props.main, true)}
                                                                style={{ width: "15px", height: "15px", opacity: ".5" }}


                                                            />
                                                        </div>
                                                    </div>)}

                                            </div>


                                            <div className=" fill2" >
                                                <div style={{ marginLeft: this.state.marginLeft3 }}>
                                                    {this.props.role === "student" ? (<div style={{ height: "265px" }}>
                                                        {this.props.goals ? (<div className="homeworkScroll1">
                                                            {
                                                                this.props.goals.map((goal, index) =>

                                                                    <div className="checkboxstuff1 " key={index} >

                                                                        <div className="checkboxstuff2">
                                                                            <div >
                                                                                <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                            </div>
                                                                            <div className="huv rowss" style={{marginBottom:"10px"}}  onClick={this.showGoal.bind(this, goal)}> <div >{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                                        </div>


                                                                    </div>
                                                                )
                                                            }
                                                        </div>) : (
                                                                <div></div>)}

                                                    </div>) : (<div style={{ height: "275px", width:this.state.widthgoals}}>{this.props.goals ? (<div className="homeworkScroll1">
                                                        {
                                                            this.props.goals.map((goal, index) =>

                                                                <div className="checkboxstuff1 " key={index} style={{ width: this.state.widthgoal }} >

                                                                    <div className="checkboxstuff2">
                                                                        <div >
                                                                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                        </div>
                                                                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                                    </div>
                                                                    <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                                                                        <div className="huv edit3b1">
                                                                            <img
                                                                                src={save}
                                                                                alt="download"
                                                                                onClick={this.archiving.bind(this, goal, false)}
                                                                                //onClick={this.saveGoal.bind(this, goal, false)}

                                                                            />
                                                                        </div>
                                                                        <div className="huv edit3b1">
                                                                            <img
                                                                                src={trash}
                                                                                alt="delete"
                                                                                onClick={this.deleteGoal.bind(this, goal, false)}
                                                                                style={{ width: "15px", height: "15px", opacity:".5" }}


                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )
                                                        }
                                                        <div>
                                                            {this.props.role === "student" ? (<div></div>) : (<div style={{ width: "230px" }}>
                                                            {this.props.goals.length >=5?(<div></div>):(

<div className="btn  btn-block" style={{ marginTop: "10px", marginLeft: "20px" }} value="submit" onClick={this.AddGoal}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
        src={leaf}
        className="edita"
        style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div>
                                                            )}
                                                                
                                                            </div>)}

                                                        </div>
                                                       
                                                    </div>) : (
                                                            <div></div>)}</div>)}
                                                             


                                                </div>

                                            </div> */}


                                        </div>

                                    ) : (
                                        <div className="fill1">{this.props.goals.length!==0?(
                                            <div className="columbized fill2">

                                            
                                            <div style={{ marginBottom: "15px", marginLeft: "23px", marginTop: "5px",  display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                                            <h2 >Goals</h2>
                                            <button style={{ background: "#696eb5", height: "45px", color: "#F0F2EF", width: "150px", }} className="btn  btn-block centerized" value="submit" onClick={this.AddmainGoal}>+ Goal</button>

                                            </div>
                                            {this.props.MainGoals ?(<div className="homeworkScroll1" >
                                            {this.props.MainGoals.map((main, index) =>
                                            <div key={index} >
                                                <div >
                        <div className="checkboxstuff2" style={{display:'flex', flexDirection:"row", justifyContent:"space-between", width:"90%"}}>
                            <div style={{display:'flex', flexDirection:"row"}}>
                        <Checkedd2 goal={main} goalStatusChange={this.completeGoal} main={true}  />
                        
                        {this.props.tooSmall?(<h4 className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h4>):(<h2 className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h2>)}
                        </div>
                        <div className="checkboxstuff1">
                                <div className="huv edit3">
                                    <img
                                        src={save}
                                        alt="download"
                                        onClick={this.archiving.bind(this, main, true )}

                                        //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                    />
                                </div>


                                <div className="huv edit3">
                                    <img
                                        src={trash}
                                        alt="delete"
                                        onClick={this.deleteGoal.bind(this, main, true)}
                                        style={{ width: "15px", height: "15px", opacity: ".5" }}


                                    />
                                </div>
                            </div>
                            


                    </div>
                    </div>
                    {main.mainGoal.goals.map((goal, index) =>
                    <div className="checkboxstuff1 " key={index}  style={{ width: this.state.widthgoal, marginLeft: "68px" }} >
                        

                    <div className="checkboxstuff2">
                        <div >
                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                        </div>
                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                    </div>
                    <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                        <div className="huv edit3b1">
                            {/* <img
                                src={save}
                                alt="download"
                                onClick={this.archiving.bind(this, goal, false)}
                                //onClick={this.saveGoal.bind(this, goal, false)}

                            /> */}
                        </div>
                        <div className="huv edit3b1">
                            <img
                                src={trash}
                                alt="delete"
                                onClick={this.deleteGoal.bind(this, goal, false)}
                                style={{ width: "15px", height: "15px", opacity:".5" }}


                            />
                        </div>
                    </div>

                </div>
                    
                    )}
                    <div className="btn  btn-block" style={{ marginTop: "10px", marginLeft: "90px" }} value="submit" onClick={this.AddGoal.bind(this, main.mainGoal)}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
        src={leaf}
        className="edita"
        style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div>
                    </div>
                        
                        )
                        }
                            
                            </div>):(<div></div>)}

                                           

                                            {/* <div className=" fill2" >
                                                <div style={{ marginLeft: "75px" }}>
                                                    {this.props.role === "student" ? (<div style={{ height: "265px" }}>
                                                        {this.props.goals ? (<div className="homeworkScroll1">
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

                                                    </div>) : (<div style={{ height: "275px" }}>{this.props.goals ? (<div className="homeworkScroll1">
                                                        {
                                                            this.props.goals.map((goal, index) =>

                                                                <div className="checkboxstuff1 rowss" key={index} style={{ width: this.state.widthgoals}} >

                                                                    <div className="checkboxstuff2">
                                                                        <div >
                                                                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                        </div>
                                                                        <div className="huv" onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                                    </div>
                                                                    <div className="checkboxstuff1" style={{marginBottom:"5px"}}>
                                                                        <div className="huv edit3b">
                                                                            <img
                                                                                src={save}
                                                                                alt="download"
                                                                                onClick={this.deleteGoal.bind(this, goal, false)}
                                                                                //onClick={this.saveGoal.bind(this, goal, false)}

                                                                            />
                                                                        </div>
                                                                        <div className="huv edit3b">
                                                                            <img
                                                                                src={trash}
                                                                                alt="delete"
                                                                                onClick={this.deleteGoal.bind(this, goal, false)}
                                                                                style={{ width: "15px", height: "15px", opacity:".5" }}


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
                                                                            style={{width:"20px", height:"20px"}}

                                                                    />
                                                                    <p>+</p><p className="rowss huv">Supporting Goal</p>
                                                                </span></div>
                                                            </div>)}

                                                        </div>
                                                    </div>) : (
                                                            <div></div>)}</div>)}


                                                </div>

                                            </div> */}


                                        </div>


                                        ):(

                                            <div className=" centerized" style={{ height: "100%" }}>
                                            <button style={{ background: "#696eb5", height: "45px", color: "#F0F2EF", width: "150px", }} className="btn  btn-block centerized" value="submit" onClick={this.AddmainGoal}>Add New Goals</button>
                                        </div>
                                        )}
                                        </div>
                                      
                                    )
                            }





{this.props.goals.length >= 5?(<div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-end" }}><div className="btn  btn-block" style={{ marginTop: "0px",  position:"absolute",   }} value="submit" onClick={this.AddGoal}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
        src={leaf}
        className="edita"
        style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div> </div>):(<div></div>
                                                        )}

                        </div>
                                    )}
                                    </div>):(<div className=" fill1 checkboxstuff3tocolumn" style={{ padding: "5px" }}>
                                        

<div className="centerized" style={{height:this.state.height, borderRight: this.state.borderRight, width: this.state.width, borderBottom: this.state.borderBottom }}>
    
        
        <div style={{ width: "100%", height: "100%" }} ><div className="centerizeaa " >
            <div style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginBottom: "15px" }}><h2 >Progress</h2> <div className="huv" onClick={this.editProgress}>
               
                <img
                    src={edit}
                    alt="edit"
                    style={{width: "25px", height: "25px", marginRight: "10px"}}

                />
            </div></div>
            {this.props.tooSmall?(<div>
                {this.props.thousand?(<div style={{ marginBottom: "7px", marginTop: "20px", marginLeft: "20px" }}>
               
               <Progress goals={this.props.MainGoals} />
               
               
               
               
               <div className="checkboxstuff1a " style={{ width: "95%" }}>
               <div style={{ marginTop: "23px" }}><b>Goal Progress</b></div>
               {this.props.timebool?(
                   <div style={{ flexDirection: "colomn" }}>
                   <div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
                   {!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
                        </div>)}  
                   
               
                   min</div>
               
                   
                   <div><b>Time Practiced</b></div>
               
               </div>
               ):(<div></div>)}
               
               {this.props.daysbool?(
                   <div style={{ flexDirection: "colomn" }}>
               
                   <div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>
               
               <div> <b>Practice Days</b> </div>
               </div>
               ):(<div></div>)}
                                                           </div>
               </div>):(<div style={{ marginBottom: "7px", marginTop: "20px", display:"flex", flexDirection:"column", alignItems:"center" }}>
                    <Progress goals={this.props.MainGoals} />
                    <div style={{  display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%", marginTop: "10px" }}>
               
                
                
                {this.props.daysbool?(
                    <div style={{ flexDirection: "colomn" }}>

                    <div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>

                <div> <b>Practice Days</b> </div>
                </div>
                ):(<div></div>)}
                {this.props.timebool?(
                    <div style={{ flexDirection: "colomn" }}>
                    <div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
                    {!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
                         </div>)}  
                    

                    min</div>

                    
                    <div><b>Time Practiced</b></div>

                </div>
                
                ):(<div></div>)}
                </div>
                
                
            

            
        </div>)}

                
        



        </div>):(

<div style={{ marginBottom: "7px", marginTop: "20px", marginLeft: "20px" }}>
               
<Progress goals={this.props.MainGoals}/>




<div className="checkboxstuff1a " style={{ width: "95%" }}>
<div style={{ marginTop: "23px" }}><b>Goal Progress</b></div>
{this.props.timebool?(
<div style={{ flexDirection: "colomn" }}>
<div className="centerized"> {this.props.finalTotalTime===""?(<div style={{marginRight:"5px"}}>0 </div>):(<div style={{marginRight:"5px"}}>
{!this.props.finalTotalTime?(<div>0 </div>):(<div>{this.props.finalTotalTime}</div>)}
</div>)}  


min</div>


<div><b>Time Practiced</b></div>

</div>
):(<div></div>)}

{this.props.daysbool?(
<div style={{ flexDirection: "colomn" }}>

<div className="centerized">{this.props.totalDaysPracticed===""?(<div>0</div>):(<div>{this.props.totalDaysPracticed}</div>)}</div>

<div> <b>Practice Days</b> </div>
</div>
):(<div></div>)}
                    </div>
</div>
            )}
           
            
            {this.props.starPoints?(
                                                    <div style={{ width: "200px", marginLeft: this.state.marginLeft, alignSelf:this.state.alignself }}><Points day={false} role={this.props.role} starpoints={this.props.starpoints} spGoal={this.props.spGoal}/> </div>

            ):(<div></div>)}

            
            {this.props.totalDays !== "" ?
                                    (<div style={{ marginLeft: this.state.marginLeft , width: "200px", alignSelf:this.state.alignself }}>

                                    <Day role={this.props.role} day={true} daysPracticed={this.props.daysPracticed} totalDays={this.props.totalDays} setDays={this.setDays} open={this.setday} />
                                        </div>
                                        )
                                
                                        :

                                    (<div className="centerized">
                                    
                                        <div style={{opacity:"0"}}>space</div> 
                                        
                                    
                                </div>)}

                                {this.props.totalTime !== "" ?(
                                   <div style={{ marginLeft: this.state.marginLeft , width: "200px", alignSelf:this.state.alignself, }}>

                                   <Day role={this.props.role} time={true} timePracticed={this.props.timePracticed} totaltime={this.props.totalTime} setDays={this.setDays} open={this.setday} /></div>

                                ):(<div></div>)}
                                
                
            
            
        </div></div>
        
    
        </div>
            

<div className=" columbized4 fill1" >





    {
        this.props.main ?
            (
                <div className="columbized fill1">
                     <div style={{marginBottom: "15px", marginLeft: this.state.marginLeft1, marginTop: "0px",   display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

<h2 >Goals</h2>
<button style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "150px", }} className="btn  btn-block " value="submit" onClick={this.AddmainGoal}>+ Goal</button>

</div>

                    <div>

                        
                        
                    </div>



                    {this.props.MainGoals ?(<div className="homeworkScroll1" >
                                            {this.props.MainGoals.map((main, index) =>
                                            <div key={index} >
                                                <div >
                        <div className="checkboxstuff2" style={{display:'flex', flexDirection:"row", justifyContent:"space-between", width:"90%"}}>
                            <div style={{display:'flex', flexDirection:"row"}}>
                        <Checkedd2 goal={main} goalStatusChange={this.completeGoal} main={true}  />
                        
                        {this.props.tooSmall?(<h4 className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h4>):(<h2 className="huv rowss" onClick={this.showMainGoal.bind(this, main)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h2>)}
                        </div>
                        <div className="checkboxstuff1">
                                <div className="huv edit3">
                                    <img
                                        src={save}
                                        alt="download"
                                        onClick={this.archiving.bind(this, main, true )}

                                        //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                    />
                                </div>


                                <div className="huv edit3">
                                    <img
                                        src={trash}
                                        alt="delete"
                                        onClick={this.deleteGoal.bind(this, main, true)}
                                        style={{ width: "15px", height: "15px", opacity: ".5" }}


                                    />
                                </div>
                            </div>
                            


                    </div>
                    </div>
                    {main.mainGoal.goals.map((goal, index) =>
                    <div className="checkboxstuff1 " key={index}  style={{ width: this.state.widthgoal, marginLeft: "68px" }} >
                        

                    <div className="checkboxstuff2">
                        <div >
                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                        </div>
                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                    </div>
                    <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                        <div className="huv edit3b1">
                            {/* <img
                                src={save}
                                alt="download"
                                onClick={this.archiving.bind(this, goal, false)}
                                //onClick={this.saveGoal.bind(this, goal, false)}

                            /> */}
                        </div>
                        <div className="huv edit3b1">
                            <img
                                src={trash}
                                alt="delete"
                                onClick={this.deleteGoal.bind(this, goal, false)}
                                style={{ width: "15px", height: "15px", opacity:".5" }}


                            />
                        </div>
                    </div>

                </div>
                    
                    )}
                    <div className="btn  btn-block" style={{ marginTop: "10px", marginLeft: "90px" }} value="submit" onClick={this.AddGoal.bind(this, main.mainGoal)}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
        src={leaf}
        className="edita"
        style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div>
                    </div>
                        
                        )
                        }
                            
                            </div>):(<div></div>)}
                            {/**

                    {this.props.MainGoals?(
                    <div>

                        {this.props.MainGoals.map((main, index) =>
                        <div key={index} className="checkboxstuff2">
                        <Checkedd2 goal={main.mainGoal} goalStatusChange={this.completeGoal} main={true} />
                        {this.props.tooSmall?(<h4 className="huv rowss" onClick={this.showMainGoal}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h4>):(<h2 className="huv rowss" onClick={this.showMainGoal}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h2>)}
                        <div className="checkboxstuff1">
                                <div className="huv edit3b">
                                    <img
                                        src={save}
                                        alt="download"
                                        onClick={this.archiving.bind(this, this.props.main, true )}

                                        //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                    />
                                </div>


                                <div className="huv edit3b">
                                    <img
                                        src={trash}
                                        alt="delete"
                                        onClick={this.deleteGoal.bind(this, this.props.main, true)}
                                        style={{ width: "15px", height: "15px", opacity: ".5" }}


                                    />
                                </div>
                            </div>


                    </div>
                        
                        )
                        }
                        </div>):(<div></div>)}
                   

                    <div className="checkboxstuff1 " style={{ marginLeft: this.state.marginLeft2, width: this.state.widthmgoal }} >

                        <div className="checkboxstuff2">
                            <Checkedd2 goal={this.props.main} goalStatusChange={this.completeGoal} main={true} />
                            {this.props.tooSmall?(

<h4 className="huv rowss" onClick={this.showMainGoal}><div>{this.props.main.title.length > 25 ? (<div><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div>{this.props.main.title}</div>)}</div></h4>

                            ):(

<h2 className="huv rowss" onClick={this.showMainGoal}><div>{this.props.main.title.length > 25 ? (<div><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div>{this.props.main.title}</div>)}</div></h2>

                            )}



                        </div>
                        {this.props.role === "student" ? (
                            <div >
                            </div>) : (<div className="checkboxstuff1">
                                <div className="huv edit3b">
                                    <img
                                        src={save}
                                        alt="download"
                                        onClick={this.archiving.bind(this, this.props.main, true )}

                                        //onClick={this.saveGoal.bind(this, this.props.main, true)}

                                    />
                                </div>


                                <div className="huv edit3b">
                                    <img
                                        src={trash}
                                        alt="delete"
                                        onClick={this.deleteGoal.bind(this, this.props.main, true)}
                                        style={{ width: "15px", height: "15px", opacity: ".5" }}


                                    />
                                </div>
                            </div>)}

                    </div>
                     


                    <div className=" fill2" >
                        <div style={{ marginLeft: this.state.marginLeft3 }}>
                            {this.props.role === "student" ? (<div style={{ height: "265px" }}>
                                {this.props.goals ? (<div className="homeworkScroll1">
                                    {
                                        this.props.goals.map((goal, index) =>

                                            <div className="checkboxstuff1 " key={index} >

                                                <div className="checkboxstuff2">
                                                    <div >
                                                        <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                    </div>
                                                    <div className="huv rowss" style={{marginBottom:"10px"}}  onClick={this.showGoal.bind(this, goal)}> <div >{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                                </div>


                                            </div>
                                        )
                                    }
                                </div>) : (
                                        <div></div>)}

                            </div>) : (<div style={{ height: "275px", width:this.state.widthgoals}}>{this.props.goals ? (<div className="homeworkScroll1">
                                {
                                    this.props.goals.map((goal, index) =>

                                        <div className="checkboxstuff1 " key={index} style={{ width: this.state.widthgoal }} >

                                            <div className="checkboxstuff2">
                                                <div >
                                                    <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                </div>
                                                <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                            </div>
                                            <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                                                <div className="huv edit3b1">
                                                    <img
                                                        src={save}
                                                        alt="download"
                                                        onClick={this.archiving.bind(this, goal, false)}
                                                        //onClick={this.saveGoal.bind(this, goal, false)}

                                                    />
                                                </div>
                                                <div className="huv edit3b1">
                                                    <img
                                                        src={trash}
                                                        alt="delete"
                                                        onClick={this.deleteGoal.bind(this, goal, false)}
                                                        style={{ width: "15px", height: "15px", opacity:".5" }}


                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                                <div>
                                    {this.props.role === "student" ? (<div></div>) : (<div style={{ width: "230px" }}>
                                    {this.props.goals.length >=5?(<div></div>):(

<div className="btn  btn-block" style={{ marginTop: "10px", marginLeft: "20px" }} value="submit" onClick={this.AddGoal}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
src={leaf}
className="edita"
style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div>
                                    )}
                                        
                                    </div>)}

                                </div>
                               
                            </div>) : (
                                    <div></div>)}</div>)}
                                     


                        </div>

                    </div>
                */}

                </div>

            ) : (
                <div className="fill1">{this.props.goals.length!==0?(
                    <div className="columbized fill2">

                    <h2 style={{ marginBottom: "15px", marginLeft: "23px", marginTop: "5px", }}>Goals</h2>

                   

                    <div className=" fill2" >
                        <div style={{ marginLeft: "75px" }}>
                            {this.props.role === "student" ? (<div style={{ height: "265px" }}>
                                {this.props.goals ? (<div className="homeworkScroll1">
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

                            </div>) : (<div style={{ height: "275px" }}>{this.props.goals ? (<div className="homeworkScroll1">
                                {
                                    this.props.goals.map((goal, index) =>

                                        <div className="checkboxstuff1 rowss" key={index} style={{ width: this.state.widthgoals}} >

                                            <div className="checkboxstuff2">
                                                <div >
                                                    <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                </div>
                                                <div className="huv" onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                                            </div>
                                            <div className="checkboxstuff1" style={{marginBottom:"5px"}}>
                                                <div className="huv edit3b">
                                                    <img
                                                        src={save}
                                                        alt="download"
                                                        onClick={this.deleteGoal.bind(this, goal, false)}
                                                        //onClick={this.saveGoal.bind(this, goal, false)}

                                                    />
                                                </div>
                                                <div className="huv edit3b">
                                                    <img
                                                        src={trash}
                                                        alt="delete"
                                                        onClick={this.deleteGoal.bind(this, goal, false)}
                                                        style={{ width: "15px", height: "15px", opacity:".5" }}


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
                                                    style={{width:"20px", height:"20px"}}

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


                ):(

                    <div className=" centerized" style={{ height: "100%" }}>
                    <button style={{ background: "#696eb5", height: "45px", color: "#F0F2EF", width: "150px", }} className="btn  btn-block centerized" value="submit" onClick={this.AddmainGoal}>Add New Goals</button>
                </div>
                )}
                </div>
              
            )
    }





{this.props.goals.length >= 5?(<div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"flex-end" }}><div className="btn  btn-block" style={{ marginTop: "0px",  position:"absolute",   }} value="submit" onClick={this.AddGoal}><span className="checkboxstuff1" style={{ width: "250" }}>
<img
src={leaf}
className="edita"
style={{width:"20px", height:"20px"}}

/>

<p>+</p><p className="rowss huv">Supporting Goal</p>
</span></div> </div>):(<div></div>
                                )}

</div>
            



                                    </div>)}



                    </div>

              




                </div>

            
        );
    }
}