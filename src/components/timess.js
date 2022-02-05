import React from 'react';
import Times from './times.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function Timess(props) {
  
    
    return <div style={{zIndex: "1005"}}>

        <Times handleClose={props.handleClose}
            handleChange={props.handleChange}
            change={props.change}
            changeweek={props.changeweek}
            weekly={props.weekly}
            syncedCheckbox={props.syncedCheckbox}
            checkboxes={props.checkboxes}
            timecheck={props.timecheck}
            timedaycheck={props.timedaycheck}
        />
    </div>
}

export default Timess;