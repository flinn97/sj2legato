//todo -> beautify edit stuff.
//probably going to have to have the backend update the email on the account for the student for login.
import React, { Component } from "react"
import AuthService from "../services/auth.service";
import background from "./music.png";
import edit from "./edit.png";
import Editing from "../components/studentEdit.js";
import axios from "axios";
import Checkboxnum from "../components/practice.js";
import Homework from "../components/homeworks";
import ShowHomework from "../components/showHomework";
import Goals from "./goals.js";
import save from "../components/save.png";
import trash from "./Trash1.png";
import Archive from "../components/archive.js"
import Notes from "../components/notes.js"
import EditAlltheHomework from "../components/editAlltheHomework.js"
import Splashscreen  from "../components/splashscreen.js";


import authService from "../services/auth.service";
import Checkboxnum2 from "../components/practice2.js";
import Short from "../components/short.js";
//import AddedStudent from "./addedStudent.js";
import AddedStudent from "./add1student.js";
import AddStudent from "../components/deletestudent";
import leaf from "./leaf.png";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
//import AllHomeworks from "../components/homeworkList.js"
//this is the student page that shows for the teacher. It shows the teacher various information about the student as well as a function to add homework.
export default class Student extends Component {
    //create state
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.AddHomework = this.AddHomework.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.handleHomework = this.handleHomework.bind(this);
        this.handleHomeworkClose = this.handleHomeworkClose.bind(this);
        this.showHomework = this.showHomework.bind(this);
        this.deleteHomework = this.deleteHomework.bind(this);
        this.clearChecks = this.clearChecks.bind(this);
        this.clearTime = this.clearTime.bind(this);
        this.editAlltheHomework = this.editAlltheHomework.bind(this);
        this.editAlltheHomeworkdiaOpen = this.editAlltheHomeworkdiaOpen.bind(this);
        this.editAlltheHomeworkdiaClose = this.editAlltheHomeworkdiaClose.bind(this);
        this.changestyle = this.changestyle.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.changestyle1 = this.changestyle1.bind(this);
       
        
        this.notes = this.notes.bind(this);
        this.keep = this.keep.bind(this);
        this.handletheclose = this.handletheclose.bind(this);

