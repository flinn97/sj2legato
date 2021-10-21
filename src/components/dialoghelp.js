import React, { useState } from 'react';
import Popup from './addStudent.js';
//allows me to create a dialog box to pop up for adding students with names and emails.
function AddStudent(props) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const AddStudents = (e) => {
        props.addStudentButton(e);
        togglePopup();

    }
    
    return <div style={{zIndex: "1005", width: "20%", marginTop:"5px"}}>
        <button
            className="btn btn-block"
            type="button"
            onClick={togglePopup}
            style={{ height: "40px", background: "#696eb5", color: "#F0F2EF"}}
        >Add Student</button>
        {isOpen && <Popup handleChange={props.handleChange}
            AddStudents={AddStudents}
            handleClose={togglePopup}
            message={props.message}
            messag={props.messag}
        />}
    </div>
}

export default AddStudent;