import React, { Component } from 'react';
import Checkboxnum from "./practice.js";
import AuthService from "../services/auth.service";
import edit from "./edit.png";
import Checkboxnum2 from "./practice2.js";
import Hwmessage from "./messageStudenthw.js";
import Timess from "../components/timess.js"

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
        this.save = this.save.bind(this);
        this.back = this.back.bind(this);
        this.handletheclose = this.handletheclose.bind(this);
        this.handletimesOpen = this.handletimesOpen.bind(this);
        this.handletimesClose = this.handletimesClose.bind(this);
        this.changetimes = this.changetimes.bind(this);
        this.changeweek = this.changeweek.bind(this);
        this.clearChecks = this.clearChecks.bind(this);
        this.clearTime = this.clearTime.bind(this);

        
        
        
        
        

        
        this.state = {
            checked: this.props.homework.hwchecked,
            edit: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            yesnoTimes: true,
            edited: false,
            tempweek: this.props.homework.yesnoweek,
            tempHW: this.props.homework.title,
            tempHW1: this.props.homework.title,
            hwtimesync: this.props.homework.hwtimesync,
            tempDescription: this.props.homework.description,
            tempDescription1: this.props.homework.description,
            hwsynccheck: this.props.homework.hwsynccheck,
            tempday: this.props.homework.daily,
            tempcheckboxes: this.props.homework.hwcheckboxes,
            ttempHW: "",
            hwdmin: this.props.homework.hwdmin,
            weekly: this.props.homework.HWweeklytimebiao,
            ttempDescription: "",
            ttempday: this.props.homework.daily,
            ttempcheckboxes: "",
            ttempdate: this.props.homework.date,
            link: this.props.homework.hwlink,
            link1: this.props.homework.hwlink,
            yesnoCheckbox: false,
            tempresearch: this.props.homework.research,
            ttempresearch: this.props.homework.research,
            inside: false,
            outside: false,
            tempdaygoal: this.props.homework.yesnoday,
            close: false,
            dailygoal: this.props.homework.dailygoal,
            tempdate: this.props.homework.date,
            tempdate1: this.props.homework.date,

            hwtype: this.props.homework.hwtype,
            hwtype1: this.props.homework.hwtype,
            totalWeekTime: this.props.homework.totalWeekTime,
            realtimestudent: {
                checkboxes: false,
                syncedCheckbox: true,

            },
            hwtime: this.props.homework.hwtime,
            syncedCheckboxes: this.props.homework.syncedCheckboxes,
            syncCheckboxes: this.props.homework.hwsynccheck,
            changeweekly: this.props.homework.HWweeklytimebiao,
            changehwtype: "",
            changetempcheckboxes: this.props.homework.hwcheckboxes,
            changetempweek: this.props.homework.yesnoweek,
            changetempdaygoal: this.props.homework.yesnoday,
            changedailygoal: this.props.homework.hwdmin,
            struggle: this.props.homework.hwstruggles,
            messaging: this.props.homework.hwQuestions,
            tempstruggle: this.props.homework.hwstruggles,
            tempmessaging: this.props.homework.hwQuestions,
            changelink: "",
            yesnoday: this.props.homework.yesnoday,
            yesnoweek: this.props.homework.yesnoweek,
            c: false,
            t: false,
            timesedit: false,
            timeedit: "",
            minedit: "",
            weeklyTimeEdit: "",
            fix: false,
            marginTop: "0px",
            justifyContent: "",
            marginLeft: "60px",
            marginLeft1: "30px",
            hwtimew: false,
            width:"30px", height:"30px",
            


        }
       

    }
    
    componentDidMount() {
        if(parseInt(window.innerWidth) <= 500){
            this.setState({ 
                marginTop: "20px",
                justifyContent: "center",
                marginLeft: "15px", width:"20px", height:"20px",
                marginLeft1: "0px",
                
             });
            }

        document.addEventListener('mouseup', this.handleClickOutside);

        if (this.props.homework.hwsynccheck) {
            this.setState({
                c:true,
            })
        }
        if (this.props.homework.hwcheckboxes !== "0") {
            this.setState({
                c: true,
            })
        }
        if (this.props.homework.yesnoday) {
            this.setState({
                t:true,
            })
        }
        if (this.props.homework.yesnoweek) {
            this.setState({
                t: true,
            })
        }

    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', this.handleClickOutside);
    }
    
    async handleClickOutside(event) {
        event.preventDefault();
        event.stopPropagation();
       
       
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {


            this.handleClose();
        }
            
        
    }
    clearChecks() {
     
            let homework = false;
        if (this.state.hwsynccheck) {
                homework = true;
            AuthService.clearhwChecks(this.props.homework._id, homework);
          
            }
            else {
            AuthService.clearhwChecks(this.props.homework._id, homework);
           
        }
       
        window.location.reload();
        
    }

    clearTime() {

        AuthService.clearhwTime(this.props.homework._id);
        window.location.reload();

    }

    handletimesOpen() {
        this.setState({
            timesedit: true
        });
    };
    handletimesClose() {
        this.setState({
            timesedit: false
        });
    };
    changetimes() {
        AuthService.hwchangetimes(this.props.homework._id, this.state.timeedit, this.state.minedit, this.state.hwtime);

      






            if (this.state.timeedit === "mon") {
                this.setState({
                    hwtime: {
                        mon: this.state.minedit,
                        tues: this.state.hwtime.tues,
                        wed: this.state.hwtime.wed,
                        thur: this.state.hwtime.thur,
                        fri: this.state.hwtime.fri,
                        sat: this.state.hwtime.sat,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "tues") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.minedit,
                        wed: this.state.hwtime.wed,
                        thur: this.state.hwtime.thur,
                        fri: this.state.hwtime.fri,
                        sat: this.state.hwtime.sat,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "wed") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.hwtime.tues,
                        wed: this.state.minedit,
                        thur: this.state.hwtime.thur,
                        fri: this.state.hwtime.fri,
                        sat: this.state.hwtime.sat,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "thur") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.hwtime.tues,
                        wed: this.state.hwtime.wed,
                        thur: this.state.minedit,
                        fri: this.state.hwtime.fri,
                        sat: this.state.hwtime.sat,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "fri") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.hwtime.tues,
                        wed: this.state.hwtime.wed,
                        thur: this.state.hwtime.thur,
                        fri: this.state.minedit,
                        sat: this.state.hwtime.sat,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "sat") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.hwtime.tues,
                        wed: this.state.hwtime.wed,
                        thur: this.state.hwtime.thur,
                        fri: this.state.hwtime.fri,
                        sat: this.state.minedit,
                        sun: this.state.hwtime.sun,
                    }

                })
            }
            if (this.state.timeedit === "sun") {
                this.setState({
                    hwtime: {
                        mon: this.state.hwtime.mon,
                        tues: this.state.hwtime.tues,
                        wed: this.state.hwtime.wed,
                        thur: this.state.hwtime.thur,
                        fri: this.state.hwtime.fri,
                        sat: this.state.hwtime.sat,
                        sun: this.state.minedit,
                    }

                })
            }
        


        this.setState({
            timesedit: false,

            
        
        });
        //window.location.reload();
    }
    changeweek() {

        AuthService.hwchangeweek(this.props.homework._id, this.state.weeklyTimeEdit);


        this.setState({
            timesedit: false,
            totalWeekTime: {
                total: this.state.weeklyTimeEdit
            }
        });
        //window.location.reload();
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


    async save() {
       
        

        await this.setState({
            
            edited: true,
            weekly: this.state.changeweekly,
            hwsynccheck: this.state.syncCheckboxes,
            tempcheckboxes: this.state.changetempcheckboxes,
            tempweek: this.state.changetempweek,
            tempdaygoal: this.state.changetempdaygoal,
            tempday: this.state.ttempday,
            struggle: this.state.tempstruggle,
            messaging: this.state.tempmessaging,
            hwdmin: this.state.changedailygoal,
           

        })
        this.setState({
            edit: !this.state.edit,

        })
        if (this.state.hwsynccheck) {
            this.setState({
                c: true
            })
        }
        else if (this.state.tempcheckboxes !== "0") {
            this.setState({
                c: true
            })
        }
        if (this.props.homework.yesnoday) {
            this.setState({
                t: true,
            })
        }
        if (this.props.homework.yesnoweek) {
            this.setState({
                t: true,
            })
        }
        else {
            this.setState({
                c: false,
            })
        }
        this.handletheclose();
    }
    handletheclose() {

        let newHW = {

            title: this.state.tempHW,
            description: this.state.tempDescription,
            syncedCheckboxes: this.props.homework.syncedCheckboxes,
            hwtype: this.state.hwtype,
            _id: this.props.homework._id,
            firstMessage: this.props.homework.firstMessage,
            hwtimesync: this.props.homework.hwtimesync,
            messages: this.props.homework.messages,
            totalWeekTime: this.props.homework.totalWeekTime,


            hwsynccheck: this.state.hwsynccheck,
            hwcheckboxes: this.state.tempcheckboxes,
            hwlink: this.state.link,
            hwchecked: this.state.checked,
            hwtime: this.state.hwtime,
            daily: this.state.tempday,
            HWweeklytimebiao: this.state.weekly,
            yesnoweek: this.state.tempweek, 






            yesnoday: this.state.tempdaygoal, 
            hwstruggles: this.state.struggle,
            hwQuestions: this.state.messaging,
            hwdmin: this.state.hwdmin,



            date: this.state.tempdate,
            research: this.state.tempresearch,


        }

        console.log(newHW);
        let ar = [];
        for (let i = 0; i < this.props.homeworks.length; i++) {
            if (this.props.homeworks[i]._id === newHW._id) {

                ar.push(newHW);
            }
            else {
                ar.push(this.props.homeworks[i]);

            }

        }
        console.log(ar);


        AuthService.AddHomeworks
            (
                this.props.student,
                ar
            );
            //window.location.reload();

        


    }
    back() {


        this.setState({
            hwtype:this.state.hwtype1,
            edit: !this.state.edit,
            link: this.state.link1,
            tempDescription: this.state.tempDescription1,
            tempHW: this.state.tempHW1,
            tempdate: this.state.tempdate1,



        })
        
    }
    
   

    handleChange = (event) => {
        const { name, value } = event.target
       if(name==="changeweekly"){
           if(value !==""){
               this.setState({
                changetempweek: true,
               })
           }
           else{
            this.setState({
                changetempweek: false,
               })
           }
       }
       
       if(name==="changedailygoal"){
        if(value !==""){
            this.setState({
                changetempdaygoal: true,
            })
        }
        else{
            this.setState({
                changetempdaygoal: false,
               })
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
        else if (value ==="false") {
            this.setState({
                [name]: false,
            })
        }

      
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
        if(this.props.role !=="student"){
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(250)

        window.location.reload()
        }
        else{
            this.props.handleClose();
        }
        
       
        
           
                //
            
        

    }
    

    render() {

        return (

            <div className="popup-boxa1 to-front " >
                <div ref={this.wrapperRef} className="card-container6abc1sh " >
                    <div className="homeworkScroll1">
                    <div style={{width:"95%"}} >
                    <div style= {{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                    <span className="close-icon-2" onClick={this.handleClose.bind(this, false)}>x</span>
                    
                                    </div>
                    <div style={{ width: "100%" }}>
                        <div style={{marginBottom: "7px", marginLeft:"0px"}}>
                                {this.state.edit ? (<div style={{ marginBottom: "30px" }}>
                                    <div ><p className="rowss huv" style={{color:"#696eb5"}} onClick={this.back}>back</p></div>
                            <div className="checkboxstuff">
                           <h3>Edit Homework Assignment</h3>
                                
                            </div>

                        </div>


                        ) : (<div>
                            <div>
                                <div></div>

                            </div>
                           
                                </div>)}
                        </div>
                        <div style={{ marginBottom: "30px", marginTop: this.state.marginTop }}>

                        {this.state.edit ? (<div>
                                    <div style={{ marginBottom: "30px",  }}>
                                        <label htmlFor="tempHW"><h5>Homework Title:</h5></label>

                                        
                                <div className="form-group" >
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="tempHW"
                                        value={this.state.tempHW}
                                        onChange={this.handleChange}
                                                name="tempHW"
                                            style={{ width: "100%" }}
                                    />
                                </div>

                            </div>


                        </div>) : (<div style={{display:"flex", flexDirection:"row", justifyContent: this.state.justifyContent, marginTop:"20px"}}> <h1>{this.state.tempHW} </h1>{this.state.edit ? (
                                    <div  >
                                    </div>) : (<div>
                                        {this.props.role !=="student"?
                                        (<img src={edit} className="huv" 
                                        style={{width:this.state.width, height:this.state.height, marginLeft:this.state.marginLeft, marginTop:"10px"}} 
                                        onClick={this.editMe}/> )
                                    :
                                    (<div></div>)}
                                    </div>)}
                            
                                </div>)}

                                {this.state.edit? (<div ></div>
                                    


                        ) : (<div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}>
                                <div style={{marginLeft:this.state.marginLeft1, color:"gray", fontSize:"14px"}}> {this.state.hwtype} homework</div>

                            </div>
                           
                                </div>)}



                        </div>
                        {this.state.hwtype === "practice" ? (
                            <div className="centerized fill2">
                                    {this.props.role === "student" ? (<div className=" fill2 ">
                                        {this.state.timesedit && (<Timess handleClose={this.handletimesClose} handleChange={this.handleChange} change={this.changetimes} changeweek={this.changeweek} weekly={this.props.homework.yesnoday} />)}





                                        <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

                                            {this.state.tempdaygoal ? (
                                                <div>
                                                    {!this.state.c ? (
                                                        <div>
                                                            <div className="checkboxstuff1 centerized">
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Mon</div>
                                                                    <div className=" centerized">{this.state.hwtime.mon} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Tues</div>
                                                                    <div className=" centerized">{this.state.hwtime.tues} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Wed</div>
                                                                    <div className=" centerized">{this.state.hwtime.wed} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Thurs</div>
                                                                    <div className=" centerized">{this.state.hwtime.thur} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Fri</div>
                                                                    <div className=" centerized">{this.state.hwtime.fri} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Sat</div>
                                                                    <div className=" centerized">{this.state.hwtime.sat} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Sun</div>
                                                                    <div className=" centerized">{this.state.hwtime.sun} M</div>
                                                                </div>
                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                    <div className=" centerized">Total</div>
                                                                    <div className=" centerized"> {parseInt(this.state.hwtime.mon) + parseInt(this.state.hwtime.tues) + parseInt(this.state.hwtime.wed) + parseInt(this.state.hwtime.thur) + parseInt(this.state.hwtime.fri) + parseInt(this.state.hwtime.sat) + parseInt(this.state.hwtime.sun)} M</div>
                                                                </div>

                                                            </div>

                                                        </div>



                                                    ) : (<div>


                                                    </div>)}

                                                </div>

                                            ) : (
                                                    <div>
                                                        {this.state.tempweek ? (<div>
                                                            {!this.state.c ? (<div>{this.props.homework.HWweeklytimebiao?(<h3>Total Time Practiced this Week: <b> {this.state.totalWeekTime.total} / {this.props.homework.HWweeklytimebiao} Minutes </b> </h3>):(<div></div>)}</div>) : (
                                                                <div>
                                                                </div>

                                                            )
                                                            }
                                                        </div>



                                                        ) : (<div>


                                                        </div>)}




                                                    </div>)}

                                            <div className="checkboxstuff centerized" style={{ marginBottom: "7px" }}>
                                                {this.state.hwsynccheck ? (
                                                    <Checkboxnum2 checkboxes={7} prac={this.state.checked} practice={this.props.practice} synced={true} role={"student"} sync={this.state.syncedCheckboxes} times={this.state.hwtime} synctimes={this.state.tempdaygoal} />
                                                ) : (
                                                        <Checkboxnum checkboxes={this.state.tempcheckboxes} practice={this.props.practice} prac={this.state.checked} role={"student"} times={this.state.hwtime} synctimes={this.state.tempdaygoal} />
                                                    )}





                                            </div>

                                        </div>
                                        {this.state.t ? (
                                            <div className="fill2 centerized">
                                                <div style={{ width: "125px", height: "40px", marginTop: "5px", marginBottom: "7px" }} ><button style={{ height: "30px", background: "#696eb5", color: "#F0F2EF" }} className="btn btn-block centerized" onClick={this.handletimesOpen}>Log Time</button></div>
                                            </div>
                                        ) : (<div></div>)}


                                </div>
                                    ) : (<div>


                                            {this.state.edit ? (<div>
                                                <div className="form-group">
                                                    <label>Do you want to use checkboxes to track this pracice assignment's progress?</label>
                                                    <select htmlfor="yesnoCheckbox" onChange={this.handleChange} name="yesnoCheckbox" id="yesnoCheckbox">
                                                        <option value="">No Change</option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                       
                                                    </select>
                                                </div>
                                                {this.state.yesnoCheckbox?(<div>
                                                    <div>
                                                    <label>Display practice checkboxes with days of the week?</label>
                                                    <select htmlfor="syncCheckboxes" onChange={this.handleChange} name="syncCheckboxes" id="syncCheckboxes">
                                                        <option value={this.state.hwsynccheck}>No Change</option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>

                                                        
                                                    </select>
                                                </div>
                                                <div >
                                                    <label>How many days should the student practice this assignment?</label>
                                                    <select htmlfor="changetempcheckboxes" onChange={this.handleChange} name="changetempcheckboxes" id="changetempcheckboxes">
                                                        <option value={this.state.tempcheckboxes}>No Change</option>
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
                                                </div>):(<div></div>)}
                                                <div className="form-group">
                                                    <label>Would you like this student to record practice time for this assignment?</label>
                                                        <select htmlfor="hwtimew" onChange={this.handleChange} name="hwtimew" id="hwtimew">
                                                        <option value="">No Change</option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>

                                                    </select>
                                                </div>
                                                
                                                

                                                

                                                {/*<div >
                                                    <p>Add a weekly time goal for this practice assignment?</p>
                                                    <select htmlfor="changetempweek" onChange={this.handleChange} name="changetempweek" id="changetempweek">
                                                        <option value={this.state.tempweek}>No Change</option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>


                                                    </select>
                                                </div> */}
                                                {this.state.yesnoTimes ? (<div>
                                                    {this.state.hwtimew?(<div>

                                                        <div className="form-group">
                                                        <label>How much time should this student practice per week?</label>
                                                        <input

type="text"
value={this.state.changeweekly}
className="form-control"

id="changeweekly"
required
onChange={this.handleChange}
name="changeweekly"
                                                        /><p>Minutes</p>
                                                       

                                                    </div>
                                                    </div>):(<div></div>)}
                                                    
                                                </div>) : (<div>
                                                        {this.props.totalWeekTime.total} / {this.state.weekly}
                                                        
                                                    </div>)}

                                                {/*<div >
                                                    <p>Add a Dailey time goal for this student. </p>
                                                    <select htmlfor="changetempdaygoal" onChange={this.handleChange} name="changetempdaygoal" id="changetempdaygoal">
                                                        <option value={this.state.tempdaygoal}>No Change</option>
                                                        <option value={true}>yes</option>
                                                        <option value={false}>no</option>
                                                        <option value={false}>Not Applicaple</option>
                                                    </select>
                                                </div>*/}
                                                
                                                {this.state.yesnoTimes ? (<div>
                                                    {this.state.hwtimew?(<div>
                                                        <div className="form-group">
                                                        <label>How much time should this student practice per day?</label>
                                                        <input

value={this.state.changedailygoal}
type="text"
className="form-control"
id="changedailygoal"
required
onChange={this.handleChange}
name="changedailygoal"
                                                            /><p>Minutes</p>
                                                       

                                                    </div>
                                                    </div>):(<div></div>)}
                                                    
                                                </div>) : (<div></div>)}

                                                
                                                </div>
                                            ) : (
                                                    
                                                    <div>
                                                        <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

                                                            {this.state.tempdaygoal ? (
                                                                <div>
                                                                    {!this.state.c ? (
                                                                        <div>
                                                                            <div className="checkboxstuff1 centerized">
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Mon</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.mon} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Tues</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.tues} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Wed</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.wed} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Thurs</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.thur} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Fri</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.fri} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Sat</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.sat} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Sun</div>
                                                                                    <div className=" centerized">{this.props.homework.hwtime.sun} M</div>
                                                                                </div>
                                                                                <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                    <div className=" centerized">Total</div>
                                                                                    <div className=" centerized"> {parseInt(this.props.homework.hwtime.mon) + parseInt(this.props.homework.hwtime.tues) + parseInt(this.props.homework.hwtime.wed) + parseInt(this.props.homework.hwtime.thur) + parseInt(this.props.homework.hwtime.fri) + parseInt(this.props.homework.hwtime.sat) + parseInt(this.props.homework.hwtime.sun)} M</div>
                                                                                </div>

                                                                            </div>

                                                                        </div>



                                                                    ) : (<div>


                                                                    </div>)}

                                                                </div>

                                                            ) : (
                                                                    <div>
                                                                        {this.state.tempweek ? (<div>
                                                                            {!this.state.c ? (<div>
                                                                                {this.state.homework?(<h3>Total Time Practiced this Week: <b> {this.state.homework?(<div>{this.state.totalWeekTime.total} / {this.state.homework.weekly}</div>):(<div></div>)} Minutes </b> </h3>):(<div></div>)}
                                                                            
                                                                            </div>) : (
                                                                                <div>
                                                                                </div>

                                                                            )
                                                                            }
                                                                        </div>



                                                                        ) : (<div>


                                                                        </div>)}




                                                                    </div>)}

                                                            <div className="checkboxstuff" style={{ marginBottom: "7px" }}>
                                                                {this.state.hwsynccheck ? (
                                                                    <Checkboxnum2 checkboxes={7} prac={this.state.checked} synced={true} role={"teacher"} sync={this.state.syncedCheckboxes} times={this.state.hwtime} synctimes={this.state.tempdaygoal} />
                                                                ) : (
                                                                        <Checkboxnum checkboxes={this.state.tempcheckboxes} prac={this.state.checked} role={"teacher"} times={this.state.hwtime} synctimes={this.state.tempdaygoal} />
                                                                    )}





                                                            </div>

                                                        </div>




                                                        <div  >
                                                            {this.state.c ? (<div >

                                                                {this.state.t ? (<div className=" checkboxstuff1a  " style={{ width: "265px", marginLeft: "7px" }}>
                                                                    <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>
                                                                    <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearTime}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time</p></span></button>

                                                                </div>

                                                                ) : (<div className=" centerized ">
                                                                    <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>

                                                                </div>)}

                                                            </div>
                                                            ) : (<div className=" centerized " style={{ width: "265px" }}>
                                                                {this.state.t ? (<button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearTime}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time</p></span></button>) : (<div></div>)}

                                                            </div>)}


                                                        </div>
                                                       
                                                    </div>
                                                    
                                                    )}
                                        
                                </div>
                                    )
                                }



                            </div>

                        ): (<div></div>)}
                        



                        <div style={{ marginBottom: "10px",  }}>
                                {this.state.edit ? (<div >
                                   
                                    <div >
                                        <label htmlFor="tempDescription"><b>Describe the homework:</b></label>
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


                        ) : (<div style={{ marginTop: "10px", display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent }}>
                            <b style={{marginRight:"7px"}}>Description:</b> {this.state.tempDescription} 
                                    </div>)}

                                </div>
                        <div style={{ marginBottom: "10px" }}>
                        {this.state.hwtype === "practice" ? (<div>
                            {this.state.edit ? (<div>
                                        <div >
                                            <label htmlFor="ttempday">How many times should this student practice per day?</label>
                                    <div className="form-group" >
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="ttempday"
                                            value={this.state.ttempday}
                                            onChange={this.handleChange}
                                            name="ttempday"
                                        />
                                    </div>
                                    
                                </div>

                            </div>


                            ) : (<div>
                                <div style={{ marginBottom: "10px", display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent }}>
                                    <b style={{marginRight:"7px"}}>Per day:</b> {this.state.tempday}
                                </div>
                                        </div>)}
                                    {this.state.edit ? (<div>
                                        {/* 
                                        <div >
                                            <label htmlFor="tempcheckboxes">How many times should this student practice every week?</label>
                                            <div className="form-group" >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="tempcheckboxes"
                                                    value={this.state.tempcheckboxes}
                                                    onChange={this.handleChange}
                                                    name="tempcheckboxes"
                                                />
                                            </div>

                                        </div>*/}

                                    </div>


                                    ) : (<div>
                                            <div style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}>
                                                <b style={{marginRight:"7px"}}>Practice goal:</b> {this.props.homework.hwchecked} / { this.state.tempcheckboxes }
                                        </div>
                                    </div>)}
                        </div>) : (<div>
                                <div>
                                    {this.state.edit ? (<div>
                                                <div className="checkboxstuff">
                                                    <label htmlFor="tempdate"><p><b>Due on:</b></p></label>

                                            <div className="form-group" >
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    rows="1"
                                                    id="tempdate"
                                                    value={this.state.tempdate}
                                                    onChange={this.handleChange}
                                                    name="tempdate"
                                                />
                                            </div>
                                           
                                        </div>

                                    </div>


                                    ) : (<div style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}>
                                        <b style={{marginRight:"7px"}}> Due on:</b> {this.state.tempdate} 
                                        
                                        </div>)}
                                    


                                </div>
                                        </div>)}
                            </div>
                            
                            <div style={{  }}>
                                {this.state.edit ? (<div >

                                   
                                     {/*<div >
                                        <label htmlFor="tempmessaging"><p>include abiltity for students ask questions through messaging?</p></label>
                                    <div className="form-group" >

                                            <select htmlfor="tempmessaging" onChange={this.handleChange} name="tempmessaging" id="tempmessaging">
                                            <option value=""></option>
                                            <option value={true}>yes</option>
                                            <option value={false}>no</option>
                                            <option value={false}>Not Applicaple</option>
                                        </select>
                                    </div>

                                     </div> */}
                                    <div className="form-group" >
                                        <label htmlFor="messaging"><b style={{marginRight:"7px"}}>Link:</b></label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            rows="1"
                                            id="link"
                                            value={this.state.link}
                                            onChange={this.handleChange}
                                            name="link"
                                        />
                                    </div>

                                </div>


                                ) : (<div>
                                        <div style={{display:"flex", flexDirection:"row", justifyContent:this.state.justifyContent}}> <b style={{marginRight:"7px"}}>Link: </b>{this.state.link} </div>
                                </div>)}
                            </div>


                        <div>
                            {this.props.role === "student" ? (<div></div>): (

                                <div>
                                {this.state.edit ? (
                                    <div style={{ width: "125px" }} >
                                <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF" }} onClick={this.save}><span className="fill1"><p style={{ marginBottom: "10px" }}>Save</p></span></button>
                                        </div>) : (<div></div>)}

                               </div>

                                
                                    
                                    )}


                  



                                </div>





                  
                    </div>
                    </div>

                   
                    {!this.state.edit ? (<div>
                        {this.state.messaging ? (<Hwmessage id={this.props.homework._id} firstMessage={this.props.homework.firstMessage} messages={this.props.homework.messages} role={this.props.role} />):(<div></div>)}
                        
                   </div> ) : (<div>


                        </div>)}
                        </div>
                    
                </div>
            </div>
            

        )

    }
}
//Homeworking.propTypes = {
 //   children: PropTypes.element.isRequired,
//<div>
//  <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.handletheclose}>Save</button>

//</div>
//};

/*
  <div >
                                        <label htmlFor="struggles"><p>include abiltity for students to detail strugggles?</p></label>
                                        <div className="form-group" >

                                            <select htmlfor="struggles" onChange={this.handleChange} name="struggles" id="struggles">
                                                <option value=""></option>
                                                <option value={true}>yes</option>
                                                <option value={false}>no</option>
                                                <option value={false}>Not Applicaple</option>
                                            </select>
                                        </div>

                                    </div>
 */