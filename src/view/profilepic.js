import React, { Component } from 'react';
class ProfilePic extends Component {
    constructor(props) {
        //create state
        super(props);
        this.state = {
            
        };
    }
    

    render() {
       

        return (
            <div style={{display:"flex", flexDirection:"column", justifycontent:"center"}}>
                <div style={{width: "100px", height:"100px", border:"1px solid black", borderRadius:"50%"}}> </div>
                <div>Zach Kelley</div>
                <div style={{color:"blue"}}>Edit Profile</div>
            </div>
               
        );
    }
}

export default ProfilePic;