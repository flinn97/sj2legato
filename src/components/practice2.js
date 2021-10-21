import React from "react";
import Checkd from "./checkbox";



var Checkboxnum2 = function (props) {
    console.log(props);
    var rows = [];
    var prac = props.prac;
    var moreprac = false;
    var day = "";
    var time = "";
    for (let i = 0; i < props.checkboxes; i++) {
        
        if (i === 0) {
            
            day = "M";
            moreprac = props.sync.mon;
            if (props.times) {
                time = props.times.mon;

            }
        }
        if (i === 1) {
            day = "T";
            moreprac = props.sync.tues;
            if (props.times) {
                time = props.times.tues;

            }

        }
        if (i === 2) {
            day = "W";
            moreprac = props.sync.wed;
            if (props.times) {
                time = props.times.wed;

            }

        }
        if (i === 3) {
            day = "R";
            moreprac = props.sync.thur;
            if (props.times) {
                time = props.times.thur;

            }

        }
        if (i === 4) {
            day = "F";
            moreprac = props.sync.fri;
            if (props.times) {
                time = props.times.fri;

            }

        }
        if (i === 5) {
            day = "S";
            moreprac = props.sync.sat;
            if (props.times) {
                time = props.times.sat;

            }
        }
        if (i === 6) {
            day = "S";
            moreprac = props.sync.sun;
            if (props.times) {
                time = props.times.sun;

            }
        }
      
        rows.push(<Checkd props={props} flag={moreprac} day={day} time={time}/>);
        
        
        prac--;
    }
    
    return (
        rows.map((checkboxx, index) => 

            <div key={index} >
                {checkboxx}
            </div>
        
        )
        )
    
};

export default Checkboxnum2;
