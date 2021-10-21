import React, { Component } from "react";
import AuthService from "../services/auth.service";

import trash from "./trash.png";

//not much here but functionality will be added for the goals.
export default class Archive extends Component {
    constructor(props) {
        super(props);
        this.deleted = this.deleted.bind(this);


        this.state = {
            
            
        };
    }
    deleted(id) {
        AuthService.deletefromarchive(id);
        window.location.reload();
    }

    render() {
        return (

            <div >
                

                <div >
                    <div className="checkboxstuff " style={{ marginBottom: "10px", width:"100%" }} >
                        <div style={{ width: "150px", height: "40px" }}><button className="btn " onClick={this.props.changenotes.bind(this, false)} style={{ marginRight: "10px", background: "#696eb5", color: "#F0F2EF", width: "150px", height: "40px"  }}>Completed Goals</button></div>
                        <div style={{ width: "100px", height: "40px"}}><button className="btn btn-block" style={{ marginLeft: "10px", background: "#C8CAE4", color: "#F0F2EF" }} onClick={this.props.changenotes.bind(this, true)} >Notes</button>  </div>
                    </div>
                    
              
                            <div className="fill2" style={{ height: "275px" }} >
                        <div className="homeworkScroll fill2">
                            {this.props.archived ? (<div className="fill2">
                                        {
                                            this.props.archived.map((goal, index) =>

                                                <div className="checkboxstuff4 " key={index} style={{marginLeft: "8px", marginBottom:"4px"}}>
                                                    
                                                    <p className="huv rowss" style={{marginRight:"10px"}}>{goal.title}</p>

                                                    <div className="checkboxstuff3">
                                                        <p>{goal.completed}</p>
                                                        <div className="huv edit3">
                                                        <img
                                                                src={trash}
                                                                alt="delete"
                                                                onClick={this.deleted.bind(this, goal._id)}

                                                            
                                                        />
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            )
                                        }
                                    </div>) : (
                                            <div></div>)}

                                </div>
                            </div>
                        
                        
                    </div>
                    
                        

                    



                </div>

            
        );
    }
}