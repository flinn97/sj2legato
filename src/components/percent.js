import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Percent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            completedGoals: "",
            incompletGoals: "",
            percent: "",
            totalGoals: this.props.goals.length + 1,
        };
    }
    async componentDidMount() {
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
            else {
                goals += 1;
            }
        }

        await this.setState({
            completedGoals: completedGoals,
            incompletGoals: goals,
        })

        console.log(this.state.totalGoals);
        let calc = 100 / this.state.totalGoals;
        let percentage = calc * this.state.completedGoals;
       

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


        });
    }
    render() {
        return (
            
            <div>
                {this.state.percent}%
                
            </div>
        );

    }
}
