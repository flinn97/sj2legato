import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class addGoal extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.AddUpdateDeleteArchiveGoal= this.AddUpdateDeleteArchiveGoal.bind(this);
        this.state = {
            title: "",
            description: ""
        }
    };
    async componentDidMount() {
        if(this.props.state.showgoal){
            await this.setState({
                title: this.props.state.main? this.props.state.maingoal.mainGoal.title : this.props.state.goal.title,
                description: this.props.state.main? this.props.state.maingoal.mainGoal.description : this.props.state.goal.description
            })
            this.props.dispatch({title:this.state.title, description:this.state.description})
        }
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.handleClose();
        }
    }
    AddUpdateDeleteArchiveGoal(){
        
        if(this.props.state.showgoal){
            let ob = this.props.state.main? {mainGoal:{id: this.props.state.maingoal.mainGoal.id, complete:this.props.state.maingoal.mainGoal.complete, 
                completed: this.props.state.maingoal.mainGoal.completed, date: this.props.state.maingoal.mainGoal.date, 
                description: this.state.description !== this.props.state.description? this.props.state.description: this.state.description , 
                goals:this.props.state.maingoal.mainGoal.goals, title:this.state.title !== this.props.state.title? this.props.state.title: this.state.title} ,_id: this.props.state.maingoal._id}: 
                {_id:this.props.state.goal._id, id:this.props.state.goal.id, complete:this.props.state.goal.complete, completed: this.props.state.goal.completed, description:  this.props.state.description, title:this.props.state.title}
        this.props.AddUpdateDeleteArchiveGoal(this.props.state.main?false:ob, this.props.state.main? ob: this.props.state.maingoal , this.props.state.main?"updatemain":"updategoal")
        }
        else{
        let ob = this.props.state.main? {mainGoal:{id: Date.now(), complete:false, completed: "", date:"", description: this.props.state.description, goals:[], title:this.props.state.title}}: {id: Date.now(), complete:false, completed: "",description: this.props.state.description,title:this.props.state.title}
        this.props.AddUpdateDeleteArchiveGoal(this.props.state.main?false:ob, this.props.state.main? ob: this.props.state.maingoal , this.props.state.main?"addmain":"addgoal")
    }
}

    render() {
        return (
            <div className="popup-box" style={{ zIndex: "1010" }}>
                <div ref={this.wrapperRef}  className="diapicboxa" style={{ zIndex: "1010" }}>
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <div className="form-group">
                        <label htmlFor="lastName"><h5>Add Goal</h5></label>
                        <input
                            type="text"
                            className="form-control"
                            id="goal"
                            placeholder= {this.state.title!==""? this.state.title: ""}
                            onChange={this.props.handleChange}
                            name="title"
                        />
                    </div>
                    <div >
                        <label htmlFor="description"><h5>Description</h5></label>
                        <div className="form-group" >
                            <textarea
                                type="text"
                                className="form-control"
                                rows="4"
                                id="description"
                                placeholder= {this.state.description!==""? this.state.description: ""}
                                onChange={this.props.handleChange}
                                name="description"

                            ></textarea>
                        </div>

                    </div>
                   

                    <div>

                        <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF" }}  onClick={this.AddUpdateDeleteArchiveGoal}>Add Goal</button>
                    </div>





                </div>
            </div>

        )
    }
};

export default addGoal;