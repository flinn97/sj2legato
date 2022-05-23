import React, { Component } from "react";
import '../components/components.css';

class Slider extends Component {

    render() {
        return (
            <div >
                
                <div  >
                    <div  style={{display: "flex", flexDirection: "column"}}>
                        <input
                            type="text"
                            id="bpm"
                            value={this.props.bpm}
                            onChange={this.props.handleChanges}
                            name="bpm"
                            style={{ width: "67px", fontSize: "25px" }}
                        /><p style={{ marginTop: "12px", fontSize: "25px", marginLeft:"6px"}}>BPM</p>
                    </div>
                    
                    </div>
                <div >
                <input type="range" min="60" max="240" value={this.props.bpm} onChange={this.props.handleChange} style={{width:"270px", background:"none"}}/>
                    </div>
            </div>
        );
    }
}


export default Slider;