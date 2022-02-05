import React from "react";
import Checkd from "./checkbox";



var Checkboxnum = function (props) {

    console.log(props);
    var rows = [];
    var prac = props.prac;
    var moreprac = false;
    for (let i = 0; i < props.checkboxes; i++) {
        if (prac > 0) {
            moreprac = true;
        }
        else {
            moreprac = false;
        }
        let goal = { complete: false}

        var day = {
            0: "mon",
            1: "tues",
            2: "wed",
            3: "thur",
            4: "fri",
            5: "sat",
            6: "sun",
        }
        
       
      
        rows.push(<Checkd props={props} flag={moreprac} checkboxes={true} time={props.times[day[i]]} />);
        
        
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

export default Checkboxnum;
