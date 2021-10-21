import React from 'react';
import Goals from './addGoal.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function GoalEdit(props) {
  
    
    return <div style={{zIndex: "1005"}}>

        <Goals handlegoal={props.handlegoal}
            handleChange={props.handleChange}
            handleClosing={props.handleClose}
            main={props.main}
        />
    </div>
}

export default GoalEdit;