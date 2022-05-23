import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Progress_circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            stylel: "rotate(180deg)",
            styler: "rotate(180deg)",
            completedGoals: 0,
            incompletGoals: 0,
            totalGoals: 0,
            percent: "",

        };
    }
    componentDidUpdate(props, state){
        if (this.props.updatecircle && !props.updatecircle){
            debugger
            this.componentDidMount()
            this.props.dispatch({updatecircle:false})
        }
    }
    componentDidMount() {
        console.log(this.props.goals)
        var totalgoals= this.props.goals?.length
        for (let i=0; i<this.props.goals?.length; i++){
            console.log(this.props.goals[i].mainGoal);
            let goalz= this.props.goals[i]
            for(let i=0; i<goalz.mainGoal.goals.length; i++){
                
                totalgoals++
            }
        }
        if(this.props.main){
            this.setState({
                totalGoals: totalgoals
            })
        }
        else{
            this.setState({
                totalGoals: totalgoals
            })
        }
   
        this.progressCalc();

       
        
            
        
    }
    async progressCalc() {

        let completedGoals = 0;
        let goals = 0;

        for (let i = 0; i < this.props.goals?.length; i++) {

            if (this.props.goals[i].mainGoal.complete) {
                completedGoals += 1;
            }
            else {
                goals += 1;
            }
            let goalz= this.props.goals[i]
            for(let i=0; i<goalz.mainGoal.goals.length; i++){
                if(goalz.mainGoal.goals[i]){
                if(goalz.mainGoal.goals[i].complete){
                    console.log(goalz.mainGoal.goals[i].complete);
                    completedGoals += 1;
                }
                else {
                    goals += 1;
                }
            }
            }
        }
        if (this.props.main) {
            if (this.props.main.complete) {
                completedGoals += 1;
            }
        }
        
        await this.setState({
            completedGoals: completedGoals,
            incompletGoals: goals,
        })
        
        console.log(this.state.totalGoals);
        let calc = 100 / this.state.totalGoals;
        let percentage = calc * this.state.completedGoals;
        let calculate = 360 / this.state.totalGoals;
        let calculated = calculate * this.state.completedGoals;
        let overcalc =0;
        

        if (calculated > 180) {
            overcalc = calculated - 180;
            calculated = 180;

        } 
        console.log(calculated);

        console.log(overcalc);
        const stylel = "rotate(" + calculated.toString() + "deg)";
        const styler = "rotate(" + overcalc.toString() + "deg)";

        
        let percent = percentage.toString();
        let perc = "";
        if (percent.length > 4) {

            for (let i = 0; i < 4; i++) {
                perc += percent[i];
            }
        }
        else {
            perc = percent;
        }

        this.setState({
            percent: perc,
            stylel: stylel,
            styler: styler,

        });

        if(!this.props.main){
            if(this.props.goals.length===0){
                this.setState({
                    percent: "0",
                    stylel: "rotate(" + "0" + "deg)",
                    styler: "rotate(" + "0" + "deg)"

                })
            }
        }
    
    }
    /*
     
     */
    render() {
        return (
            
            <div>
                {this.props.profile ? (
                    <div>
                        {this.props.userProfile?(
                        
                        <div  >
                            {this.state.percent==="0"?(<div>
                                <div className="circlesI">
                            <div className="inner">
                                <img
                                    src={this.props.pic}
                                    alt="profile-img"
                                    className="profile-img-carda  cropped1 "

                                />
                            </div>
                           
                                

                            
                           
                        
                            <div className="circleI">
                            <div className="bar left">
                                <div className="progress" style={{ transform: this.state.stylel }}></div>
                            </div>
                            <div className="bar right">
                                <div className="progress" style={{ transform: this.state.styler }}></div>
                            </div>
                        </div>
                        
                        
                    </div>




                            </div>):(<div>

                                <div className="circles5">
                            <div className="inner">
                                <img
                                    src={this.props.pic}
                                    alt="profile-img"
                                    className="profile-img-carda  cropped1 "

                                />
                            </div>
                           
                                

                            
                           
                        
                            <div className="circle5">
                            <div className="bar left">
                                <div className="progress" style={{ transform: this.state.stylel }}></div>
                            </div>
                            <div className="bar right">
                                <div className="progress" style={{ transform: this.state.styler }}></div>
                            </div>
                        </div>
                        
                        
                    </div>
                            </div>)}
                            
                        


                        </div>):(<div>

                            {this.state.percent==="0"?(<div className="circlesIa">
                            <div className="inner">
                                <img
                                    src={this.props.pic}
                                    alt="profile-img"
                                    className="profile-img-carda  cropped1 "

                                />
                            </div>
                           
                                

                            
                           
                        
                            <div className="circleIa">
                            <div className="bar left">
                                <div className="progress" style={{ transform: this.state.stylel }}></div>
                            </div>
                            <div className="bar right">
                                <div className="progress" style={{ transform: this.state.styler }}></div>
                            </div>
                        </div>
                        
                        
                    </div>):(<div className="circles4">
                            <div className="inner">
                                <img
                                    src={this.props.pic}
                                    alt="profile-img"
                                    className="profile-img-carda  cropped1 "

                                />
                            </div>
                           
                                

                            
                           
                        
                            <div className="circle4">
                            <div className="bar left">
                                <div className="progress" style={{ transform: this.state.stylel }}></div>
                            </div>
                            <div className="bar right">
                                <div className="progress" style={{ transform: this.state.styler }}></div>
                            </div>
                        </div>
                        
                        
                    </div>)}
                            
                        <div className="number2" style={{marginTop:"25px"}}>{this.state.percent}% Towards Goal</div>
                            
                        </div>)}
                        
                    </div>

                ) : (<div>
                    {this.state.percent==="0"?(

                        <div className="circlesI3 ">
                            <div className="inner "></div><div className=" innera"></div>
                    <div className="number">{this.state.percent}%</div>
                            <div className="circleI3">
                                <div className="bar left">
                                    <div className="progress" style={{ transform: this.state.stylel }}></div>
                                </div>
                                <div className="bar right">
                                    <div className="progress" style={{ transform: this.state.styler }}></div>
                                </div>
                            </div>
                        </div>
                    ):(

                        <div className="circles3 ">
                            <div className="inner "></div><div className=" innera"></div>
                    <div className="number">{this.state.percent}%</div>
                            <div className="circle3">
                                <div className="bar left">
                                    <div className="progress" style={{ transform: this.state.stylel }}></div>
                                </div>
                                <div className="bar right">
                                    <div className="progress" style={{ transform: this.state.styler }}></div>
                                </div>
                            </div>
                        </div>
                    )}
                        

                    </div>)}
            
                
            </div>
        );

    }
}
/*
 
 */