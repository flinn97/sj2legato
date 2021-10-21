import React from 'react';
import Homeworkes from './homeworked';
//allows me to create a dialog box to pop up for adding students with names and emails.
function Homeworke(props) {
  
    
    return <div style={{zIndex: "1005"}}>

        <Homeworkes handleClose={props.handleHomework}
            handleChange={props.handleChange}
            handleClosing={props.handleClose}
            practice={props.practice} research={props.research} assignment={props.assignment}
        />
    </div>
}

export default Homeworke;