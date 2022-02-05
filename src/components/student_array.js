import React, { Component } from "react";
import Changecurrent from "./changeCurrent.js";



export default class StudentArray extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.props.account,
            show: this.props.show,

        };
    }
        
    

    render() {
        //
        return (
            <div>{this.state.show?(<div><div className=" checkboxstuff1" style={{ backgroundColor: "white", height: "40px", borderRadius: "0px 0px 5px 0px", position:"absolute", zIndex:"2000",
            border: "1px solid #000000", paddingRight:"50px" }}>
                
                {this.props.currentUserChange ? (<div className="checkboxstuff1"><Changecurrent handlePage={this.props.handlePage} current={this.props.currentUserChange} name={this.props.first} accounts={this.props.props} /></div>) : (<div>{
    
                    this.state.current.map((student, index) =>
    
                <div key={index} onClick={this.props.handlePage.bind(this, student)}>
                    <h3 style={{ marginLeft: "30px", }} className="huv rowss">{student.firstName}</h3>
                </div>
    
                    )
                }</div>)}
                
            </div></div>):(<div></div>)}</div>
        
        )


    }
}
