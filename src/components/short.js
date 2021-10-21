import React from "react";


var Short = function (props) {
    var rows = "";
    if (props.wordtype === "goal") {
        for (let i = 0; i < 14; i++) {
            rows += props.word[i];


        }
    }
    if (props.wordtype === "procal") {
        for (let i = 0; i < 6; i++) {
            rows += props.word[i];


        }
        rows += " "
    }
    if (props.wordtype === "procal1") {
        for (let i = 0; i < 5; i++) {
            rows += props.word[i];


        }
        
    }
    if (props.wordtype === "homework") {
        for (let i = 0; i < 25; i++) {
            rows += props.word[i];


        }
    }
    if (props.wordtype === "sHomework") {
        for (let i = 0; i < 35; i++) {
            rows += props.word[i];


        }
    }
    if (props.wordtype === "Goal") {
        for (let i = 0; i < 20; i++) {
            rows += props.word[i];


        }
    }
    if (props.wordtype === "pro") {
        let j = 0;
        for (let i = 0; i < props.word1.length; i++) {
            rows += props.word1[i];
            j++


        }
        rows += " "
        for (let k = j, m = 0; k < 16; k++, m++) {
            rows += props.word2[m]

        }
    }

    
    rows+="..."
    if (props.wordtype === "procal1") {
        return (
            <h5>{rows}</h5>
            )
    }
    else {
        return (


            <div>{rows}</div>
        )
    }
};

export default Short;
