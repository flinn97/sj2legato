import React, { Component } from "react";
import Checkedd from "../components/checkbox";
import Times from "./times";
//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class Addhomework extends Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.edit = this.edit.bind(this);

        this.setWrapperRef = this.setWrapperRef;
        this.state = {
            edit: this.props.state.showhomework? true: false
        }

    };
    componentDidMount() {
        if(this.props.state.showhomework){
            this.props.dispatch({
                title: this.props.homework.title,
                description: this.props.homework.description,
                hwchecked: this.props.homework.hwchecked? true: false,
                hwtime: this.props.homework.hwtime? true: false,

            })
        }
        if(parseInt(window.innerWidth) <= 550){
            this.setState({ tooSmall: true });
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
    edit(){
        this.setState({ edit:!this.state.edit})
    }
    
    async handlehomework( myswitch){
        debugger
        let myhomework =   {
            id: myswitch=== "updatehomework"? this.props.homework.id :Date.now(),
            title: this.props.state.title,
            description: this.props.state.description,
            hwchecked: this.props.state.checkbox?{mon: false,tues: false,wed: false,thur: false,fri: false,sat: false,sun: false,}: undefined,
            date: myswitch=== "updatehomework"? this.props.homework.date : "",
            hwlink: myswitch=== "updatehomework"? this.props.homework.hwlink :this.props.state.hwlink,
            hwtime: this.props.state.time?{mon: "0",tues: "0",wed: "0",thur: "0",fri: "0",sat: "0",sun: "0",
            }: undefined,
        }
        if(myswitch==="updatehomework"){
            myhomework._id= this.props.homework._id
        }


        this.props.handlehomework(myhomework, myswitch)
    }
    render() {
        return (<div>
            
                                <div className="popup-box" style={{ zIndex: "1010" }}>
                <div ref={this.wrapperRef}  className="diapicboxa" style={{ zIndex: "1010", height:"50vh" }}>
                    
                <span className="close-icon-2" onClick={this.props.handleClose}>x</span>
                <div onClick={this.edit}>edit</div>
                {this.state.edit?( <div style={{display: "flex", flexDirection:"column"}}>
                
                    <Checkedd size={this.props.state.styles.checkbox.size1} state={this.props.state} homework={this.props.state.homework} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>
                    <button  className="btn  btn-block"  onClick={this.props.dispatch.bind(this, {addtime:true, })} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Time</button>
                    {this.props.state.addtime && (<Times state={this.props.state} homework={this.props.state.homework} handlehomework={this.handlehomework} handleClose={this.props.dispatch.bind(this, {addtime:false, timeadded:"0", dayfortimepopup:"", })} handleChange={this.props.handleChange} dispatch={this.props.dispatch}/>)}
                    <div>{this.props.homework.title}</div>
                    <div>{this.props.homework.description}</div>
                    <div >{this.props.homework.hwlink}</div>
                    
                    </div>):(
                    <div>
                        
                    <div >
                    <div className="form-group">
                        <label htmlFor="lastName"><b>Homework Name:</b></label>
                        <input type="text" className="form-control" id="homework" style={{width:"95%"}} onChange={this.props.handleChange} name="title" placeholder={this.props.state.showhomework? this.props.homework.title: ""}/>
                    </div>
                        <div className="form-group">
                            <label>Describe the practice assignment.</label>
                                <textarea type="text" className="form-control" rows="3" id="hwdescription" onChange={this.props.handleChange} name="description" placeholder={this.props.state.showhomework? this.props.homework.description: ""}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Do you want to use checkboxes to track this practice assignment's progress? </label>
                            
                                    <select htmlfor="yesnoCheckbox" onChange={this.props.handleChange} name="checkbox" id="yesnoCheckbox">
                                        {this.props.state.homework?.hwchecked? (<option value={true}>yes</option>):(<option value={false}>no</option>)}
                                        {this.props.state.homework?.hwchecked? (<option value={false}>no</option>):(<option value={true}>yes</option>)}
                                        </select>
                                         
                        </div>
                        <div className="form-group">
                            <label>Do you want to use time to track this practice assignment's progress? </label>
                                    <select htmlfor="yesnoCheckbox" onChange={this.props.handleChange} name="time" id="yesnoCheckbox">
                                    {this.props.state.homework?.hwtime? (<option value={true}>yes</option>):(<option value={false}>no</option>)}
                                        {this.props.state.homework?.hwtime? (<option value={false}>no</option>):(<option value={true}>yes</option>)}
                                    </select>
                        </div> 
                        <div className="form-group">
                        <label htmlFor="lastName"><b>Add a Link:</b></label>
                        <input type="text" className="form-control" id="homework" style={{width:"95%"}} onChange={this.props.handleChange} name="hwlink" placeholder={this.props.state.showhomework? this.props.homework.hwlink: ""}/>
                    </div>                   
                        <div style={{ marginTop: "20px", }}>
                        <button  className="btn  btn-block"  onClick={this.props.state.showhomework?this.handlehomework.bind(this, "updatehomework"): this.handlehomework.bind(this, "addhomework")} style={{ background: "#696eb5", height: "30px", color: "#F0F2EF", width: "200px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>+ Homework</button>
                    </div>
                    </div>
                </div>
                )}
                </div>
                
            </div>

            </div>)
    }
};
export default Addhomework;