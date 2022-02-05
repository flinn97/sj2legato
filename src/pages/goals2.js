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
import Starpointz from "../components/starpointz.js";

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
        this.starpointz = this.starpointz.bind(this);

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
            startpointz: false,
            Starpointz: false,
            margin: "20px",
            width:"100%"
        };
    }
    componentDidMount(){
        if(parseInt(window.innerWidth) <= 600){

        this.setState({ 
            width: "75%"


         });
        }
        if(this.props.starpointsGoal==="0"){
            if(this.props.wmin===""){
                if(this.props.totalDays===""){
                    this.setState({
                        margin: "65px"
                    })
                }
            }
        }
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
        let sp = "";
        let pass = false;
        let npass= false;
        let daystreak= parseInt(this.props.daystreak)+1;
        let complete = moment().subtract(10, 'days').calendar();
        if(check){
        
        if(main){
            
            sp = (parseInt(this.props.starpoints) + (100* daystreak)).toString();

            
            if (parseInt(sp) >= parseInt(this.props.starpointsGoal)){
                pass= true;

            }
        }
        else{
            sp =(parseInt(this.props.starpoints) + (50* daystreak)).toString();

            
            if (parseInt(sp) >= parseInt(this.props.starpointsGoal)){
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
        let goalcomplete;
        let ar=[]
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
        
            AuthService.goalStatusChange(
                this.props.student,
                check,
                goal,
                main,
                complete,
                this.props.level, sp, this.props.starpointsGoal, pass, npass
                

            )
            if(check){
            if(this.props.starPointz){
            this.starpointz();
            }
            else{
                window.location.reload();
            }
        }
        //

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

    showGoal(goal, main) {
        this.setState({
            showGoal: true,
            currentgoal: goal,
            main: main
        });
        this.props.show();

    }
    showMainGoal() {
        this.setState({
            showGoal: true,
            currentgoal: this.props.main,
        });
        this.props.show();

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
        this.props.show();
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
    starpointz(){
        this.setState({
            Starpointz: !this.state.Starpointz
        })
    }

    render() {
        return (

            <div className="fill1">
                {this.state.Starpointz && (<Starpointz handleClose={this.starpointz} main={this.state.main} role="student" />)}

                {this.state.Goal && (<GoalEdit handlegoal={this.handlegoal} handleChange={this.handleChange} handleClose={this.goalClose} main={this.state.main} role="student"/>)}
                {this.state.showGoal && (<Goal main={this.state.main} Goal={this.state.currentgoal} handleClose={this.handleClose} role="student" handletheclose={this.handlegoalsClose} />)}

                {this.state.setdays && (<SetDay handleChange={this.handleChange} handleClose={this.setDays} handleClosing={this.handlesetdayclose} />)}
                {this.props.goalss ? (



                    <div className=" columbized4" style={{ width: "100%", height: "100%" }} >





                        {
                            this.props.main ?
                                (
                                    <div className="columbized fill1">

                                        <h2 className="centerized" style={{ marginBottom: "15px", marginTop: "5px", }}>Goals</h2>
                                        {this.props.MainGoals ?(<div className="homeworkScroll1" >
                                            {this.props.MainGoals.map((main, index) =>
                                            <div key={index} >
                                                <div >
                        <div className="checkboxstuff2" style={{display:'flex', flexDirection:"row", justifyContent:"space-between", justifyContent:"center"}}>
                            <div style={{display:'flex', flexDirection:"row", alignItems:"center"}}>
                        <Checkedd2 goal={main} goalStatusChange={this.completeGoal} main={true}  />
                        
                        {this.props.tooSmall?(<h4 style={{marginBottom:"10px"}} className="huv rowss" onClick={this.showGoal.bind(this, main, true)}><span>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</span></h4>):(<h2 className="huv rowss" onClick={this.showGoal.bind(this, main, true)}><div>{main.mainGoal.title.length > 25 ? (<div><Short word={main.mainGoal.title} wordtype="Goal" /></div>) : (<div>{main.mainGoal.title}</div>)}</div></h2>)}
                        </div>
                        <div className="checkboxstuff1">
                               {/* <div className="huv edit3">
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
                                            </div>*/}
                            </div>
                            


                    </div>
                    </div>
                    {main.mainGoal.goals.map((goal, index) =>
                    <div className="checkboxstuff1 fill2" key={index}  style={{ width: this.state.widthgoal, }}  >
                        

                    <div className="checkboxstuff2 " style={{display:'flex', flexDirection:"row", justifyContent:"center", marginLeft:"15px"}}>
                        <div >
                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                        </div>
                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal, false)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                    </div>
                    

                </div>
                    
                    )}
                   
                    </div>
                        
                        )
                        }
                            
                            </div>):(<div></div>)}

                                        {/* <div className="checkboxstuff1  centerized" style={{  width: this.state.width, marginLeft:"10%"  }} >

                                            <div className="checkboxstuff2 ">
                                                <Checkedd2 main={true} goal={this.props.main} goalStatusChange={this.completeGoal} main={true} />
                                                <h3 className="huv rowss1" onClick={this.showMainGoal}><div>{this.props.main.title.length > 20 ? (<div className="huv rowss1" ><Short word={this.props.main.title} wordtype="Goal" /></div>) : (<div className="huv rowss1" >{this.props.main.title}</div>)}</div></h3>
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


                                        <div className="  " style={{ width: this.state.width , marginLeft:"29%" }}>
                                            <div className=" fill2 " style={{}}>
                                                {this.props.role === "student" ? (<div style={{ height: "250px" }}>
                                                    {this.props.goals ? (<div className="homeworkScroll">
                                                        {
                                                            this.props.goals.map((goal, index) =>

                                                                <div className="checkboxstuff1 " key={index} >

                                                                    <div className="checkboxstuff2">
                                                                        <div >
                                                                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                        </div>
                                                                        <div style={{ marginBottom: "7px" }} className="huv rowss" onClick={this.showGoal.bind(this, goal)}> <div>{goal.title.length > 14 ? (<div style={{ fontSize: "20px" }}><Short word={goal.title} wordtype="goal" /></div>) : (<div style={{ fontSize: "20px" }}>{goal.title}</div>)}</div></div>

                                                                    </div>


                                                                </div>
                                                            )
                                                        }
                                                    </div>) : (
                                                            <div></div>)}

                                                </div>) : (<div style={{ height: "250px" }}>{this.props.goals ? (<div className="homeworkScroll">
                                                    {
                                                        this.props.goals.map((goal, index) =>

                                                            <div className="checkboxstuff1 " key={index} style={{ width: "350px" }} >

                                                                <div className="checkboxstuff2">
                                                                    <div >
                                                                        <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                                                                    </div>
                                                                    <div style={{ marginBottom: "5px" }}   onClick={this.showGoal.bind(this, goal)}><div>{goal.title.length > 14 ? (<div ><p className="huv rowss"><Short word={goal.title} wordtype="goal" /></p></div>) : (<div ><p className="huv rowss">{goal.title}</p></div>)}</div></div>

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

                                        </div> */}


                                    </div>

                                ) : (

                                    <div>
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
                               {/* <div className="huv edit3">
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
                                            </div>*/}
                            </div>
                            


                    </div>
                    </div>
                    {main.mainGoal.goals.map((goal, index) =>
                    <div className="checkboxstuff1 " key={index}  style={{ width: this.state.widthgoal, marginLeft: "30px" }} >
                        

                    <div className="checkboxstuff2">
                        <div >
                            <Checkedd2 goal={goal} goalStatusChange={this.completeGoal} main={false} />
                        </div>
                        <div className="huv rowss" style={{marginBottom:"7px"}} onClick={this.showGoal.bind(this, goal, false)}><div>{goal.title.length > 14 ? (<div><Short word={goal.title} wordtype="goal" /></div>) : (<div>{goal.title}</div>)}</div></div>

                    </div>
                    <div className="" style={{width:"25%", flexDirection:"row", justifyContent:"flex-end", display:"flex", }}>
                        {/*<div className="huv edit3b1">
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
                        */}
                    </div>

                </div>
                    
                    )}
                    
                    </div>
                        
                        )
                        }
                            
                            </div>):(<div></div>)}</div>
                                    
                                )
                        }







                    </div>
                ) : (
                        <div className="fill1">
                        {
                            this.props.student ? (
                                <div className="fill1 checkboxstuff3" style={{ padding: "10px", paddingTop:"15px"}}>

                                    <div className="centerized" style={{ marginBottom: "10px", width: "100%", height: "100%" }}>
                                        {this.props.student ?

                                            (<div style={{ width: "100%", height: "100%" }} ><div className="centerizeaa homeworkScroll" >
                                                    <div className="centerized"><h2 style={{ marginBottom: "15px" }}>Progress</h2></div>
                                                    <div style={{ marginBottom: "7px", marginTop: this.state.margin }}>
                                                        {this.props.main?(<div>

                                                            <div className="centerized" >
                                                            <Progress goals={this.props.MainGoals} main={this.props.main}  />
                                                            </div>





                                                        <div className="centerized" style={{ marginTop: "23px" }}>Goal Progress</div>
                                                        </div>):(<div>{this.props.goals.length !== 0? (
                                                            <div>

                                                            <div className="centerized" >
                                                            <Progress goals={this.props.goals} main={this.props.main} />
                                                            </div>





                                                        <div className="centerized" style={{ marginTop: "23px" }}>Goal Progress</div>
                                                        </div>
                                                        
                                                        ):
                                                        (<div className="centerized">No goals assigned yet!</div>)}
                                                        </div>)}
                                                        


                                                </div>
                                                {this.props.starPointz? (
                                                                                                        <div className="centerized"style={{ width: "200px" }}><Points day={false} role={this.props.role} spGoal={this.props.starpointsGoal} starpoints={this.props.starpoints}/> </div>

                                                ):(<div></div>)}


                                                <div>
                                                    {this.props.totalDays !== "" ?
                                                            (<div  style={{ width: "100%" }}>
                                                                <div className="centerized" style={{ width: "100%" }}>
                                                            <Day role={this.props.role} day={true} daysPracticed={this.props.daysPracticed} totalDays={this.props.totalDays}  />
                                                                </div>
                                                                </div>
                                                                
                                                                )
                                                        
                                                                :

                                                            (<div className="centerized">
                                                            
                                                                <div style={{opacity:"0"}}>space</div> 
                                                                
                                                            
                                                        </div>)}
                                                        {this.props.wmin !== "" ?(
                                                            <div className="centerized" style={{ width: "100%" }}>
                                                                <Day role={this.props.role}  day={false} time={true} timePracticed={this.props.timePracticed} totaltime={this.props.totalTime} />


                                                                    </div>

                                                        ):(<div></div>)}
                                                        

                                                </div>
                                            </div></div>) : (<div></div>)

                                        }
                                    </div>






                                </div>

                            ) : (
                                    <div className=" centerized" style={{ height: "100%", width: "200px" }}>
                                        
                                    </div>)
                        }

                        
                        </div>

                        )}
                

              
                




                </div>

            
        );
    }
}