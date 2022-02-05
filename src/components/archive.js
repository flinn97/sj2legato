import React, { Component } from "react";
import AuthService from "../services/auth.service";
import trash from "./Trash1.png";


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
        this.props.Splashscreen();

    }

    render() {
        return (

            <div >
                

                <div >
                    
                    
              
                            <div className="fill2" style={{ height: "275px", marginTop:"15px" }} >
                        <div className="homeworkScroll fill2">
                            {this.props.archived.length >0 ? (<div className="fill2">
                                        {
                                            this.props.archived.map((goal, index) =>

                                                <div className="checkboxstuff4 " key={index} style={{marginLeft: "8px", marginBottom:"4px"}}>
                                                    
                                                    <p className="huv rowss" style={{marginRight:"10px"}}>{goal.mainGoal.title}</p>

                                                    <div className="checkboxstuff3forarchive">
                                                        <p>{goal.mainGoal.completed}</p>
                                                        <div className="huv edit3">
                                                        <img
                                                                src={trash}
                                                                alt="delete"
                                                                onClick={this.deleted.bind(this, goal._id)}
                                                                style={{ width: "15px", height: "15px", opacity: ".5" }}


                                                            
                                                        />
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            )
                                        }
                                    </div>) : (
                                            <div style={{marginLeft: "30px"}}>No achievements yet!</div>)}

                                </div>
                            </div>
                        
                        
                    </div>
                    
                        

                    



                </div>

            
        );
    }
}