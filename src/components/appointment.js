import React from "react";




var Appointment = function (props) {
    console.log(props.appointment);
    
    return (
        <div>{
            props.appointment.map((appointment, index) =>

                <div key={index} >
                    {appointment.firstName}
                </div>
                )}
            
        
        </div>
    )

};

export default Appointment;
