import React from 'react';
import DelPopups from './del.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function AddStudent(props) {
  
    
    return <div style={{ zIndex: "1005" }}>

        <DelPopups handleClose={props.handleClose}
            delete={props.delete}
        />
    </div>
}

export default AddStudent;