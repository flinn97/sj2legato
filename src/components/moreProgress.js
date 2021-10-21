import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: this.props.totalDays,
            style: "0",
            daysPracticed: 0,
            height: "40px"
        };
    }
    async componentDidMount() {
        if (this.props.daysPracticed) {
            await this.setState({
                daysPracticed: this.props.daysPracticed
            })
        }
        
        
        if (this.props.totalDays) {
            await this.setState({ progress: this.props.totalDays })
        }
        let percent = 100 / this.state.progress;
        console.log(percent);
        
        let calc = percent * this.state.daysPracticed;

        console.log(this.state.daysPracticed);
        if (calc === 0) {
            this.setState({
                style: "0px",
                height: "0px",
            })
        }
        else {
            this.setState({
                style: calc.toString() + "%",
                height: "40px"
            })
        }
        
    }
  
    render() {
        return (
            
            <div className= "centerized" style={{ width: "100%" }}>
                {this.props.day ?
                    (
                        <div style={{ width: "270px" }}>{
                            this.props.totalDays === 0  ? (

                                <div>{this.props.role === "student" ? (<div>No Days Set by Teacher</div>) : (<div style={{ width: "270px" }}><button style={{ width: "270px" }} className="btn btn-primary btn-block" value="submit" onClick={this.props.open}>Practice days set. </button></div>
)}
                                    </div>

                            ) :
                                (
                                    <div>
                                        {this.props.totalDays ? (
                                            <div>{this.props.role === "student" ?
                                                (
                                                    <div style={{ marginTop: "10px" }}>

                                                        <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width:"260px" }} ><div>Can I see this?</div><div>0</div></div>
                                                        {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} class="progress-bar1"></div>)
                                                            :
                                                            (
                                                                <div style={{ width: "270px", height: "18px" }} class="progress-bar huv">
                                                            <div style={{ width: this.state.style, height: this.state.height }}></div>
                                                                </div>
                                                            )
                                                        }
                                                        

                                                    </div>
                                                    
                                                ) 
                                                        : 
                                                        (
                                                    <div style={{ marginTop: "15px" }}>
                                                        <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div>Days Practiced</div><div>{this.state.daysPracticed} / {this.props.totalDays}</div> </div>

                                                        {this.state.height === "0px" ? (

                                                            <div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar1 huv"></div>
                                                        ) : (
                                                                <div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar huv">
                                                                    <div style={{ width: this.state.style, height: "18px" }}></div>
                                                                </div>
                                                            )}
                                                        
                                                        
                                                        </div>
                                                )}
                                    </div>

                                            
                                        ) : (<div style={{ width: "270px" }}></div>)}
                                    </div>

                                )}
                        </div>

                    )
                    : (
                    <div>
                            {this.props.time ? (<div>
                                <div style={{ marginTop: "15px", height: "20px" }}>{this.props.role === "student" ?
                                    (
                                        <div>
                                            <div style={{ width: this.state.style, marginBottom: "10px" }}> <p clasName="goalfront"></p></div>
                                            {
                                                this.state.height === "0px" ? (<div style={{ width: "270px", height: "25px" }} onClick={this.props.open} class="progress-bar1 huv"></div>) : (<div style={{ width: "270px", height: "25px" }} onClick={this.props.open} class="progress-bar huv">



                                                    <div style={{ width: this.state.style, height: this.state.height }}></div>



                                                </div>)
                                            }



                                        </div>
                                    ) : (
                                        <div>
                                            <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div>Time Practiced</div><div>{this.state.timePracticed} / {this.props.totalTime}</div> </div>


                                            {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar1 huv"></div>) : (<div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar huv">



                                                <div style={{ width: this.state.style, height: this.state.height }}></div>



                                            </div>)}

                                        </div>
                                    )}
                                </div>

                            </div>) : (
                                    <div style={{ marginTop: "15px", height: "25px", marginBottom: "20px" }}>{this.props.role === "student" ?
                                    (
                                        <div>
                                                <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div>Can I see this?</div><div>0</div></div>
                                                {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} class="progress-bar1"></div>)
                                                    :
                                                    (
                                                        <div style={{ width: "270px", height: "18px" }} class="progress-bar huv">
                                                            <div style={{ width: this.state.style, height: this.state.height }}></div>
                                                        </div>
                                                    )
                                                }



                                        </div>
                                    ) : (
                                            <div>
                                                <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div>Star Points</div><div>{this.state.timePracticed} / {this.props.totalTime}</div> </div>


                                                {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar1 huv"></div>) : (<div style={{ width: "270px", height: "18px" }} onClick={this.props.open} class="progress-bar huv">



                                                <div style={{ width: this.state.style, height: this.state.height }}></div>



                                            </div>)}

                                        </div>
                                    )}
                                </div>

                            )
                        
                        }</div>
                        
                        )}
                
            </div>
        );

    }
}
