import React from 'react';
import Homeworking from './show_homework.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function ShowHomework(props) {
  
    
    return <div style={{zIndex: "1005"}}>

        <Homeworking handleClose={props.hideHomework}
            handletheclose={props.handletheclose}
            homework={props.homework}
            student={props.student}
            role={props.role}
            handleChange={props.handleChange}
            edited={props.edited}

        />
    </div>
}

export default ShowHomework;