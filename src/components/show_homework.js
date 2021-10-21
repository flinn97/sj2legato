import React, { Component } from 'react';
import Checkboxnum from "./practice.js";
import AuthService from "../services/auth.service";
import edit from "./edit.png";
import Checkboxnum2 from "./practice2.js";

//import PropTypes from 'prop-types';


//allows me to create a dialog box to pop up for adding students with names and emails.
export default class Homeworking extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.practice = this.practice.bind(this);
        this.editMe = this.editMe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.setWrapperRef = this.setWrapperRef;
        this.editMe1 = this.editMe1.bind(this);

        
        this.state = {
            checked: this.props.homework.hwchecked,
            edit: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            yesnoTimes: true,
            edited: false,
            tempHW: this.props.homework.title,
            tempDescription: this.props.homework.description,
            tempday: this.props.homework.daily,
            tempcheckboxes: this.props.homework.hwcheckboxes,
            ttempHW: "",
            ttempDescription: "",
            ttempday: "",
            ttempcheckboxes: "",
            ttempdate: "",
            tempresearch: this.props.homework.research,
            ttempresearch: "",
            inside: false,
            outside: false,
            close: false,
            tempdate: this.props.homework.date,
            hwtype: this.props.homework.hwtype,
            realtimestudent: {
                checkboxes: false,
                syncedCheckbox: true,

            },

        }
       

    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.handleClose();
        }
    }

    editMe(done, x) {
        if (done) {
            if (this.state.ttempHW.length > 0) {
                this.setState({
                    tempHW: this.state.ttempHW,
                    edit: !this.state.edit,
                    edited: true,

                })
            }
            else {
                this.setState({
                    edit: !this.state.edit,
                })
            }
        }
        else if (x) {
            this.setState({
                edit: !this.state.edit,
                ttempHW: "",

            })
        }
        else {
            this.setState({
                edit: !this.state.edit,
            })
        }
    }
    editMe1() {

        console.log('edit me');

        this.setState({
            edit: !this.state.edit,


        })
    }
   

    handleChange = (event) => {
        const { name, value } = event.target
       

        this.setState({
            [name]: value,
        })

      
    }

    practice(sign) {
        
        let x = this.state.checked;
        if (sign) {
            x++;

        }
        else {
            x--;

        }
        AuthService.hwchecked(this.props.student, this.props.homework._id, x,);

    }

    async handleClose( inside) {
        
       
        
            if (this.state.edited) {
                await this.props.handletheclose(this.props.homework.HWtempID, this.state.tempHW, this.state.tempDescription, this.state.hwtype, this.state.tempday, this.state.tempcheckboxes, this.state.tempdate, this.state.tempresearch);
                this.props.handleClose();
            }
            else {
                this.props.handleClose();
            }
        

    }
    

    render() {

        return (
            <div  className="popup-boxa to-front" >

                <div ref={this.wrapperRef} className="card-container6abc1sh" >
                    <div className="fill2 homeworkScroll" >
                    <span className="close-icon-2" onClick={this.handleClose.bind(this, false)}>x</span>
                    <div style={{ width: "100%" }}>
                        <div style={{marginBottom: "7px"}}>
                                {this.state.edit ? (<div style={{ marginBottom: "30px" }}>
                                    <div ><p className="rowss huv" onClick={this.editMe1}>back</p></div>
                            <div className="checkboxstuff">
                                    Type: <select style={{ marginLeft: "3px" }} htmlfor="hwtype" onChange={this.handleChange} name="hwtype" id="hwtype">
                                        <option value={this.state.hwtype}>{this.state.hwtype}</option>
                                    <option value="practice">practice</option>
                                    <option value="assignment">assignment</option>
                                    <option value="research">research</option>


                                </select>
                                
                            </div>

                        </div>


                        ) : (<div>
                            <div>
                                <div>Type: {this.state.hwtype}</div>

                            </div>
                           
                                </div>)}
                        </div>
                        <div style={{ marginBottom: "30px" }}>

                        {this.state.edit ? (<div>
                                    <div style={{ marginBottom: "30px" }}>
                                        <label htmlFor="ttempHW"><h5>Homework Title</h5></label>

                                        
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ttempHW"
                                        value={this.state.tempHW}
                                        onChange={this.handleChange}
                                            name="tempHW"
                                            style={{ width: "400px" }}
                                    />
                                </div>

                            </div>


                        </div>) : (<div> <h1>{this.state.tempHW} </h1>
                            
                                </div>)}



                        </div>
                        {this.state.hwtype === "practice" ? (
                            <div className="centerized">
                                    {this.props.role === "student" ? (<div className="checkboxstuff">

                                        <Checkboxnum2 checkboxes={7} prac={this.state.realtimestudent.checked} synced={true} role={"teacher"} sync={this.state.realtimestudent.syncedCheckboxes} times={this.state.realtimestudent.hwtime} />
                                    <Checkboxnum checkboxes={this.props.homework.hwcheckboxes} prac={this.props.homework.hwchecked} practice={this.practice} />


                                </div>
                                    ) : (<div>


                                            {this.state.edit ? (<div>
                                                <div>
                                                    <p>Sync Checkboxes with Days??</p>
                                                    <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>

                                                        
                                                    </select>
                                                </div>
                                                <div >
                                                    <p>How many times should this student practice this peace per week?</p>
                                                    <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                                        <option value=""></option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="0">0</option>
                                                    </select>
                                                </div>

                                                <div >
                                                    <p>Add a weekly time goal for this practice assignment?</p>
                                                    <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>


                                                    </select>
                                                </div>
                                                {this.state.yesnoTimes ? (<div>
                                                    <div className="form-group">
                                                        <label>How much time per week?</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="daily"
                                                            required
                                                            onChange={this.props.handleChange}
                                                            name="daily"
                                                        />

                                                    </div>
                                                </div>) : (<div></div>)}

                                                <div >
                                                    <p>Add a Dailey time goal for this student. </p>
                                                    <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                                        <option value=""></option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>
                                                    </select>
                                                </div>
                                                {this.state.yesnoTimes ? (<div>
                                                    <div className="form-group">
                                                        <label>How much time?</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="daily"
                                                            required
                                                            onChange={this.props.handleChange}
                                                            name="daily"
                                                        />

                                                    </div>
                                                </div>) : (<div></div>)}

                                                
                                                </div>
                                            ) : (
                                                    
                                                    <div>
                                                        <div className="checkboxstuff" style={{ marginBottom: "7px" }}>
                                                            {this.props.homework.hwsynccheck ? (
                                                                <Checkboxnum2 checkboxes={7} prac={this.props.homework.hwchecked} synced={true} role={"teacher"} sync={this.props.homework.syncedCheckboxes} times={this.props.homework.hwtime} />
                                                            ): (
                                                                <Checkboxnum checkboxes = {this.state.tempcheckboxes} prac={this.props.homework.hwchecked} role={"teacher"} />
                                                            )}
                                                            




                                                        </div>
                                                        <div className="centerized checkboxstuff1" style={{ width: "100%", marginTop: "2px", marginBottom: "40px" }}>
                                                            {this.state.realtimestudent === false ? (<div className="centerized " style={{ width: "300px" }} ><div></div></div>
                                                            ) : (<div className="checkboxstuff1a" >
                                                                {this.state.realtimestudent.checkboxes ? (<div>{this.state.realtimestudent.checkboxes !== "0" ? (

                                                                    <div style={{ width: "125px" }} >
                                                                        <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "100%" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>
                                                                    </div>

                                                                ) : (<div></div>)}</div>
                                                                ) : (<div>
                                                                    {this.state.realtimestudent.syncedCheckbox ? (
                                                                        <div style={{ width: "125px" }} >

                                                                            <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "100%" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>

                                                                        </div>
                                                                    ) : (<div></div>)}
                                                                </div>)}

                                                                <div style={{ width: "125px" }} >
                                                                    <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "100%" }} onClick={this.clearTime}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time</p></span></button>
                                                                </div>
                                                            </div>

                                                                )}

                                                        </div>
                                                    </div>
                                                    
                                                    )}
                                        
                                </div>
                                    )
                                }



                            </div>

                        ): (<div></div>)}
                        



                        <div style={{ marginBottom: "20px" }}>
                                {this.state.edit ? (<div >
                                   
                                    <div >
                                        <label htmlFor="ttempHW"><h5>Description</h5></label>
                                    <div className="form-group" >

                                    <textarea
                                        type="text"
                                        className="form-control"
                                        rows="4"
                                        id="tempDescription"
                                            value={this.state.tempDescription}
                                        onChange={this.handleChange}
                                            name="tempDescription"
                                            style={{ width: "400px" }}
                                    ></textarea>
                                </div>
                                
                            </div>

                        </div>


                        ) : (<div>
                            Description: {this.state.tempDescription} 
                                        </div>)}
                                </div>
                        <div style={{ marginBottom: "10px" }}>
                        {this.state.hwtype === "practice" ? (<div>
                            {this.state.edit ? (<div>
                                        <div >
                                            <label htmlFor="ttempHW"><p>How many practice times per day? (leave blank if not applicable.)</p></label>
                                    <div className="form-group" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ttempday"
                                            placeholder={this.state.tempday}
                                            onChange={this.handleChange}
                                            name="ttempday"
                                        />
                                    </div>
                                    
                                </div>

                            </div>


                            ) : (<div>
                                <div>
                                    Times per day: {this.state.tempday}
                                </div>
                            </div>)}
                        </div>) : (<div>
                                <div>
                                    {this.state.edit ? (<div>
                                        <div className="checkboxstuff">
                                            <div className="form-group" >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    rows="1"
                                                    id="ttempdate"
                                                    placeholder={this.state.tempdate}
                                                    onChange={this.handleChange}
                                                    name="ttempdate"
                                                />
                                            </div>
                                           
                                        </div>

                                    </div>


                                    ) : (<div>
                                        due on: {this.state.tempdate} 
                                        
                                        </div>)}
                                    


                                </div>
                                        </div>)}
                            </div>
                            <div style={{ marginBottom: "20px" }}>
                                {this.state.edit ? (<div >

                                    <div >
                                        <label htmlFor="ttempHW"><p>include abiltity for students to detail strugggles?</p></label>
                                        <div className="form-group" >

                                            <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                                <option value=""></option>
                                                <option value={true}>yes</option>
                                                <option value={false}>no</option>
                                                <option value={false}>Not Applicaple</option>
                                            </select>
                                        </div>

                                    </div>
                                     <div >
                                    <label htmlFor="ttempHW"><p>include abiltity for students ask questions through messaging?</p></label>
                                    <div className="form-group" >

                                        <select htmlfor="tempcheckboxes" onChange={this.handleChange} name="tempcheckboxes" id="tempcheckboxes">
                                            <option value=""></option>
                                            <option value={true}>yes</option>
                                            <option value={false}>no</option>
                                            <option value={false}>Not Applicaple</option>
                                        </select>
                                    </div>

                                </div>

                                </div>


                                ) : (<div>
                                  
                                </div>)}
                            </div>


                        <div>
                            {this.props.role === "student" ? (<div></div>): (

                                <div>
                                {this.state.edit ? (
                                    <div style={{ width: "125px" }} >
                                <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF" }} onClick={this.editMe.bind(this, true, false)}><span className="fill1"><p style={{ marginBottom: "10px" }}>Save</p></span></button>
                                        </div>) : (<p className="rowss2a huv" onClick={this.editMe}>edit</p>)}

                               </div>

                                
                                    
                                    )}


                  



                                </div>





                  
                    </div>
                    </div>
                    {!this.state.edit ? (

                        <div style={{ borderTop: "1px solid gray" }} >
                            <div>
                                Student Struggles.
                            </div>
                            <div style={{ marginTop: "15px", }}>
                                <p style={{ marginBottom: "10px" }}> Student questions and messaging. </p>
                                <div style={{ height: "200px", borderTop: "1px solid green", borderLeft: "1px solid green", borderRight: "1px solid green" }}>
                                    <div style={{ flexDirection: "column" }}>
                                        <div style={{ width: "100%", height: "100px", }}>
                                            <div style={{ width: "100px", height: "100px", float: "left", marginLeft: "10px", marginTop: "10px" }}>
                                                <img
                                                    src={this.state.picture}
                                                    alt="profile-img"
                                                    className="profile-img-card cropped1"
                                                    style={{ alignSelf: "flex-start" }}

                                                />
                                            </div>
                                        </div>
                                        <p style={{ marginLeft: "20px", marginTop: "20px", color: "gray" }}>This is your first message about this homework to this student. </p>
                                    </div>

                                </div>
                                <div className="fill2" style={{
                                }}>
                                    <div className="form-group" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            rows="1"
                                            id="struggles"
                                            placeholder="Message this student about this homework"
                                            onChange={this.handleChange}
                                            name="struggles"
                                        />
                                    </div>

                                </div>

                            </div>

                        </div>
                    ) : (<div>


                        </div>)}
                    
                </div>
            </div>
            

        )

    }
}
//Homeworking.propTypes = {
 //   children: PropTypes.element.isRequired,
//};

