import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            stylel: "rotate(180deg)",
            styler: "rotate(180deg)",
            completedGoals: 0,
            incompletGoals: 0,
            totalGoals: (this.props.goals.length+1),
            percent: "",

        };
    }
    componentDidMount() {
        this.progressCalc();
    }
    async progressCalc() {

        let completedGoals = 0;
        let goals = 0;

        for (let i = 0; i < this.props.goals.length; i++) {

            if (this.props.goals[i].complete) {
                completedGoals += 1;
            }
            else {
                goals += 1;
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
    }
    /*
     
     */
    render() {
        return (
            
            <div>
                {this.props.profile ? (
                    <div>
                        <div className="circles4">
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
                        
                        
                    </div>
                        <div className="number2" style={{marginTop:"25px"}}>{this.state.percent}% Towards Goal</div>
                    </div>

                ) : (
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
            
                
            </div>
        );

    }
}
/*
 
 */