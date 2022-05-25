import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Progressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: "0",
            height: "40px"
        };
    }
    async componentDidMount() {
            let percent = 100 / parseInt(this.props.goal);
            let calc = percent * parseInt(this.props.amount);
            if (calc === 0) {
                this.setState({
                    style: "0px",
                    height: "0px",
                })
            }
            else {
                if (parseInt(calc) > 100) {
                    calc = 100
                }
                this.setState({
                    style: calc.toString() + "%",
                    height: "40px"
                })
            }
        }
    render() {
        return (
            <div className="centerized" style={{ width: "100%" }}>
                <div style={{ width: "270px" }}>
                    <div>
                        <div style={{ marginTop: "25px" }}>
                            <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>{this.props.text}</b></div><div>{this.props.amount} / {this.props.goal}</div></div>
                            {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} class="progress-bar1"></div>):(
                                <div style={{ width: "270px", height: "18px" }} class="progress-bar ">
                                    <div style={{ width: this.state.style, height: "18px" }}></div>
                                </div>)}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
