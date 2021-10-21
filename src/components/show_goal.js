import React, { Component } from 'react';
import Checkboxnum from "./practice.js";
import edit from "./edit.png";

//allows me to create a dialog box to pop up for adding students with names and emails.
class Show_goal extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();

        this.editMe = this.editMe.bind(this);
        this.editMe1 = this.editMe1.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.save = this.save.bind(this);

        this.state = {
            edit: false,
            edit1: false,
            tempGoal: this.props.Goal.title,
            tempDescription: this.props.Goal.description,
            ttempGoal: "",
            edited: false,
            ttempDescription:""
        }
       

    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        if (this.props.Goal.main) {
            this.setState({
                tempGoal: this.props.Goal.main.title,
                tempDescription: this.props.Goal.main.description
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.handleClose();
        }
    }

    save() {
        this.setState({
            edit: !this.state.edit,
            edited: true,

        })

    }
    editMe() {
        
            this.setState({
                edit: !this.state.edit,
            })
        
    }
   
    editMe1(done, x) {
        if (done) {
            if (this.state.ttempDescription.length > 0) {
                this.setState({
                    tempDescription: this.state.ttempDescription,
                    edit1: !this.state.edit1,
                    edited: true,

                })
            }
            else {
                this.setState({
                    edit1: !this.state.edit1,
                })
            }
        }
        else if (x) {
            this.setState({
                edit1: !this.state.edit1,
                ttempDescription: "",

            })
        }
        else {
            this.setState({
                edit1: !this.state.edit1,
            })
        }




    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })

    }

    async handleClose() {
        if (this.state.edited) {
            if (this.props.Goal.main) {
                await this.props.handletheclose(this.props.Goal.tempID, this.state.tempGoal, this.state.tempDescription, true);

            }
            else {
                await this.props.handletheclose(this.props.Goal.tempID, this.state.tempGoal, this.state.tempDescription);
            }
            this.props.handleClose();
        }
        else {
            this.props.handleClose();
        }

    }
  

    render() {

        return (
            <div className="popup-box to-front">
                <div ref={this.wrapperRef} className="diapicboxa">
                    <span className="close-icon-2" onClick={this.handleClose}>x</span>

                   
                    <div>
                        {this.props.role === "teacher" ? (


                            <div>


                                {this.state.edit ? (<div>
                                    <div>
                                        <label htmlFor="tempGoal"><h5>Goal Title</h5></label>

                                        <div lassName="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                                id="tempGoal"
                                                value={this.state.tempGoal}
                                            onChange={this.handleChange}
                                                name="tempGoal"
                                        />
                                    </div>
                                      
                                    </div>


                                </div>) : (<div className="centerize" style={{ margin: "0 auto" }}>
                                        <div className="checkboxstuff" style={{ margin: "0 auto" }}>
                                        <h1 >{this.state.tempGoal} </h1>
                                        
                                        </div>
                                    </div>)}



                              


                                    <div style={{ marginBottom: "20px" }}>
                                        {this.state.edit ? (<div >

                                            <div >
                                            <label htmlFor="tempDescription"><h5>Description</h5></label>
                                                <div className="form-group" >

                                                    <textarea
                                                        type="text"
                                                        className="form-control"
                                                        rows="4"
                                                        id="tempDescription"
                                                        value={this.state.tempDescription}
                                                        onChange={this.handleChange}
                                                        name="tempDescription"
                                                       
                                                    ></textarea>
                                                </div>

                                            </div>

                                        </div>


                                        ) : (<div>
                                                <div className="centerize" style={{ margin: "0 auto", marginTop:"10px" }}>
                                                <div className="checkboxstuff" style={{ margin: "0 auto", height: "200px" }}>
                                                    <div className="homeworkScroll">
                                                        <p ><b>Description </b>: {this.state.tempDescription} </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            
                                        </div>)}
                                    </div>



                                    
                                   



                               


                                    
                              

                                



                               
                            

                        </div>

                        )
                            :

                            (<div className="centerized" ><h1>{this.props.Goal.title} </h1>
                            <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                            <div className="centerized" >
                            {this.props.Goal.description}
                            </div></div>)}
                        
                           
                        {this.props.role !== "student" ? (

                            <div style={{ position: "abosolute", bottom: "0px" }}>
                                {this.state.edit ? (
                                    <div style={{ width: "125px" }} >
                                        <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF" }} onClick={this.save}><span className="fill1"><p style={{ marginBottom: "10px" }}>Save</p></span></button>
                                    </div>) : (<p className="rowss2a huv centerized" onClick={this.editMe}>edit</p>)}

                            </div>) : (

                                <div></div>)}
                    </div>
                    
                   
                </div>
            </div>
        )

    }
}

export default Show_goal;