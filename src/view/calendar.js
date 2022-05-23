import React, { Component } from "react";


class Calendar extends Component {
    constructor(props) {
        super(props);
      

        this.state = {
        

    };
}
    
    
   
    render() {


        return (
            <div className="calcard" style={{display:"flex", flexDirection:"row", }}>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Monday.map((student, index) =><div key={index} >{student.firstName}</div>)} </div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Tuesday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Wednesday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Thursday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Friday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Saturday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                <div style={{display:"flex", flexDirection:"column", marginRight:"10px" }}>{this.props.state.appointments.Sunday.map((student, index) =><div key={index} >{student.firstName}</div>)}</div>
                </div>

        );
    }
}

export default Calendar;