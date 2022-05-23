import React, { Component } from "react";
import "./progress_circle.css";
//not much here but functionality will be added for the goals.
export default class Progressbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: this.props.totalDays,
            timeprogress: this.props.totaltime,
            starpoints: this.props.starpoints,
            starpointsProg: this.props.spGoal,
            time: this.props.timePracticed,
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
        if(this.props.day){
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
            if(parseInt(calc) >100){
                calc=100
                console.log("calc", calc);
            }
            console.log("calc", calc);
            this.setState({
                style: calc.toString() + "%",
                height: "40px"
            })
        }

        }
        else if(this.props.time){
            let percent = 100 / this.state.timeprogress;
        console.log(percent);
        
        let calc = percent * this.state.time;

        console.log(this.state.time);
        if (calc === 0) {
            this.setState({
                style: "0px",
                height: "0px",
            })
        }
        else {
            if(parseInt(calc) >100){
                calc=100;
                console.log("calc", calc);
            }
            console.log("calc", calc);
            this.setState({
                style: calc.toString() + "%",
                height: "40px"
            })
        }

        }
        else{
            let percent = 100 / this.state.starpointsProg;
        console.log(percent);
        
        let calc = percent * this.state.starpoints;

        console.log(this.state.starpoints);
        if (calc === 0) {
            this.setState({
                style: "0px",
                height: "0px",
            })
        }
        else {
            if(parseInt(calc) >100){
                calc=100;
                console.log("calc", calc);
            }
            console.log("calc", calc);
            this.setState({
                style: calc.toString() + "%",
                height: "40px"
            })
        }
        }
        
        
        
        
    }
  
    render() {
        return (
            
            <div className= "centerized" style={{ width: "100%" }}>
                {this.props.day ?
                    (
                        <div style={{ width: "270px" }}>{
                            this.props.totalDays === 0  ? (

                                <div>{this.props.role === "student" ? (<div>No Days Set by Teacher</div>) : (<div style={{ width: "270px" }}><button style={{ width: "270px" }} className="btn btn-primary btn-block" value="submit" >Practice days set. </button></div>
)}
                                    </div>

                            ) :
                                (
                                    <div>
                                        {this.props.totalDays ? (
                                            <div>{this.props.role === "student" ?
                                                (
                                                    <div style={{ marginTop: "25px" }}>

                                                        <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Days Practiced:</b></div><div>{this.state.daysPracticed} / {this.props.totalDays}</div></div>

                                                        {this.state.height === "0px" ? (
                                                            <div style={{ width: "270px", height: "18px" }} class="progress-bar1"></div>
                                                        )
                                                            :
                                                            (
                                                                <div style={{ width: "270px", height: "18px" }} class="progress-bar ">
                                                            <div style={{ width: this.state.style, height: "18px"}}></div>
                                                                </div>
                                                            )
                                                        }
                                                        

                                                    </div>
                                                    
                                                ) 
                                                        : 
                                                        (
                                                    <div style={{ marginTop: "15px" }}>
                                                        <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Days Practiced:</b></div><div>{this.state.daysPracticed} / {this.props.totalDays}</div> </div>

                                                        {this.state.height === "0px" ? (

                                                            <div style={{ width: "270px", height: "18px" }}  class="progress-bar1 "></div>
                                                        ) : (
                                                                <div style={{ width: "270px", height: "18px" }}  class="progress-bar ">
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
                                <div style={{  height: "20px" }}>{this.props.role === "student" ?
                                    (
                                        <div>
                                            <div style={{ marginLeft: "5px", marginTop: "10px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Time Practiced:</b></div><div>{this.props.timePracticed} m / {this.props.totaltime} m</div> </div>


                                            {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }}  class="progress-bar1"></div>) : (<div style={{ width: "270px", height: "18px" }}  class="progress-bar ">



                                                <div style={{ width: this.state.style, height: this.state.height }}></div>



                                            </div>)}

                                        </div>
                                    ) : (
                                        <div style={{ marginTop: "15px", }}>
                                            <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Time Practiced:</b></div><div>{this.props.timePracticed} m / {this.props.totaltime} m</div> </div>


                                            {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }}  class="progress-bar1 "></div>) : (<div style={{ width: "270px", height: "18px" }}  class="progress-bar ">



                                                <div style={{ width: this.state.style, height: this.state.height }}></div>



                                            </div>)}

                                        </div>
                                    )}
                                </div>

                            </div>) : (
                                    <div>{this.props.role === "student" ?
                                    (
                                            <div style={{ marginTop: "10px", height: "25px",  }}>
                                                <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Star Points:</b></div><div>{this.props.starpoints} / {this.props.spGoal}</div></div>
                                                {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }} class="progress-bar1"></div>)
                                                    :
                                                    (
                                                        <div style={{ width: "270px", height: "18px" }} class="progress-bar ">
                                                            <div style={{ width: this.state.style, height: this.state.height }}></div>
                                                        </div>
                                                    )
                                                }



                                        </div>
                                    ) : (
                                            <div style={{ marginTop: "15px", height: "25px", marginBottom: "20px" }}>
                                                <div style={{ marginLeft: "5px", marginBottom: "0px", justifyContent: "space-between", flexDirection: "row", display: "flex", width: "260px" }} ><div><b>Star Points:</b></div><div> {this.props.starpoints} / {this.props.spGoal}</div> </div>


                                                {this.state.height === "0px" ? (<div style={{ width: "270px", height: "18px" }}  class="progress-bar1 "></div>) : (<div style={{ width: "270px", height: "18px" }}  class="progress-bar ">



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
