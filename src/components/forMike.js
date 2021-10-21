//Note if you want this code to run just let me know and I'll send you the right props for each section.

import React, { Component } from 'react';
import Checkd from "./checkbox.js"; // actually not going to export this because I include it in the code below. But it's just to show you what happens if I want to use the component. Which I use a lot.
import Checkboxnum from "./practice.js"; // same here.
import Checkboxnum2 from "./practice2.js"; // same here.





//step 1 the rendered checkbox. I pass Checkboxnum some props and it will spit back out either a checked box or unchecked.
// I'm just showing the teachers view here. Which is view only. The teacher cannot modify the students checkmarks. Last week I demo'd that the checkboxes actually work on the student side when they click them. 
class Checkcomponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }



    render() {
        return (

            <div style={{/*check boxes for the student.*/ display: "flex", }}>
                {student.syncedCheckboxes ? (<Checkboxnum2 list={true} checkboxes={7} prac={student.checked} role={this.props.role} synced={true} sync={student.syncedCheckboxes} times={student.hwtime} />
                ) : (
                        <Checkboxnum checkboxes={student.checkboxes} prac={student.checked} role={this.props.role} />
                    )}




            </div>

        )

    }
}

export default Checkd;


//step 2. middleware function. js Function for the checkboxes to correspond the checkbox with the right day according to the api.

var Checkboxnum2 = function (props) {
    var rows = [];
    var moreprac = false;
    var day = "";
    var time = "";
    for (let i = 0; i < props.checkboxes; i++) {

        if (i === 0) {

            day = "M";
            moreprac = props.sync.mon;
            if (props.times) {
                time = props.times.mon;

            }
        }
        if (i === 1) {
            day = "T";
            moreprac = props.sync.tues;
            if (props.times) {
                time = props.times.tues;

            }

        }
        if (i === 2) {
            day = "W";
            moreprac = props.sync.wed;
            if (props.times) {
                time = props.times.wed;

            }

        }
        if (i === 3) {
            day = "R";
            moreprac = props.sync.thur;
            if (props.times) {
                time = props.times.thur;

            }

        }
        if (i === 4) {
            day = "F";
            moreprac = props.sync.fri;
            if (props.times) {
                time = props.times.fri;

            }

        }
        if (i === 5) {
            day = "S";
            moreprac = props.sync.sat;
            if (props.times) {
                time = props.times.sat;

            }
        }
        if (i === 6) {
            day = "S";
            moreprac = props.sync.sun;
            if (props.times) {
                time = props.times.sun;

            }
        }

        rows.push(<Checkd props={props} flag={moreprac} day={day} time={time} />);


        prac--;
    }

    //will return a mapped arrazy of checkeboxes either checked or unchecked.
    return (
        rows.map((checkboxx, index) =>

            <div key={index} >
                {checkboxx}
            </div>

        )
    )

};




export default Checkboxnum2;