        this.changestate = this.changestate.bind(this);

        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);

        this.handlehwChange = this.handlehwChange.bind(this);

        this.editMe = this.editMe.bind(this);
        this.handletime = this.handletime.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);

        
        this.state = {
            currentUsr: authService.getCurrentUser(),
            homework: "",
            homeworks: [],
            homeworked: false,
            edit: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            newPic: "",
            currentUser: undefined,
            background: background,
            first: "",
            last: "",
            email: "",
            phone: "",
            about: "",
            time: "",
            checkbox: "",
            day: "",
            realtimestudent: null,
            password: "",
            hwtype: "",
            hwchecked: "",
            hwdescription: "",
            hwcheckboxes: "0",
            hwdate: "",
            hwreasearch: "",
            assignment: false,
            research: false,
            practice: false,
            currentHomework: undefined,
            showHomework: false,
            daily: "0",
            totalDays: "",
            studentaccount: "",
            changetime: "",
            studentid: "",
            newlyadded: false,
            notes: false,
            hwsynccheck: false,
            hwdmin: "",
            HWweeklytimebiao: "",
            hwtimesync: false,
            hwlink: "",
            struggles: false,
            hwQuestions: true,
            editAlltheHomework: false,
            yesnoCheckboxsync: false,
            yesnoStreak: false,
            yesnocheckboxes: false,
            yesnoWeek: false,
            yesnoWeektext: "",
            yesnoDay: false,
            yesnoDaytext: "",
            c: false,
            t: false,
            hwdailytimebiao: false,
            hwtimew: false,
            alignself: "flex-start",
            width: "64%",
            width2: "50%",
            tooSmall: false,
            width1: "22%",
            height: "1000px",
            height1:"1500px",
            thousand: false,
            alignself1: "flex-start",
            showProfile: false,
            justifyContent1: "",
            marginLeftedit:"400px",
            splashscreen:false,

        };
    }
    async Splashscreen(){
        this.setState({
            splashscreen:!this.state.splashscreen
        })
        
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(650)
            window.location.reload();

        

    }
    updateWindowDimensions() {
       
        if(parseInt(window.innerWidth) <= 550){
        this.setState({ tooSmall: true, 
            width1: "0px",
            height: "2500px",
            height1:"2000px",
            marginLeftedit:"80vw"
            
        });
    }
        if(parseInt(window.innerWidth) <= 1200){
        this.setState({ tooSmall: true, 
            width1: "0px",
            height: "2500px",
            height1:"2000px"
          
            
        });
        if(parseInt(window.innerWidth) >= 550){
            this.setState({ marginLeftedit:"350px"
              
                
            });
        }
    
        if(parseInt(window.innerWidth) >= 1000){
            this.setState({ tooSmall: true, 
                thousand: true,
                width1: "0px",
                height: "2500px",
                height1:"2000px",
                marginLeftedit:"400px"
              
                
            });
        }
    }
        
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }
    
    
    async handletime() {

    }
    changestyle() {
        if (this.state.alignself === "flex-start") {
            this.setState({
                alignself: "flex-end",
                width: "41%",
                notes: true
            })
        }

        else {
            this.setState({
                alignself: "flex-start",
                width: "64%",
                notes:false
            })
        }
    }
    changestyle1() {
        if (this.state.alignself1 === "flex-start") {
            this.setState({
                alignself1: "flex-end",
                width2: "50%",
                width1: "100%",
                showProfile: true,
                height: "1000px",
                justifyContent1: "center"
            })
        }

        else {
            this.setState({
                alignself1: "flex-start",
                width2: "50%",
                showProfile:false,
                width1: "0px",
                height: "2500px",
                justifyContent1: ""
            })
        }
    }
    selectDay(day) {
        this.setState({
            day: day
        })
    }
    changeTime(time) {
        this.setState({
            changetime: time
        })
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions());


        if (this.state.currentUsr) {


            if (this.state.currentUsr.role !== "teacher") {
                this.props.history.push("/");
                window.location.reload();
            }
            else {
                if (this.props.location.state) {
                    
                    //this.setState({
                    //  currentUser: this.props.location.state.detail,
                    //password: this.props.location.state.detail.password,
                    //studentid: "",

                    //                    })
                                        const API_URL = "https://legato.flinnapps.com/api/auth/";

                    //const API_URL = "http://localhost:8080/api/auth/";
                    const id = this.props.location.state.detail._id;
                    axios.post(API_URL + "getstudent", {

                        id,
                    }).then(response => {
                        this.setState({ realtimestudent: response.data.student });
                        console.log(response.data);
                        console.log(this.state.realtimestudent);

                        if (this.state.realtimestudent.profilepic) {
                            const porfilePic = this.state.realtimestudent.profilepic;
                            this.setState({ picture: porfilePic });
                        }
                        if (this.state.realtimestudent.backgroundpic) {
                            const background =  this.state.realtimestudent.backgroundpic;
                            this.setState({ background: background });
                        }
                        var ar = "";
                        let ampm = false;
                        for (let i = 0, j = i + 1; i < this.state.realtimestudent.scheduling.length; i++, j++) {

                            if (i === 0) {


                                if (this.state.realtimestudent.scheduling.length === 4) {

                                    if (this.state.realtimestudent.scheduling[0] === "1") {
                                        console.log(this.state.realtimestudent.scheduling[0]);
                                        console.log(this.state.realtimestudent.scheduling[1]);
                                        if (this.state.realtimestudent.scheduling[1] === "0") {
                                            ar = ar + "10";
                                            ampm = true;

                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "1") {
                                            ar = ar + "11";
                                            ampm = true;
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "2") {
                                            ar = ar + "12";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "3") {
                                            ar = ar + "1";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "4") {
                                            ar = ar + "2";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "5") {
                                            ar = ar + "3";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "6") {
                                            ar = ar + "4";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "7") {
                                            ar = ar + "5";

                                            console.log(ar);

                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "8") {
                                            ar = ar + "6";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "9") {
                                            ar = ar + "7";
                                        }

                                    } else if (this.state.realtimestudent.scheduling[0] === "2") {
                                        if (this.state.realtimestudent.scheduling[1] === "0") {
                                            ar = ar + "8";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "1") {
                                            ar = ar + "9";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "2") {
                                            ar = ar + "10";
                                        }
                                        if (this.state.realtimestudent.scheduling[1] === "3") {
                                            ar = ar + "11";
                                        }
                                    }
                                    else if (this.state.realtimestudent.scheduling[0] === "0") {
                                        if (this.state.realtimestudent.scheduling[1] === "0") {
                                            ar = ar + "12";
                                            ampm = true;
                                        }
                                    }
                                }
                                else {
                                    ar = ar + this.state.realtimestudent.scheduling[i];

                                }
                            }



                            else {
                                if (this.state.realtimestudent.scheduling.length === 3) {
                                    if (i === 1) {
                                        ar = ar + ":";

                                    }
                                    ar = ar + this.state.realtimestudent.scheduling[i];

                                    if (i === 2) {
                                        ar = ar + " AM";
                                    }


                                }
                                else {
                                    if (this.state.realtimestudent.scheduling[j]) {
                                        if (i === 1) {
                                            ar = ar + ":";
                                        }
                                        ar = ar + this.state.realtimestudent.scheduling[j];
                                        if (i === 2) {
                                            if (ampm) {
                                                ar = ar + " AM";
                                            }
                                            else { ar = ar + " PM"; }

                                        }

                                    }
                                }


                            }


                        }

                        let totaldays = this.state.realtimestudent.totalDays;
                        if (this.state.realtimestudent.totalDays === undefined) {
                            totaldays = 0;
                        }
                        if (this.state.realtimestudent.syncedCheckbox) {
                            this.setState({
                                c: true,
                            })
                        }
                        if (this.state.realtimestudent.checkboxes !=="0") {
                            this.setState({
                                c: true,
                            })

                        }
                        if (this.state.realtimestudent.edityesnoWeek) {
                            this.setState({
                                t: true,
                            })
                        }
                        if (this.state.realtimestudent.timeday) {
                            this.setState({
                                t: true,
                            })
                        }
                        this.setState({
                            first: this.state.realtimestudent.firstName,
                            studentid: this.state.realtimestudent._id,
                            last: this.state.realtimestudent.lastName,
                            email: this.state.realtimestudent.email,
                            phone: this.state.realtimestudent.phone,
                            time: ar,
                            checkbox: this.state.realtimestudent.checkbox,
                            day: this.state.realtimestudent.day,
                            about: this.state.realtimestudent.about,
                            homework: this.state.realtimestudent.homework,
                            homeworks: this.state.realtimestudent.homeworks,
                            totalDays: totaldays,
                            newlyadded: this.state.realtimestudent.newlyadded,
                            yesnoCheckboxsync: this.state.realtimestudent.syncedCheckbox,
                            yesnoStreak: this.state.realtimestudent.dayStreak,
                            yesnocheckboxes: this.state.realtimestudent.checkboxes,
                            yesnoWeek: this.state.realtimestudent.time,
                            yesnoWeektext: this.state.realtimestudent.min,
                            yesnoDay: this.state.realtimestudent.timeday,
                            yesnoDaytext: this.state.realtimestudent.dmin,
                        });
                        if (this.props.location.state.detail.password.length > 40) {
                            this.setState({
                                password: "******",
                            })
                        }
                        else {
                            this.setState({
                                password: this.state.realtimestudent.password,
                            })
                        }
                        
                    });
                }
                else {
                    this.props.history.push("/profile");
                    window.location.reload();
                }
            }
        }
        else {
            this.props.history.push("/login");
            window.location.reload();
        }

    }
    deleteHomework(homework) {
        AuthService.deleteHomework(this.state.realtimestudent._id, homework);
        this.Splashscreen();
        //window.location.reload();
    }
    clearTime() {

        AuthService.clearTime(this.state.realtimestudent._id);
        this.Splashscreen();
        //window.location.reload();
    }
    clearChecks() {
        let homework = false;
        if (this.state.realtimestudent.syncedCheckbox) {
            homework = true;
            AuthService.clearChecks(this.state.realtimestudent._id, homework);

        }
        else {
            AuthService.clearChecks(this.state.realtimestudent._id, homework);

        }
        this.Splashscreen();
       // window.location.reload();

    }

    handleSub(e) {
        e.preventDefault();
        let id = false;
        let about = false;
        let time = "";
        if (this.state.changetime) {
            time = this.state.changetime;
        }
        else {
            time = this.state.realtimestudent.scheduling;
        }



        AuthService.changeStudentinfo(
            this.props.location.state.detail._id,
            id,
            this.state.first,
            this.state.last,
            this.state.realtimestudent.about,
            this.state.email,
            this.state.phone,
            time,
            this.state.checkbox,
            this.state.day

        )



        //window.location.reload();
        this.setState({edit:false})
        this.Splashscreen();


    }
    //change whatever is needed in the state
    handleChange = (event) => {
        const { name, value } = event.target
        if(name==="yesnoDaytext"){
            if(value!==""){
                if(value ==="0"){
                    this.setState({
                        yesnoDay: false
                    })
                }
                else{
                    this.setState({
                        yesnoDay: true
                    })
                }
                
            }
            else{
                this.setState({
                    yesnoDay: false
                })
            }

        }
        if(name==="yesnoWeektext"){
            if(value!==""){
                if(value ==="0"){
                    this.setState({
                        yesnoWeek: false
                    })
                }
                else{
                    this.setState({
                        yesnoWeek: true
                    })
                }
            }
            else{
                this.setState({
                    yesnoWeek: false
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
        else if (value === "false") {
            this.setState({
                [name]: false,
            })
        }


    }




    handlehwChange = (event) => {
        
        const { name, value } = event.target
        if(name==="hwdmin"){
            if(value !== ""){
                this.setState({
                    hwdailytimebiao: true,
                    hwtimesync: true,
                })
            }

        }
        if(name==="HWweeklytimebiao"){
            if(value !== ""){
                this.setState({
                    hwtimew: true,
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
        else if (value==="false") {
            this.setState({
                [name]: false,
            })
        }
        if (value === "assignment") {
            this.setState({
                assignment: true,
                research: false,
                practice: false,
            })
        }
        if (value === "research") {
            this.setState({
                assignment: false,
                research: true,
                practice: false,
            })
        }
        if (value === "practice") {
            this.setState({
                assignment: false,
                research: false,
                practice: true,
            })
        }

    }
    editMe() {
        this.setState({
            edit: true
        })
    }

    handleEditClose() {
        this.setState({
            edit: false
        });
    };
    keep() {
        this.setState({
            notes: true,
        })
    }
    notes(note) {
        if (note) {
            this.setState({
                notes: true,
            });
        }
        else {
            this.setState({
                notes: false,
            });
        }

    };

    hideHomeworkClose() {
        this.setState({
            showHomework: false
        });
        
        window.location.reload();
    };
    handleHomeworkClose() {
        this.setState({
            homeworked: false,
            practice: false,
            assignment: false,
            research: false,
            
        });
    };
    //Uses controller to change the homework of the student.
    AddHomework(e) {
        this.setState({
            homeworked: true
        });

    }
    async handleHomework(e) {
        e.preventDefault();
        this.setState({
            homeworked: false
        });


        if (this.state.hwtype === "") {

            await this.setState({
                hwtype: "assignment"
            })
        }

        AuthService.AddHomework(this.props.location.state.detail._id,
            this.state.homework,
            this.state.hwtype,
            this.state.hwchecked,
            this.state.hwdescription,
            this.state.hwcheckboxes,
            this.state.hwdate,
            this.state.hwreasearch,
            this.state.daily,
            this.state.hwsynccheck,
            this.state.hwdmin,
            this.state.HWweeklytimebiao,
            this.state.hwtimesync,
            this.state.hwlink,
            this.state.struggles,
            this.state.hwQuestions,
            this.state.hwdailytimebiao,
            this.state.hwtimew,
           
            true,


        );



        //window.location.reload();
        this.Splashscreen()
    }
    showHomework(homework) {
        this.setState({
            showHomework: true,
            currentHomework: homework,
        })



    }

    handletheclose(id, title, description, type, day, checkboxes, date, research, HWweeklytimebiao, hwsynccheck, week, daygoal, hwstruggles, hwQuestions, hwdmin, hwlink, syncedCheckboxes, checked, hwtime) {

        let newHW = {

            title: title,
            hwcheckboxes: checkboxes,
            hwtype: type,
            description: description,
            date: date,
            daily: day,
            _id: this.state.currentHomework._id,
            research: research,
            HWweeklytimebiao: HWweeklytimebiao,
            hwsynccheck: hwsynccheck,
            week: week,
            daygoal: daygoal,
            hwstruggles: hwstruggles,
            hwQuestions: hwQuestions,
            hwdmin: hwdmin,
            hwlink: hwlink,
            syncedCheckboxes: syncedCheckboxes,
            checked: checked,
            hwtime: hwtime,
        }
        console.log(newHW);
        let ar = [];
        for (let i = 0; i < this.state.homeworks.length; i++) {
            if (this.state.homeworks[i]._id === newHW._id) {

                ar.push(newHW);
            }
            else {
                ar.push(this.state.homeworks[i]);

            }

        }


        AuthService.AddHomeworks
            (
                this.props.location.state.detail._id,
                ar
            );

        //window.location.reload();
        this.Splashscreen();
        

    }

    changestate() {

    }
    editAlltheHomework() {
        console.log(this.state.yesnocheckboxes);

        AuthService.editAlltheHomeworkdiaClose(this.props.location.state.detail._id, this.state.yesnoCheckboxsync, this.state.yesnoStreak, this.state.yesnocheckboxes, this.state.yesnoWeek, this.state.yesnoWeektext, this.state.yesnoDay, this.state.yesnoDaytext).then(response =>
        {
            console.log(response)
            this.setState({
                editAlltheHomework: false,
            })
           //window.location.reload();
           
        })
        this.Splashscreen();

       
    }
    editAlltheHomeworkdiaOpen() {
        this.setState({
            editAlltheHomework: true,
        })
    }
    editAlltheHomeworkdiaClose() {
        this.setState({
            editAlltheHomework: false,
        })
    }
    //style={{ height: "1000px" }}
    render() {
        return (
            <div className="z2 fill1 example" >
                {this.state.realtimestudent ? (
                    <div className="fill1 ">
                        {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
                        {this.state.edit && (<Editing handleSub={this.handleSub} handleEditClose={this.handleEditClose} handleChange={this.handleChange} student={this.props.location.state.detail.firstName}  selectDay={this.selectDay} changeTime={ this.changeTime } state={this.state} />)}
                        {this.state.homeworked && (<Homework handleHomework={this.handleHomework} handleChange={this.handlehwChange} handleClose={this.handleHomeworkClose} practice={this.state.practice} research={this.state.research} assignment={this.state.assignment} />)}
                        {this.state.editAlltheHomework && (<EditAlltheHomework editAlltheHomework={this.editAlltheHomework} handleChange={this.handleChange} handleClose={this.editAlltheHomeworkdiaClose} yesnoCheckboxsync={this.state.realtimestudent.syncedCheckbox}
                            yesnoStreak={ this.state.realtimestudent.dayStreak}
                            yesnocheckboxes={this.state.realtimestudent.checkboxes}
                            yesnoWeek={this.state.realtimestudent.time}
                            yesnoWeektext={this.state.realtimestudent.min}
                            yesnoDay={this.state.realtimestudent.timeday}
                            yesnoDaytext={this.state.realtimestudent.dmin} />)}

                        {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} role="teacher" handletheclose={this.handletheclose} id={this.state.currentHomework._id} homeworks={this.state.homeworks} student={this.props.location.state.detail._id }/>)}
                        {
                            this.state.realtimestudent.newlyadded ? (<div className="fill1"> <AddedStudent state={this.state} changestate={this.changestate} history={this.props.history}/></div>) :
                                (
                                    <div className="fill1 checkboxstuff1 ">
                                        <div style={{ height: this.state.height, width: this.state.width1,   }} >
                                            
                                            {this.state.tooSmall?(<div style={{width:"100vw",}}><div style={{width:"100%", }}>
                    <div style={{ width: "250px", height: "35px", border: "2px solid gray", display: "flex", flexDirection: "row", justifyContent: this.state.alignself1, margin:"0 auto" }} class="progress-bar2 huv" onClick={this.changestyle1}>
                        <div style={{ width: "250px", height: "35px", zIndex: "50", position: "absolute", background: "none", display: "flex", color: "#F0F2EF", flexDirection:"row", justifyContent:"space-around", marginTop:"3px"}}><p>{this.state.alignself1==="flex-start"?(<span>Stats &#62;&#62;&#62;</span>):(<span>Stats</span>)}</p><p>{this.state.alignself1==="flex-start"?(<span>Profile </span>):(<span>&#60;&#60;&#60;Profile</span>)}</p></div>
       
                        <div style={{ width: this.state.width2, height: "37px", border: "3px solid gray", alignSelf: "center", zIndex: "2" }} ></div>
                    </div>
                </div></div>):(

<div className="card-container4" style={{ height: "1250px", width: "22%", position: "fixed", }}>

                                                

<div>
    <div className="front">
    <div className="makeitwork2">
        <img
            src={edit}
            alt="edit"
            className="edit2 huv"
            onClick={this.editMe}

        />
    </div>



       


        <div className="overlaps1a" >

            <img
                src={this.state.picture}
                alt="profile-img"
                className="profile-img-cardabc cropped1"
                style={{marginLeft:"5vw"}}

            />



        </div>
    </div>
</div>
<div className="makeitwork1a">
    
    <div style={{ marginBottom: "15px", alignSelf:"flex-start", margin:"0 auto" }}>

        <div className="">
            <h2>{this.state.first} {this.state.last}</h2>

        </div>

    </div>
    <div className="makeitwork3" style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <div >
            <div style={{ alignSelf:"center", color: "gray",  margin:"0 auto", marginBottom: "5px" }}>Student Info:</div>
        </div>
        <div>
            <u style={{ margin:"0 auto", color: "blue", alignSelf:"center" }}>{this.state.email}</u>
        </div>
        <div>
            {this.state.phone}
        </div>
        <div>
            <div style={{ margin:"0 auto", color: "gray", alignSelf:"center" }}></div>
        </div>
        <div>

            {this.state.about}
        </div>
        <div>
        Scheduled Time: {this.state.time} {this.state.realtimestudent.day}
        </div>

        
        {this.state.password==="******"?(
            <div>
        </div>
        ):(
            <div>
            Student Password: {this.state.password}
        </div>
        )}

    </div>
    <div className="makeitwork4" style={{ marginTop: "40px" }}>
        {this.state.realtimestudent ? (

            <div >
                <div>
                    <div style={{ width: "250px", height: "35px", border: "2px solid gray", display: "flex", flexDirection: "row", justifyContent: this.state.alignself }} class="progress-bar2 huv" onClick={this.changestyle}>
                        <div style={{ width: "250px", height: "35px", zIndex: "50", position: "absolute", background: "none", display: "flex", color: "#F0F2EF", flexDirection:"row", justifyContent:"space-around", marginTop:"3px"}}>
                            <p>{this.state.alignself==="flex-start"?(<span>Achievements&#62;&#62;&#62;</span>):(<span>Achievements</span>)}</p><p>{this.state.alignself==="flex-start"?(<span>Notes </span>):(<span>&#60;&#60;&#60;Notes</span>)}</p>
                            </div>
       
                        <div style={{ width: this.state.width, height: "37px", border: "3px solid gray", alignSelf: "center", zIndex: "2" }} ></div>
                    </div>
                </div>

                {this.state.notes ? (
                    <Notes notes={this.state.realtimestudent.notes} changenotes={this.notes} student={this.props.location.state.detail._id} keep={ this.keep}/>
                    ) : (
                        <Archive archived={this.state.realtimestudent.archive} changenotes={this.notes} Splashscreen={this.Splashscreen}/>
                    )}

            </div>


        ) : (<div></div>)}
    </div>
</div>
</div>
                                            )}
                                            
                                            {this.state.showProfile?(<div style={{width:"100vw",   position:"absolute", zIndex:"4000", }}><div className="card-container4" style={{ height: "1250px", margin: "0 auto" }}>

                                                

<div>
    <div className="front">



       


        <div className="overlaps1a" >

            <img
                src={this.state.picture}
                alt="profile-img"
                className="profile-img-cardabc cropped1"

            />



        </div>
    </div>
</div>
<div className="makeitwork1a">
    <div className="makeitwork2">
        <img
            src={edit}
            alt="edit"
            className="edit2 huv"
            onClick={this.editMe}

        />
    </div>
    <div style={{ marginBottom: "15px", alignSelf:"flex-start", marginLeft:"75px" }}>

        <div className="">
            <h2>{this.state.first} {this.state.last}</h2>

        </div>

    </div>
    <div className="makeitwork3">
        <div >
            <div style={{ float: "left", color: "gray", marginBottom: "5px" }}>Contact Info:</div>
        </div>
        <div>
            <u style={{ color: "blue" }}>{this.state.email}</u>
        </div>
        <div>
            {this.state.phone}
        </div>
        <div>
            <div style={{ float: "left", color: "gray", marginBottom: "5px", marginTop: "15px" }}>More Info:</div>
        </div>
        <div>

            {this.state.about}
        </div>
        <div>
            appointment time: {this.state.time}
        </div>

        {this.state.password==="******"?(
            <div>
        </div>
        ):(
            <div>
            Student Password: {this.state.password}
        </div>
        )}
        

    </div>
    <div className="makeitwork4" style={{ marginTop: "40px" }}>
        {this.state.realtimestudent ? (

            <div >
                <div className="noted">
                    <div style={{ width: "250px", height: "35px", border: "2px solid gray", display: "flex", flexDirection: "row", justifyContent: this.state.alignself }} class="progress-bar2 huv" onClick={this.changestyle}>
                        <div style={{ width: "250px", height: "35px", zIndex: "50", position: "absolute", background: "none", display: "flex", color: "#F0F2EF", flexDirection:"row", justifyContent:"space-around", marginTop:"3px"}}>
                        <p>{this.state.alignself==="flex-start"?(<span>Achievements&#62;&#62;&#62;</span>):(<span>Achievements</span>)}</p><p>{this.state.alignself==="flex-start"?(<span>Notes </span>):(<span>&#60;&#60;&#60;Notes</span>)}</p></div>
       
                        <div style={{ width: this.state.width, height: "37px", border: "3px solid gray", alignSelf: "center", zIndex: "2" }} ></div>
                    </div>
                </div>

                {this.state.notes ? (
                    <Notes notes={this.state.realtimestudent.notes} changenotes={this.notes} student={this.props.location.state.detail._id} keep={ this.keep}/>
                    ) : (
                        <Archive archived={this.state.realtimestudent.archive} changenotes={this.notes}/>
                    )}

            </div>


        ) : (<div></div>)}
    </div>
</div>
</div></div>):(<div></div>)}
                                            
                                            <p style={{opacity:"0"}}>This is the footer to it all I need to make it invisable</p>
                                        </div>
                                        {this.state.showProfile?(<div></div>):(

                                        <div className="forthegoals " style={{height:this.state.height1}}>
                                            {this.state.tooSmall?(<div className="fill2" style={{marginTop:"20px"}}>
                                                <div className=" columbized card-container4ab5tooSmall" >
                                                {this.state.realtimestudent ?
                                                    (<div className="fill1">
                                                        {this.state.realtimestudent ? (<Goals totalDaysPracticed={this.state.realtimestudent.totalDaysPracticed} main={this.state.realtimestudent.mainGoals} goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} daysPracticed={this.state.realtimestudent.daysPracticed} 
                                                        totalDays={this.state.realtimestudent.totalDays} totalTime={this.state.realtimestudent.wmin} timePracticed={this.state.realtimestudent.timeTotal} starpoints={this.state.realtimestudent.starpoints} 
                                                        spGoal= {this.state.realtimestudent.starpointsGoal} level={this.state.realtimestudent.level} daystreak={this.state.realtimestudent.daystreak} timebool={this.state.realtimestudent.timebool}
                                                        iwantgoals={true} daysbool={this.state.realtimestudent.daysbool} thousand={this.state.thousand} finalTotalTime={this.state.realtimestudent.finalTotalTime} starPoints={this.state.realtimestudent.starPoints} tooSmall={this.state.tooSmall} 
                                                        splashscreen={this.Splashscreen} MainGoals={this.state.realtimestudent.mainGoals}/>
                                                        ) : (<div> </div>
                                                            )}
                                                        {this.state.realtimestudent.goals[100] ? (<Goals goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} />
                                                        ) : (<div> </div>
                                                            )}</div>
                                                    ) : (<div></div>)}

                                            </div>
                                            <div className=" columbized card-container4ab5tooSmall" style={{marginTop:"60px"}}>
                                                {this.state.realtimestudent ?
                                                    (<div className="fill1">
                                                        {this.state.realtimestudent ? (<Goals totalDaysPracticed={this.state.realtimestudent.totalDaysPracticed} main={this.state.realtimestudent.mainGoals} goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} daysPracticed={this.state.realtimestudent.daysPracticed} 
                                                        totalDays={this.state.realtimestudent.totalDays} totalTime={this.state.realtimestudent.wmin} timePracticed={this.state.realtimestudent.timeTotal} starpoints={this.state.realtimestudent.starpoints} 
                                                        spGoal= {this.state.realtimestudent.starpointsGoal} level={this.state.realtimestudent.level} daystreak={this.state.realtimestudent.daystreak} timebool={this.state.realtimestudent.timebool}
                                                        iwantgoals={false} daysbool={this.state.realtimestudent.daysbool} thousand={this.state.thousand} finalTotalTime={this.state.realtimestudent.finalTotalTime} starPoints={this.state.realtimestudent.starPoints} tooSmall={this.state.tooSmall} 
                                                        splashscreen={this.Splashscreen} MainGoals={this.state.realtimestudent.mainGoals}/>
                                                        ) : (<div> </div>
                                                            )}
                                                        {this.state.realtimestudent.goals[100] ? (<Goals goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} />
                                                        ) : (<div> </div>
                                                            )}</div>
                                                    ) : (<div></div>)}

                                            </div>


                                            </div>


                                            ):(

                                                <div className=" columbized card-container4ab5">
                                                {this.state.realtimestudent ?
                                                    (<div className="fill1">
                                                        {this.state.realtimestudent ? (<Goals totalDaysPracticed={this.state.realtimestudent.totalDaysPracticed} main={this.state.realtimestudent.mainGoals} goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} daysPracticed={this.state.realtimestudent.daysPracticed} 
                                                        totalDays={this.state.realtimestudent.totalDays} totalTime={this.state.realtimestudent.wmin} timePracticed={this.state.realtimestudent.timeTotal} starpoints={this.state.realtimestudent.starpoints} 
                                                        spGoal= {this.state.realtimestudent.starpointsGoal} level={this.state.realtimestudent.level} daystreak={this.state.realtimestudent.daystreak} timebool={this.state.realtimestudent.timebool}
                                                        daysbool={this.state.realtimestudent.daysbool} thousand={this.state.thousand} finalTotalTime={this.state.realtimestudent.finalTotalTime} starPoints={this.state.realtimestudent.starPoints} tooSmall={this.state.tooSmall} 
                                                        splashscreen={this.Splashscreen} MainGoals={this.state.realtimestudent.mainGoals}/>
                                                        ) : (<div> </div>
                                                            )}
                                                        {this.state.realtimestudent.goals[100] ? (<Goals goals={this.state.realtimestudent.goals} student={this.props.location.state.detail._id} />
                                                        ) : (<div> </div>
                                                            )}</div>
                                                    ) : (<div></div>)}

                                            </div>
                                            )}
                                            
                                            

                                            <div className="card-container6abc" style={{ marginTop: "60px" }}>
                                                <div className="fill1" >
                                                    <div className="fill2 checkboxstuff1a" style={{ marginBottom: "10px" }}>
                                                        <div className="centerized"><h2>Homework</h2>
                                                        </div>
                                                       
                                                    </div>
                                                    <img
                                                        src={edit}
                                                        alt="edit"
                                                        className="edit2 huv"
                                                        onClick={this.editAlltheHomeworkdiaOpen}
                                                        style={{ position: "absolute", marginLeft:this.state.marginLeftedit, marginTop: "-60px" }}

                                                    />
                                                        <div className="centerized ">
                                                       
                                                        <div>{this.state.realtimestudent ? (
                                                            <div className="checkboxstuff1" style={{ marginBottom: "10px", flexDirection: "column" }}>

                                                                {this.state.realtimestudent.timeday ? (
                                                                <div>
                                                                        {!this.state.c ? (
                                                                                <div>
                                                                                    <div className="checkboxstuff1 centerized">
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Mon</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.mon } M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Tues</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.tues} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Wed</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.wed} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Thurs</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.thur} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Fri</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.fri} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Sat</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.sat} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Sun</div>
                                                                                        <div className=" centerized">{this.state.realtimestudent.hwtime.sun} M</div>
                                                                                        </div>
                                                                                        <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                                            <div className=" centerized">Total</div>
                                                                                        <div className=" centerized"> {parseInt(this.state.realtimestudent.hwtime.mon) + parseInt(this.state.realtimestudent.hwtime.tues) + parseInt(this.state.realtimestudent.hwtime.wed) + parseInt(this.state.realtimestudent.hwtime.thur) + parseInt(this.state.realtimestudent.hwtime.fri) + parseInt(this.state.realtimestudent.hwtime.sat) + parseInt(this.state.realtimestudent.hwtime.sun) } M</div>
                                                                                        </div>

                                                                                    </div>

                                                                                </div>

                                                                            

                                                                        ) : (<div>

                                                                               
                                                                        </div>)}
                                                                        
                                                                        </div>
                                                                   
                                                                ) : (
                                                                        <div>
                                                                            {this.state.realtimestudent.edityesnoWeek ? (<div style={{display:"flex", flexDirection:"row"}}>
                                                                                {!this.state.c ? (<h6><b>Weekly Time Total:</b>  {this.state.realtimestudent.totalWeekTime.total===""?(<span>0</span>):(<span>{this.state.realtimestudent.totalWeekTime.total}</span>)}/{this.state.realtimestudent.min} Minutes  </h6>) : (
                                                                                        <div>
                                                                                            </div>

                                                                                            )
                                                                                }
                                                                            </div>
                                                                                    


                                                                                ) : (<div>


                                                                                </div>)}
                                                                            
                                                                           
                                                                        

                                                                        </div>)}

                                                                <div className="checkboxstuff1" style={{ marginLeft:"10px"}}>

                                                                    {this.state.realtimestudent.syncedCheckbox ? (<Checkboxnum2 checkboxes={7} prac={this.state.realtimestudent.checked} synced={true} role={"teacher"} sync={this.state.realtimestudent.syncedCheckboxes} times={this.state.realtimestudent.hwtime} synctimes={this.state.realtimestudent.timeday }/>
                                                                    ) : (

                                                                            <Checkboxnum checkboxes={this.state.realtimestudent.checkboxes} prac={this.state.realtimestudent.checked} role={"teacher"} times={this.state.realtimestudent.hwtime} synctimes={this.state.realtimestudent.timeday}/>
                                                                )}
                                                                </div>

                                                            </div>
                                                        ) : (<div></div>)}


                                                        </div>
                                                        
                                                    </div>
                                                    <div className="centerized checkboxstuff1" style={{ width: "100%", marginTop: "2px", marginBottom:"10px" }}>
                                                        {this.state.realtimestudent === false ? (<div className= "centerized " style={{ width: "300px" }} ><div></div></div>
                                                        ) : (





                                                                <div  >
                                                                    {this.state.c ? (<div >

                                                                        {this.state.t ? (<div className=" checkboxstuff1a  " style={{ width: "265px", marginLeft: "7px" }}>
                                                                            <button className="btn  btn-block"  style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>
                                                                            <button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearTime}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time</p></span></button>

                                                                        </div>

                                                                        ) : (<div className=" centerized ">
                                                                                <button className="btn  btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearChecks}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Checks</p></span></button>

                                                                            </div>)}

                                                                        </div>
                                                                    ) : (<div className=" centerized " style={{ width: "265px" }}>
                                                                            {this.state.t ? (<button className="btn btn-block" style={{ background: "#696eb5", height: "35px", color: "#F0F2EF", width: "125px" }} onClick={this.clearTime}><span className="fill1"><p style={{ marginBottom: "10px" }}>Clear Time</p></span></button>):(<div></div>)}
                                                             
                                                            </div>)}

                                                           
                                                                </div>


                                                            )}

                                                    </div>
                                                    <div className=" fill2" style={{ height: "50%", marginTop: "7px" }}>
                                                        <div className=" fill2  centerized" style={{ height: "100%", }}>
                                                            <div className=" fill2" style={{ height: "100%", width: "75%", }}>
                                                                <table className="fill1" >
                                                                    <tr className="fill1">
                                                                        <td style={{ width: "100%", height: "100%", border: "1px solid green"  }}>
                                                                            <div className="homeworkScroll" style={{ width: "100%", height:"100%" }}>
                                                                                {this.state.homeworks[0] ? (<div className="homeworkScroll" style={{ width: "100%" }}>
                                                                                {
                                                                                    this.state.homeworks.map((homework, index) =>

                                                                                        <div className=" centerized"  key={index} style={{  width: "97%", display:"flex", justifyContent:"space-between" }}>
                                                                                            <div style={{marginLeft:"10px" }} className="huv centerized rowss" onClick={this.showHomework.bind(this, homework)}><div>{homework.title.length > 35 ? (<div><Short word={homework.title} wordtype="sHomework" /></div>) : (<div>{homework.title}</div>)}</div></div>

                                                                                            <div className="huv edit2 " style={{ justifyContent: "flexEnd" }}>
                                                                                                <img
                                                                                                    src={trash}
                                                                                                    alt="delete"
                                                                                                    onClick={this.deleteHomework.bind(this, homework)}
                                                                                                    style={{ width: "15px", height: "15px", opacity:".5" }}

                                                                                                />
                                                                                            </div>
                                                                                        </div>

                                                                                    )
                                                                                    }
                                                                                    
                                                                                    <div className="centerized"style={{ width: "100%" }}>
                                                                                        <div className="btn centerized btn-block" value="submit" onClick={this.AddHomework}><span className="checkboxstuff1" style={{ width: "150" }}>
                                                                                        <img
                                                                                                src={leaf}
                                                                                                className="edita"
                                                                                                style={{width:"20px", height:"20px"}}

                                                                                        />
                                                                                        <p>+</p><p className="rowss huv">Homework</p>
                                                                                    </span></div>

                                                                                </div>
                                                                            </div>) : (
                                                                                    <div>
                                                                                        <div className="btn  btn-block" value="submit" onClick={this.AddHomework}><span className="checkboxstuff1" style={{ width: "150" }}>
                                                                                            <img
                                                                                                src={leaf}
                                                                                                    className="edita"
                                                                                                    style={{ width: "20px", height: "20px" }}


                                                                                            />
                                                                                            <p>+</p><p className="rowss huv">Homework</p>
                                                                                        </span></div>
                                                                                        </div>)}
                                                                            </div>

                                                                        </td>
                                                                        
                                                                    </tr>
                                                                </table>
                                                                
                                                                
                                                            </div>
                                                            
                                                                
                                                        </div>
                                                        
                                                        

                                                        <div className="checkboxstuff1a fill2" style={{marginTop:"15px"}}>
                                                            
                                                            <div style={{ flexDirection: "column", marginRight: "30px" }}>
                                                                {this.state.realtimestudent.checkboxes ? (<div>{this.state.realtimestudent.checkboxes !== "0" ? (<div style={{display:"flex", flexDirection:"row"}}> <b style={{marginRight:"5px"}}>Practice Goal: </b> {!this.state.realtimestudent.checked ?(<div>0</div>):(<div>{this.state.realtimestudent.checked}</div>)}/{this.state.realtimestudent.checkboxes}</div>
                                                                ) : (<div></div>)}</div>
                                                                ) : (<div>
                                                                        {this.state.realtimestudent.syncedCheckbox ? (<div style={{ width: "125px" }} >
                                                                            {this.state.realtimestudent.checkboxes ? (<div style={{display:"flex", flexDirection:"row"}}> <b style={{marginRight:"5px"}}>Practice Goal: </b> {!this.state.realtimestudent.checked ?(<div>0</div>):(<div>{this.state.realtimestudent.checked}</div>)}/{this.state.realtimestudent.checkboxes}</div>
                                                                            ) : (<div></div>)}
                                                                        </div>
                                                                        ) : (<div></div>)}
                                                                    </div>)}
                                                                
                                                                {this.state.realtimestudent.dayStreak ? (<div><b> Streak: </b> {this.state.realtimestudent.daystreak}</div>): (<div></div>)}
                                                                <div>{this.state.c ? (<div style={{display:"flex", flexDirection:"row"}}>
                                                                    {parseInt(this.state.realtimestudent.min) > 0 ? (<p style={{display:"flex", flexDirection:"row"}}> <b> Weekly Time: </b> {this.state.realtimestudent.totalWeekTime.total===""?(<div style={{marginLeft:"5px", }}>0</div>):(<div style={{marginLeft:"5px",}}>{this.state.realtimestudent.totalWeekTime.total}</div>)}/{this.state.realtimestudent.min} Minutes  </p>) : (<div></div>)}
                                                                   
                                                                            
                                                                      

                                                                </div>) : (<div style={{display:"flex", flexDirection:"row"}}>
                                                                        {this.state.realtimestudent.timeday ? (
                                                                            <div style={{display:"flex", flexDirection:"row"}}>
                                                                                { parseInt(this.state.realtimestudent.min) > 0  ? (<p style={{display:"flex", flexDirection: "row"}}><b>Weekly Time:</b> {this.state.realtimestudent.totalWeekTime.total===""?(<div style={{marginLeft:"5px", }}>0</div>):(<div style={{marginLeft:"5px", }}>{this.state.realtimestudent.totalWeekTime.total}</div>)}/{this.state.realtimestudent.min} Minutes  </p>) : (<div></div>)}</div>
                                                                        ) : (<div></div>)}
                                                                            </div>)}
                                                                </div>
                                                                </div>
                                                        </div>



                                                    </div>


                                                </div>


                                            </div>
                                            <div style={{ opacity: "0" }}>
                                                <table style={{ width: "100%" }}>
                                                    <tr>
                                                        <td style={{ width: "40%" }}>
                                                            <div style={{ flexDirection: "column" }}>
                                                                <div> <p>Mon: 0 Minutes </p></div>
                                                                <div>  <p>Tues: 0 Minutes</p></div>
                                                                <div> <p>Wed: 0 Minutes</p></div>
                                                                <div> <p>Thurs: 0 Minutes</p></div>
                                                            </div>
                                                        </td>
                                                        <td style={{ width: "50%" }}>
                                                            <div style={{ flexDirection: "column" }}>
                                                                <div> <p>Fri: 0 Minutes</p></div>
                                                                <div>  <p>Sat: 0 Minutes</p></div>
                                                                <div> <p>Sun: 0 Minutes</p></div>
                                                                <div><p> Total: </p></div>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </table>

                                            </div>
                                            

                                        </div>
                                        )}
                                    </div>


                                        

                                )
                        }
                    </div>
                ) : (<div></div>)
       
    }</div>
    );
    }
};
/*
 * 
 * 
 * */