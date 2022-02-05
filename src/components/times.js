import React, { Component } from "react";
//allows me to create a dialog box to pop up for adding students with names and emails.
export default class Times extends Component {
    constructor(props) {
        super(props);
        //this.more = this.more.bind(this);
        //this.handleChange = this.handleChange.bind(this);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef;
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            stupidTime: [],
            one: "mon",
            two: "tues",
            three: "wed",
            four: "thur",
            five: "fri",
            six: "sat",
            seven: "sun",
            Monday: "mon",
            Tuesday: "tues",
            Wednesday: "wed",
            Thursday: "thur",
            Friday: "fri",
            Saturday: "sat",
            Sunday: "sun",
            checkbox: true


        }

    };
    componentDidMount() {

        var ob = {
            0: "one",
            1: "two",
            2: "three",
            3: "four",
            4: "five",
            5: "six",
            6: "seven",
        }
        var obj = {
            0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday",
            5: "Saturday",
            6: "Sunday",
        }

        let arr= [];
        if(this.props.checkboxes > 0){
            this.setState({
                checkbox:true
            })
        for (let i=0; i<this.props.checkboxes; i++){
            arr.push(ob[i])
        }
    }
    else{
        for(let i=0; i<7; i++){
            arr.push(obj[i])
        }
    }
        this.setState({
            stupidTime: arr
        })
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            if(this.props.timecheck){
                this.props.handleClose(this.props.timecheck);
            }
            else{
                this.props.handleClose(false);

            }
        }
    }
    render() {

        return (

            <div style={{ zIndex: "1005" }}>

                <div className="popup-box" style={{ zIndex: "1010", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div className="card-container5ab121 centerized" style={{ zIndex: "1010", flexDirection: "column"}} ref={this.wrapperRef}>
                        <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                        <h2 className="centerized" style={{ alignSelf: "flex-start", marginBottom: "15px"}} >Log Time</h2>
                        {this.props.weekly ? (

                            <div className="centerized">
                                <div className="centerized" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    {!this.props.timedaycheck?(<div>

                                        {this.props.syncedCheckbox ? (<div>
                                        <div>For which day are you submitting?</div>
                                    <div className="form-group" >
                                        <select style={{ width: "100%", marginBottom: "10px" }} htmlFor="timeedit" onChange={this.props.handleChange} name="timeedit" id="timeedit">
                                            <option value=""></option>
                                            <option value={"mon"}>Monday</option>
                                            <option value={"tues"}>Tuesday</option>
                                            <option value={"wed"}>Wednesday</option>
                                            <option value={"thur"}>Thursday</option>
                                            <option value={"fri"}>Friday</option>
                                            <option value={"sat"}>Saturday</option>
                                            <option value={"sun"}>Sunday</option>

                                           
                                        </select>
                                    </div>

                                    </div>):(
                                        <div>
                                            <div>For which of the following boxes would you like to submit?</div>
                                    <div className="form-group" >
                                        <select style={{ width: "100%", marginBottom: "10px" }} htmlFor="timeedit" onChange={this.props.handleChange} name="timeedit" id="timeedit">
                                            <option value=""></option>
                                            {this.state.stupidTime.map((checkbox, index) =>
                                             <option key ={index} value={this.state[checkbox]} style={{display:"flex", flexDirection:"row"}}> 
                                             {checkbox}</option>


                                                            )
                                                }
                                           

                                           
                                          
                                            


                                        </select>
                                    </div>

                                        </div>
                                    )}
                                    </div>):(<div> <div>How much time would you like to submit today?</div></div>)}
                                    
                                    
                                    <div className="form-group" style={{ display: "flex", flexDirection: "row", marginBottom: "17px" }}  >
                                        <input

                                            type="text"
                                            className="form-control"
                                            id="minedit"
                                            style={{ width: "60px" }}
                                            onChange={this.props.handleChange}
                                            name="minedit"
                                        /><p>Minutes</p>


                                    </div>
                                    <div>

                                        <button className="btn " style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.props.change}>Submit Time</button>
                                    </div>
                                </div>
                            </div>
                        ) : (<div className="centerized" style={{display: "flex", flexDirection: "column"}}>
                                <div style={{ marginBottom: "10px"}}>How much did you practice?</div>

                            <div className="form-group" >
                                <input

                                    type="text"
                                    className="form-control"
                                    id="weeklyTimeEdit"
                                    style={{ width: "60px" }}
                                    onChange={this.props.handleChange}
                                    name="weeklyTimeEdit"
                                /><p>Minutes</p>


                            </div>
                            <div>

                                    <button className="btn" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.props.changeweek}>Submit Time</button>
                            </div>
                        </div>
                            

                        )}
                        
                    </div>
                </div>
            </div>

        )
    }
}

