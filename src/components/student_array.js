import React, { Component } from "react";
import Changecurrent from "./changeCurrent.js";



export default class StudentArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.props.account,

        };
    }
        
    

    render() {
        //
        return (<div className="fill2 checkboxstuff1" style={{ backgroundColor: "#f2f2f2", height: "40px" }}>
            {this.props.currentUserChange ? (<div className="checkboxstuff1"><Changecurrent handlePage={this.props.handlePage} current={this.props.currentUserChange} name={this.props.first} accounts={this.props.props} /></div>) : (<div>{

                this.state.current.map((student, index) =>

            <div key={index} onClick={this.props.handlePage.bind(this, student)}>
                <h3 style={{ marginLeft: "30px" }} className="huv rowss">{student.firstName}</h3>
            </div>

                )
            }</div>)}
            
        </div>
        )


    }
}
