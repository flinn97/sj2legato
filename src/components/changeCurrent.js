import React  from "react";


;

var Changecurrent = function (props) {

    console.log(props);
    console.log("im");

    let ar = [];
    for (let i = 0; i < props.accounts.account.length; i++) {
        console.log(props.accounts.account[i]._id);
        if (props.accounts.account[i]._id === props.current) {
            console.log(props.accounts.account[i])
            let newname = {
                account: props.accounts.account[i],
                first: props.name
            };
            ar.push(newname);
        }
        else {
            let newname = {
                account: props.accounts.account[i],
                first: props.accounts.account[i].firstName
            };
            ar.push(newname);
        }
        console.log(ar);
    }
    
    
    
    return (
        
            ar.map((usr, index) =>

                <div onClick={props.handlePage.bind(this, usr.account)} className="forfiles" key={index} >
                    <h3  style={{ marginLeft: "30px" }} className="huv rowss ">{usr.first}</h3>

                </div>

            )
        
        )
    
};

export default Changecurrent;
