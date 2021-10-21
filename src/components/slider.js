import React, { Component } from "react";
import './components.css';

class Slider extends Component {
    render() {
        return (
            <div className="doit">
                
                <div className="bpm space-bottom" ><h3>{this.props.bpm} BPM</h3></div>
                <div >
                <input type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange} />
                    </div>
            </div>
        );
    }
}


export default Slider;