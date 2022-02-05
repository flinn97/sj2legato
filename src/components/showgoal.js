import React from 'react';
import Show_goal from './show_goal.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function ShowGoal(props) {
  
    
    return <div style={{zIndex: "1005"}}>

        <Show_goal handleClose={props.handleClose}

            Goal={props.Goal}
            role={props.role}
            handleChange={props.handleChange}
            handletheclose={props.handletheclose}
            main={props.main}
        />
    </div>
}

export default ShowGoal;