//Step 3. Actual checkbox. I resuse this over and over along all my application which is the react way. 
//This is a custom made checkbox. Css is all custom. I'll show the css at the bottom.
//this is code for the teacher and student depending on the props that are passed in. 
//Note I am using both inline css and classes because I'm playing around with what I like better. I can do both if necessary. 
class Checkedd extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);

        this.state = {
            checkboxValue: this.props.flag,
            practice: 0,
            p: this.props.flag,
            style: "27%",
            hstyle: "20%"
        }

    }

    async markcheckbox(event) {

        event.preventDefault();

        this.setState({
            p: !this.state.p,
        })

        await this.setState({ checkboxValue: !this.state.checkboxValue, });


        this.props.props.practice(this.state.checkboxValue, this.props.props.synced, this.props.day);




    }

    render() {

        return (

            <div>
                { this.props.props.role === "teacher" ? (
                    <div>
                        <input type="checkbox" checked={this.state.checkboxValue} />
                        <label className="change-label2a huv" >
                            {this.state.p ? (
                                <div className="csyncbox">

                                    <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
                                    <div style={{ opacity: "0" }}>
                                        {this.props.day === "M" ?
                                            (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                            : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                    </div>
                                </div>

                            ) : (
                                    <div className="csyncbox">

                                        <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</p>
                                        <div >
                                            {this.props.day === "M" ?
                                                (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<div> {this.props.day === "W" ? (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<h3 style={{ marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                        </div>
                                    </div>

                                )}



                            <div className="tick"></div>
                        </label>
                        <div style={{ marginLeft: "10px" }}>
                            {this.props.time ? (<div>{this.props.time} m</div>) : (<div></div>)}
                        </div>
                    </div>

                ) : (<div >
                    <div >
                    </div>
                    <div>
                        <input type="checkbox" checked={this.state.checkboxValue} />
                        {this.state.p ? (
                            <label onClick={this.markcheckbox} className="change-label huv" >
                                {this.state.p ? (

                                    <div className="csyncbox">

                                        <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>
                                        <div style={{ opacity: "0" }}>
                                            {this.props.day === "M" ?
                                                (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                                : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                    : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                        </div>
                                    </div>

                                ) : (
                                        <div className="csyncbox">
                                            <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px", opacity: "0" }}>{this.props.day}</p>

                                            <div >
                                                {this.props.day === "M" ?
                                                    (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                                    : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                        : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                            </div>
                                        </div>

                                    )}


                                <div className="tick"></div>
                            </label>

                        ) : (<label onClick={this.markcheckbox} className="change-label huv" >
                            <div className="csyncbox">
                                {this.state.p ? (<p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>{this.props.day}</p>) : (
                                    <div >
                                        {this.props.day === "M" ?
                                            (<h3 style={{ marginLeft: "-1px", marginTop: this.state.hstyle, color: "gray" }}>{this.props.day}</h3>)
                                            : (<div> {this.props.day === "W" ? (<h3 style={{ color: "gray", marginLeft: "-1px", marginTop: this.state.hstyle }}>{this.props.day}</h3>)
                                                : (<h3 style={{ color: "gray", marginLeft: this.state.style, marginTop: this.state.hstyle }}>{this.props.day}</h3>)}</div>)}
                                    </div>
                                )}

                            </div>

                            <div className="tick"></div>
                        </label>)}


                        <div style={{ marginLeft: "10px" }}>
                            {this.props.time ? (<div>{this.props.time} m</div>) : (<div></div>)}
                        </div>
                    </div>
                </div>)
                }
            </div>
        )
    }
}

export default Checkedd;


//CSS for Custom checkboxes. I sometimes have need to change the size of the checkbox so there are multiple instances of the css.
/*
@import url('https://fonts.googleapis.com/css?family=Nunito');

: root {
    --checkbox - size: 40px;
    --checkbox - size1: 15px;
    --checkbox - size2: 25px;
    --checkbox - size3: 42px;
    --bg - color: white;
    --checkbox - color: gray;
    --hover - color: black;
    --tick - color: #7A9B76;
}
.change - label {
    display: inline - block;
    margin: 4px;
    margin - top: 3px;
    margin - bottom: 5px;
    width: var(--checkbox - size);
    height: var(--checkbox - size);
    border: calc(var(--checkbox - size) * .05) solid var(--checkbox - color);
    border - radius: 25 %;
    -o - transition: 400ms 100ms ease - out;
    transition: 400ms 100ms ease - out;
}

    .change - label: hover {
    border - color: var(--hover - color);
}
.csyncbox {
    z - index: 0;
    position: relative;
    right: calc(var(--checkbox - size) * -0.16);
    top: calc(var(--checkbox - size) * 0.001);
    width: calc(var(--checkbox - size) * 0.35);
    height: calc(var(--checkbox - size) * 0.75);

}

input[type = "checkbox"] {
    position: absolute;
    left: -1000px;
}

.tick {
    z - index: 0;
    position: relative;
    right: calc(var(--checkbox - size) * -0.5);
    top: calc(var(--checkbox - size) * -0.75);
    width: calc(var(--checkbox - size) * 0.35);
    height: calc(var(--checkbox - size) * 0.75);
    border - right: calc(var(--checkbox - size) * 0.2) solid var(--tick - color);
    border - bottom: calc(var(--checkbox - size) * 0.2) solid var(--tick - color);
    -webkit - transform: rotate(45deg) scale(0);
    -ms - transform: rotate(45deg) scale(0);
    transform: rotate(45deg) scale(0);
    opacity: 0;
    -webkit - transition: all 600ms cubic - bezier(0.175, 0.885, 0.32, 1.5);
    -o - transition: all 600ms cubic - bezier(0.175, 0.885, 0.32, 1.5);
    transition: all 600ms cubic - bezier(0.175, 0.885, 0.32, 1.5);
}

    .tick: before {
    content: '';
    position: absolute;
    left: calc(var(--checkbox - size) * -0.125);
    bottom: calc(var(--checkbox - size) * -0.2);
    border: calc(var(--checkbox - size) * 0.1) solid var(--tick - color);
    border - radius: 50 %;
    z - index: 0;
}

    .tick: after {
    content: '';
    position: absolute;
    right: calc(var(--checkbox - size) * -0.2);
    top: calc(var(--checkbox - size) * -0.125);
    border: calc(var(--checkbox - size) * 0.1) solid var(--tick - color);
    border - radius: 50 %;
    z - index: 0;
}

input[type = "checkbox"]: checked + label.tick {
    opacity: 1;
    -webkit - transform: rotate(45deg) scale(1);
    -ms - transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    z - index: 0;
}
*/