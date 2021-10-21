import React, { Component } from "react";
import './components.css';
class Button extends Component {
    render() {
        return (
            <button className="centerized btn btn-primary " onClick={this.props.handleClick} style={{ marginTop: "50px" }}>
                {this.props.currentState ? "Stop" : "Start"}
            </button>
        );
    }
}
export default Button;
