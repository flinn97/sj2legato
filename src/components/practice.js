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
      
        rows.push(<Checkd props={props} flag={moreprac} checkboxes={true}  />);
        
        
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
