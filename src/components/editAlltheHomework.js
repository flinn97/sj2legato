import React, { Component } from "react";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class EditAlltheHomework extends Component {
    constructor(props) {
        super(props);
            this.wrapperRef = React.createRef();
            this.handleClickOutside = this.handleClickOutside.bind(this);
            this.setWrapperRef = this.setWrapperRef;
            this.handleChange = this.handleChange.bind(this);

            this.state = {
                yesnoWeektext: this.props.yesnoWeektext,
                yesnoWeek: this.props.yesnoWeek,
                yesnoDay: this.props.yesnoDay,
                yesnoDaytext: this.props.yesnoDaytext,
                justifyContent:""
            }

        }
handleChange(event){
    
    const { name, value } = event.target
    if(name==="yesnoDaytext"){
        if(value!==""){
            this.setState({
                yesnoDay: true
            })
            this.props.handleChange(event)
        }
    }
    if(name==="yesnoWeektext"){
        if(value!==""){
            this.setState({
                yesnoWeek: true
            })
            this.props.handleChange(event)
        }
    }


    this.setState({
        [name]: value,
    })

    if (value === "true") {
        this.setState({
            [name]: true,
        })
    }
    else if (value === "false") {
        this.setState({
            [name]: false,
        })
    }
    this.props.handleChange(event);
}
        componentDidMount() {
            if(parseInt(window.innerWidth) <= 550){
                this.setState({ 
                    justifyContent: "center"
                    
                });
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
    
 

    render() {
        return (
            <div className="popup-box" style={{ zIndex: "1010" }}>
                <div className="card-container6abc1shedit " style={{ zIndex: "1010", }} ref={this.wrapperRef} >
                    <div className="homeworkScroll1">
                    <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                    <h3 style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}>Homework Tracking Options</h3>
                    <div className="form-group">
                        <label>Display practice checkboxes with days of the week? </label>
                        <select htmlfor="yesnoCheckboxsync" onChange={this.props.handleChange} name="yesnoCheckboxsync" id="yesnoCheckboxsync">
                        {this.props.yesnoCheckboxsync?(<option value={true}>Current: yes</option>):( <option value={false}>Current: no</option>)}
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>Track streak of consecutive days practiced?</label>
                        <select htmlfor="yesnoStreak" onChange={this.props.handleChange}  name="yesnoStreak" id="yesnoStreak">
                        {this.props.yesnoStreak?(<option value={true}>Current: yes</option>):( <option value={false}>Current: no</option>)}
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>
                    <div className="form-group">
                        <label>How many days should the student practice?</label>
                        <select htmlfor="yesnocheckboxes" onChange={this.props.handleChange} name="yesnocheckboxes" id="yesnocheckboxes">
                            <option value={this.props.yesnocheckboxes}>Current: {this.props.yesnocheckboxes}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="0">I Don't Want Checkboxes</option>
                        </select>
                    </div>
                    
                    
                         <div className="form-group" >
                         <label htmlFor="yesnoWeektext">How much time should this student practice every week?</label>
                         <input
 
                             type="text"
                             className="form-control"
                             id="yesnoWeektext"
                             style={{ width: "60px" }}
                             onChange={this.handleChange}
                             name="yesnoWeektext"
                             value={this.state.yesnoWeektext}
                         /><p>Minutes</p>
 
 
                     </div>
 
                    
                   
                    {/*<div className="form-group">
                        <label>Daily Time track</label>
                        <select htmlfor="yesnoDay" onChange={this.handleChange} name="yesnoDay" id="yesnoDay">
                        {this.props.yesnoDay?(<option value={true}>Current: yes</option>):( <option value={false}>Current: no</option>)}
                            <option value={true}>yes</option>
                            <option value={false}>no</option>

                        </select>
                    </div>*/}
                    
                        <div className="form-group" >
                        <label htmlFor="yesnoDaytext">How much time should this student practice every day?</label>
                        <input

                            type="text"
                            className="form-control"
                            id="yesnoDaytext"
                            style={{ width: "60px" }}
                            onChange={this.handleChange}
                            name="yesnoDaytext"
                            value={this.state.yesnoDaytext}
                        /><p>Minutes</p>


                    </div>

                    
                    
                    

                    <div>
                        
                        <button style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} className="btn btn-block" value="submit" onClick={this.props.editAlltheHomework}>Save</button>
                    </div>




                    </div>
                </div>
            </div>

        )
    }
};

export default EditAlltheHomework;