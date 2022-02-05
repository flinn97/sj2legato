import React, { Component } from "react"
import "./components.css";
import edit from "./edit.png";
import trash from "./Trash1.png";
import Percent from "./percent.js";
//import { Dropdown } from "bootstrap";
import Short from "./short.js";
import Dropdown from "./dropdown.js";
import Progress from "./progress.js";
import Splashscreen  from "../components/splashscreen.js";

//import AuthService from "../services/auth.service";

//simply sets state and maps every student found in the current list of students to a button that is clickable.
export default class proStudent extends Component {
    constructor(props) {
        super(props);
        this.dropdown = this.dropdown.bind(this);
        this.backup = this.backup.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);

        
        this.state = {
            dropdown: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            splashscreen: false,
            
        }

    };
    dropdown() {
        this.setState({
            dropdown: true,
        })
    }
    backup() {
        this.setState({
            dropdown: false,
        })
    }
    Splashscreen(){
        this.setState({splashscreen:false})
    }
   async profile(student) {
        await this.setState({splashscreen:true})
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(500)
        this.props.history.push({
            pathname: "/student",
            state: { detail: student }
        });
    
    }
    

    render() {
       
        return (
            <div style={{ height: "100%", width: "100%" }} >
                {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
                <h1 className="centerized"> My Students:</h1>
           
                <div style={{ height: "90%", width: "100%" }} className="homeworkScroll">

                                <div  style={{ width: "100%" }} >
        {
            this.props.students.map((student, index) =>

                <div className ="prorow1 " key={index} >
                    <div style={{ display:"flex", flexDirection:"row"}}>
                    <div style={{ width:"90px"}}>
                        <div className="proStudpic1" style={{ width: "70px", marginTop:"8px"}}>

                        <div className="centerized">
                            {student.profilepic ? (
                                 <div>
                                 <Progress pic={student.profilepic} profile={true} goals={student.goals} main={student.mainGoal} userProfile={true}/>

                             </div>
                     ) : (<div>
                             <Progress pic={this.state.picture} profile={true} goals={student.goals} main={student.mainGoal} userProfile={true} />
                             </div>
                                
                            
                                   
                                    )}

                            </div>
                        </div>
                        </div>
                    <div style={{ width: "190px", height: "35px",  }}>
                        <div style={{ width: "100%", marginTop: "20px", display:"flex", flexDirection:"column" }}>

                            {(student.firstName.length + student.lastName.length) > 17 ? (<div style={{color:"#696eb5"}} className="huv rowss1" onClick={this.profile.bind(this, student)}><Short word1={student.firstName} word2={student.lastName} wordtype="pro" /></div>) :
                                (<div className="huv " onClick={this.profile.bind(this, student)} style={{color:"#696eb5"}}>{student.firstName} {student.lastName} </div>)}
                                {student.daysPracticed?(<div>{student.daysPracticed} Days Practiced</div>):(<div>0 Days Practiced</div>)}
                                {student.mainGoal ? (<div><Percent goals={student.goals} main={student.mainGoal} one={true}/> </div>) : (<div>0% Goals Completed</div>)}

                        </div>
                        </div>
                        
                    </div>
                    
                    
                    <div style={{ height: "35px", width:"18px" }}>
                        <div>
                            <img
                                src={trash}
                                alt="profile-img"
                                onClick={this.props.del.bind(this, student)}
                                style={{ marginTop: "45px", float: "right", marginRight: "20px", width: "18px", height: "18px" , opacity:".5"}}
                                className= "huv"

                            />
                           
                        </div>
                    </div>
                    </div>

                )
                    }

                    </div>
                    </div>
                </div>
        )
                   

    }
}
//hubz