import React, { Component } from 'react';
import calendarService from '../services/calendarService';

class Today extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    
    async componentDidMount(){
        let appointments= await calendarService.getOrganizedCalendar(this.props.state.currentuser.students)
        this.props.dispatch({appointments:appointments})
    }

    render() {
       

        return (
            <div className="smallcard">
            <h3>Today</h3>
            <div style={{display:"flex", flexDirection:"column"}}>
                {this.props.state.appointments[this.props.state.today]?.map((student, index) =><div key={index} >{student.firstName}</div>)}
            </div>
            </div>

               
        );
    }
}

export default Today;