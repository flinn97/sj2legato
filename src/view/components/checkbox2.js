import React, { Component } from 'react';
import "./checkbox.css"
import authService from '../../services/auth.service';
class Checkedd2 extends Component {
    constructor(props) {
        super(props);
        this.markcheckbox = this.markcheckbox.bind(this);
        this.state = {}
    }
    /**
     * 
     * @param {*} e 
     * @param {*} day 
     * check the box send to backend.
     */
    async markcheckbox() {
            
        let mygoal = this.props.main? false: this.props.goal
        let maingoal=this.props.maingoal
        maingoal.mainGoal.complete= this.props.main? !this.props.maingoal.mainGoal.complete: this.props.maingoal.mainGoal.complete;
        if(mygoal){mygoal.complete= !mygoal.complete}
        this.props.AddUpdateDeleteArchiveGoal(mygoal, maingoal, this.props.myswitch);

        

    }

    render() {
        
        return (

            <div style={{display:"flex", flexDirection:"row", }}>
                <input type="checkbox"  checked={this.props.main?this.props.maingoal?.mainGoal?.complete: this.props.goal?.complete  }/>
                <label onClick={this.markcheckbox} className={this.props.size} style={{cursor:"pointer"}}>
                <div className="csyncbox">
                <p style={{ position: "absolute", marginLeft: "-3px", marginTop: "-3px", fontSize: "13px" }}>M</p>
                </div>
                <div className="tick"></div>
                        </label>  
           </div>
            )
}
}

export default Checkedd2;