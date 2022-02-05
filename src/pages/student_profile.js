import React, { Component } from "react";
import background from "./music.png";
import Pic from "../components/diapicture";
import AuthService from "../services/auth.service";
import "./pages.css"
import edit from "./edit.png";
import Editing from "../components/editing";
import EditBack from "../components/editBackground";
import Checkboxnum from "../components/practice.js";
import axios from "axios";
//import Goals from "./goals";
//import Goals from "./goals1";
import Goals from "./goals2";
import Timess from "../components/timess.js"
import leaf from "./leaf.png";
import ShowHomework from "../components/showHomework"
import Goal from "../components/showgoal.js";
import Checkboxnum3 from "../components/practice3.js";
import bullet from "./bulletarrow.png"

import Checkboxnum2 from "../components/practice2.js";
import authService from "../services/auth.service";
import Starpointz from "../components/starpointz.js";
import Splashscreen  from "../components/splashscreen.js";




export default class Student_profile extends Component {
    constructor(props) {
        super(props);
        this.openPic = this.openPic.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);
        this.editMe = this.editMe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.editBackground = this.editBackground.bind(this);
        this.handleBackClose = this.handleBackClose.bind(this);
        this.handleSub = this.handleSub.bind(this);
        this.getCurrentUserinRealTime = this.getCurrentUserinRealTime.bind(this);
        this.practice = this.practice.bind(this);
        this.showHomework = this.showHomework.bind(this);
        this.hideHomeworkClose = this.hideHomeworkClose.bind(this);
        this.showGoal = this.showGoal.bind(this);
        this.handlegoalClose = this.handlegoalClose.bind(this);
        this.handletimesClose = this.handletimesClose.bind(this);
        this.changeweek = this.changeweek.bind(this);
        this.hwpractice = this.hwpractice.bind(this);
        this.starpointz = this.starpointz.bind(this);
        this.handletimesOpen = this.handletimesOpen.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);

        
        this.changetimes = this.changetimes.bind(this);

        this.state = {
            diaPic: false,
            edit: false,
            picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
            newPic: "",
            currentUser: AuthService.getCurrentUser(),
            realtimeusr: undefined,
            realtimeusr0: undefined,
            back: background,
            about: "this is how you learn",
            first: "",
            last: "",
            email: "",
            phone: "",
            edittheBackground: false,
            background: background,
            currentStudent: undefined,
            day: "",
            time: "",
            checkboxes: "",
            homework: "",
            hwpractice: 0,
            practice: 0,
            daysPracticed: 0,
            totalDays: 0,
            homeworks: "",
            currentHomework: undefined,
            showGoal: false,
            newcheck: false,
            changetime: "",
            minedit: "",
            timeedit: "",
            timesedit: false,
            weeklyTimeEdit: "",
            c: false,
            t: false,
            starpointz: false,
            timecheck: false,
            timedaycheck: false,
            statsmargin: "60px",
            timepracmargin: "40%",
            timepracmarginr: "40%",
            dayspracmargin: "40%",
            splashscreen:false,
            pracgoalmargin: "40%",
            amarginLeft: "30px",
            aheight:"140px",
            tmarginTop:"25px",
            widthforedit: "80%",
            sp: "0",
            main: undefined
            
        }

    };
    async Splashscreen(){
        this.setState({
            splashscreen:!this.state.splashscreen
        })
        
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(650)
            window.location.reload();

        

    }

    starpointz() {
        if(this.state.realtimeusr.starPoints){
        this.setState({
            starpointz: !this.state.starpointz
        })
    }
        this.props.props.show();
    }
    showGoal(goal, main) {
        
        this.setState({
            showGoal: true,
            currentgoal: goal,
            main: main
        });
        this.props.props.show();

    }
    handlegoalClose() {
        this.setState({
            showGoal: false,
            main: false,
        });
        this.props.props.show();
    }

    practice(sign, sync, day) {
        
        if (sync) {
            let sp= "";
            let pass = false;
            let npass= false;
            let daystreak = parseInt(this.state.realtimeusr.daystreak);
            let x = parseInt(this.state.practice);
            let xx = parseInt(this.state.daysPracticed);
            if (sign) {
                daystreak++;
                x++;
                xx++;
                sp = ((parseInt(this.state.realtimeusr.starpoints)) + (20*daystreak)).toString();


            
            if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)){
                pass= true;
            

            }
            if(this.state.realtimeusr.edityesnoWeek){
                this.setState({   timesedit:true, timecheck:true});

            }
            if(this.state.realtimeusr.timeday){
                console.log(daystreak, this.state.realtimeusr.timeday, sp)
                let nday ={
                    M: "mon",
                    T: "tues",
                    W: "wed",
                    R: "thur",
                    F: "fri",
                    S: "sat",
                    s: "sun",

                    
                }
                let theday= nday[day];
                this.setState({timesedit:true, timecheck:true, timedaycheck: true, timeedit: theday  });
            }
            else{
                if(this.state.realtimeusr.starPoints){
                    this.setState({sp: sp});
                this.setState({  starpointz: true, });
                }
                this.props.props.show();
            }
            this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });


            }
            else {
                sp = ((parseInt(this.state.realtimeusr.starpoints)) - (20*daystreak)).toString();
                


            
                if (parseInt(sp) <= 0){
                    
                    pass= true;
                    npass= true;
    
                }

                
                
                daystreak--;
                x--;
                xx--;
                


            
               
                
               
                this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });

            }
            console.log(this.props.props.props.currentPage._id, day, sign, this.state.practice, this.state.daysPracticed, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass )
            
            AuthService.syncedchecking(this.props.props.props.currentPage._id, day, sign, this.state.practice, this.state.daysPracticed, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass )
        }
        else {
            let sp= "";
            let pass = false;
            let npass= false;
            let daystreak = parseInt(this.state.realtimeusr.daystreak);

            let x = this.state.practice;
            let xx = this.state.daysPracticed;
            if (sign) {
                daystreak++;
                x++;
                xx++;
                sp = ((parseInt(this.state.realtimeusr.starpoints)) + (20*daystreak)).toString();


            
                if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)){
                    pass= true;
                
    
                }
                if(this.state.realtimeusr.edityesnoWeek){
                    this.setState({   timesedit:true, timecheck:true});
    
                }
                if(this.state.realtimeusr.timeday){
                    let nday ={
                        1: "mon",
                        2: "tues",
                        3: "wed",
                        4: "thur",
                        5: "fri",
                        6: "sat",
                        7: "sun",
    
                        
                    }
                    console.log(x);
                    let theday= nday[x];
                    console.log(theday);
                    this.setState({timesedit:true, timecheck:true, timedaycheck: true, timeedit: theday  });
                }
                else{
                    if(this.state.realtimeusr.starPoints){
                        this.setState({sp:sp})
                    this.setState({  starpointz: true, });
                    }
                    this.props.props.show();
                }
                this.setState({ practice: x.toString(), daysPracticed: xx.toString(), });

            }
            else {
                
                sp = ((parseInt(this.state.realtimeusr.starpoints)) - (20*daystreak)).toString();
                console.log(sp)
                


            
                if (parseInt(sp) <= 0){
                    
                    pass= true;
                    npass= true;
    
                }

                
                
                daystreak--;
                x--;
                xx--;
               
                this.setState({ practice: x, daysPracticed: xx, });

            }
            
            AuthService.checked(this.props.props.props.currentPage._id, this.state.practice, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak, npass);
            AuthService.daysPracticed(this.props.props.props.currentPage._id, this.state.daysPracticed,);
        }
    }

    hwpractice(sign, sync, day, practice) {
        if (sync) {
            console.log(practice);
            let x = practice;
            if (sign) {
                x++;
                this.setState({ hwpractice: x,  });

            }
            else {
                x--;
                this.setState({ hwpractice: x,  });

            }
            AuthService.hwsyncedchecking(this.props.props.props.currentPage._id, day, sign, this.state.hwpractice, this.state.currentHomework._id, this.state.currentHomework.syncedCheckboxes)
        }
        else {
            console.log(practice);
            let x;
            if (!practice) {
                x = 0;
            }
            else {
                x = practice;
            }
            if (sign) {
                x++;
                this.setState({ hwpractice: x, });

            }
            else {
                x--;
                this.setState({ hwpractice: x, });

            }
            AuthService.hwchecked(this.props.props.props.currentPage._id, this.state.currentHomework._id, this.state.hwpractice,);
        }
    }


    getCurrentUserinRealTime(currentStudent) {
        

        console.log(currentStudent._id);
        let id = currentStudent._id;
                const API_URL = "https://legato.flinnapps.com/api/auth/";

        //const API_URL = "http://localhost:8080/api/auth/";
        console.log(id);

        console.log(this.props);

            axios.post(API_URL + "getstudent", {
                id,

            }).then(response => {
                console.log("I ran this");
                this.setState({ realtimeusr: response.data.student });

                if (this.state.realtimeusr.profilepic) {

                                        const porfilePic = this.state.realtimeusr.profilepic;

                    //const porfilePic = 'http://localhost:8080' + this.state.realtimeusr.profilepic;
                    this.setState({ picture: porfilePic });
                }
                else {
                    const porfilePic = "//ssl.gstatic.com/accounts/ui/avatar_2x.png";
                    this.setState({ picture: porfilePic });
                }
                if (this.state.realtimeusr.backgroundpic) {
                                        const background = this.state.realtimeusr.backgroundpic;

                    //const background = 'http://localhost:8080' + this.state.realtimeusr.backgroundpic;
                    this.setState({ background: background });
                }
                else {
                    const background = this.state.back;

                    this.setState({ background: background });
                }

                var ar = "";
                let ampm = false;
                for (let i = 0, j = i + 1; i < this.state.realtimeusr.scheduling.length; i++, j++) {

                    if (i === 0) {


                        if (this.state.realtimeusr.scheduling.length === 4) {

                            if (this.state.realtimeusr.scheduling[0] === "1") {
                                
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "10";
                                    ampm = true;

                                }
                                if (this.state.realtimeusr.scheduling[1] === "1") {
                                    ar = ar + "11";
                                    ampm = true;
                                }
                                if (this.state.realtimeusr.scheduling[1] === "2") {
                                    ar = ar + "12";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "3") {
                                    ar = ar + "1";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "4") {
                                    ar = ar + "2";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "5") {
                                    ar = ar + "3";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "6") {
                                    ar = ar + "4";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "7") {
                                    ar = ar + "5";

                                    console.log(ar);

                                }
                                if (this.state.realtimeusr.scheduling[1] === "8") {
                                    ar = ar + "6";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "9") {
                                    ar = ar + "7";
                                }

                            } else if (this.state.realtimeusr.scheduling[0] === "2") {
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "8";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "1") {
                                    ar = ar + "9";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "2") {
                                    ar = ar + "10";
                                }
                                if (this.state.realtimeusr.scheduling[1] === "3") {
                                    ar = ar + "11";
                                }
                            }
                            else if (this.state.realtimeusr.scheduling[0] === "0") {
                                if (this.state.realtimeusr.scheduling[1] === "0") {
                                    ar = ar + "12";
                                    ampm = true;
                                }
                            }
                        }
                        else {
                            ar = ar + this.state.realtimeusr.scheduling[i];

                        }
                    }



                    else {
                        if (this.state.realtimeusr.scheduling.length === 3) {
                            if (i === 1) {
                                ar = ar + ":";

                            }
                            ar = ar + this.state.realtimeusr.scheduling[i];

                            if (i === 2) {
                                ar = ar + " AM";
                            }


                        }
                        else {
                            if (this.state.realtimeusr.scheduling[j]) {
                                if (i === 1) {
                                    ar = ar + ":";
                                }
                                ar = ar + this.state.realtimeusr.scheduling[j];
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




                let prac = this.state.realtimeusr.checked;
                let days = this.state.realtimeusr.daysPracticed;
                let totaldays = this.state.realtimeusr.totalDays;
                if (this.state.realtimeusr.checked === undefined) {
                    prac = 0;
                }
                if (this.state.realtimeusr.daysPracticed === undefined) {
                    days = 0;
                }
                if (this.state.realtimeusr.totalDays === undefined) {
                    totaldays = 0;
                }
                if (this.state.realtimeusr.syncedCheckbox) {
                    this.setState({
                        c: true,
                    })
                }
                if (this.state.realtimeusr.checkboxes !== "0") {
                    this.setState({
                        c: true,
                    })

                }
                if (this.state.realtimeusr.edityesnoWeek) {
                    this.setState({
                        t: true,
                    })
                }
                if (this.state.realtimeusr.timeday) {
                    this.setState({
                        t: true,
                    })
                }
                this.setState({
                    about: this.state.realtimeusr.about,
                    first: this.state.realtimeusr.firstName,
                    last: this.state.realtimeusr.lastName,
                    email: this.state.realtimeusr.email,
                    phone: this.state.realtimeusr.phone,
                    day: this.state.realtimeusr.day,
                    time: ar,
                    checkboxes: this.state.realtimeusr.checkboxes,
                    homework: this.state.realtimeusr.homework,
                    homeworks: this.state.realtimeusr.homeworks,
                    daysPracticed: days,
                    totalDays: totaldays,
                    practice: prac,
                })
                this.props.props.currentUserChange(this.state.realtimeusr.firstName, this.props.props.props.currentPage._id);

            });
        
    }
     async componentDidMount() {
        
        if(parseInt(window.innerWidth) <= 550){
            this.setState({ tooSmall: true, 
                statsmargin: "45px",
                timepracmargin: "48%",
                timepracmarginr: "37%",
                dayspracmargin: "43%",
                amarginLeft: "10px",
                aheight:"300px",
                tmarginTop:"50px",
                
                pracgoalmargin: "42%",
                
                
            });
        }

        
         

         await this.setState({
             currentStudent: this.props.props.props.currentPage,
         })

         console.log(this.props.props.props.currentPage);


        
                
         await this.getCurrentUserinRealTime(this.props.props.props.currentPage);

        

    }

    async componentDidUpdate(prep, pres) {
        console.log(prep);
        console.log(this.props);
        if (prep.props.props.currentPage._id !== this.props.props.props.currentPage._id) {
            await this.setState({
                currentStudent: this.props.props.props.currentPage,
                picture: "//ssl.gstatic.com/accounts/ui/avatar_2x.png",
                newcheck: !this.state.newcheck,
            })
            if (this.props.props.props.currentPage.profilepic)
                await this.setState({
                    picture: this.props.props.props.currentPage.profilepic,
                })
            await this.getCurrentUserinRealTime(this.props.props.props.currentPage);

        }
    }

    handleBackClose() {
        this.setState({
            edittheBackground: false
        });
    }
    editBackground() {
        this.setState({
            edittheBackground: true,
        })
    }
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    editMe() {
        this.setState({
            edit: true
        })
        this.props.props.show()
    }

    handleEditClose() {
        this.setState({
            edit: false
        });
        this.props.props.show();
    };

    handleClose() {
        this.setState({
            diaPic: false
        });
        this.props.props.show();
    };

    changePic(pic) {
        this.setState({
            diaPic: pic.toString()
        });
    };

    openPic = (event) => {
        this.setState(
            {
                diaPic: true
            });
            this.props.props.show();


    };
    handleSub(e) {
        e.preventDefault();
       
        
        AuthService.changeStudentinfo(
            this.props.props.props.currentPage._id,
            this.state.currentUser.id,
            this.state.first,
            this.state.last,
            this.state.about,
            this.state.email,
            this.state.phone,
            this.props.props.props.currentPage.scheduling,
            this.state.checkboxes,
            this.state.day
        ).then(response => {
            console.log(response.data.changed);
            this.setState({
                about: response.data.changed.about,
                first: response.data.changed.firstName,
                last: response.data.changed.lastName,
                email: response.data.changed.email,
                phone: response.data.changed.phone,
                edit: false,
                realtimeusr0: response.data.changed,
                
            });

        })
        
            .catch(e => {
                console.log(e);
            });
       //window.location.reload();
       this.Splashscreen();


        this.props.props.show();

    }
    showHomework(homework) {
        this.setState({
            showHomework: true,
            currentHomework: homework,
        })
        this.props.props.show();



    }
    hideHomeworkClose() {
        this.setState({
            showHomework: false
        });
        this.props.props.show();

    };
    handletimesOpen() {
        this.setState({
            timesedit: true
        });
    };
    handletimesClose(stars) {
        
        this.setState({
            timesedit: false
        });
        if(stars){
            if(this.state.realtimeusr.starPoints){
            this.setState({
                starpointz: true
            }); 
        }
            this.props.props.show();
        }
    };
    changetimes() {
        let sp = this.state.realtimeusr.starpoints;
        let daystreak = parseInt(this.state.realtimeusr.daystreak)
        let pass = false;
        let npass= false;
        if(!this.state.realtimeusr.syncedCheckbox){
            if(parseInt(this.state.realtimeusr.checkboxes)=== 0){
               
                if(parseInt(this.state.realtimeusr.hwtime[this.state.timeedit]) ===0)
                {
                if(parseInt(this.state.minedit)===0){
                    
                    sp = (parseInt(this.state.realtimeusr.starpoints) - (20*daystreak)).toString();
                    if (parseInt(sp) <= 0){
                    
                        pass= true;
                        npass= true;
        
                    }
                    daystreak --;

                }
                else{
                
                daystreak = parseInt(this.state.realtimeusr.daystreak) + 1;
            sp = (parseInt(this.state.realtimeusr.starpoints) + (20*daystreak)).toString();


           
            if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)){
                pass= true;

            }
        }



            }
        else{
            if(parseInt(this.state.minedit)===0){
                    
                sp = (parseInt(this.state.realtimeusr.starpoints) - (20*daystreak)).toString();
                if (parseInt(sp) <= 0){
                
                    pass= true;
                    npass= true;
    
                }
                daystreak --;

            }
        }
        
    }
        }
        
        if(!this.state.realtimeusr.syncedCheckbox){        authService.changetimes(this.props.props.props.currentPage._id, this.state.timeedit, this.state.minedit, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, daystreak.toString(), this.state.realtimeusr.timeTotal, npass   );
        }
        else{
            authService.changetimes(this.props.props.props.currentPage._id, this.state.timeedit, this.state.minedit, this.state.realtimeusr.level, false, this.state.realtimeusr.starpointsGoal, pass, daystreak.toString(), this.state.realtimeusr.timeTotal, npass   );

        }
        
         
        

       

        if(!this.state.realtimeusr.syncedCheckbox){
            if(parseInt(this.state.realtimeusr.checkboxes) === 0){
                if(parseInt(this.state.realtimeusr.hwtime[this.state.timeedit]) ===0){
                    if(this.state.realtimeusr.starPoints){
                    this.setState({
                    starpointz:true,

                })
            }
                this.setState({
                    timesedit: false,
                })
                this.props.props.show();
            }
            else{
                if(this.state.timecheck){
                    if(this.state.realtimeusr.starPoints){
                    this.setState({
                        starpointz: true,

                    })
                }
                    this.setState({timesedit:false})
                    this.props.props.show();
                }
                else{
                //window.location.reload();
                this.Splashscreen();
            }


            }
                
            
            
        }
        else{
            if(this.state.timecheck){
                if(this.state.realtimeusr.starPoints){
                this.setState({
                    starpointz: true,

                })
            }
            this.setState({timesedit:false})
                this.props.props.show();
            }
            else{
            //window.location.reload();
            this.Splashscreen();
        }
        }




            }
         else{
            if(this.state.timecheck){
                if(this.state.realtimeusr.starPoints){
                this.setState({
                    starpointz: true,

                })
            }
            this.setState({
                timesedit:false
            })
                this.props.props.show();
            }
            else{
           // window.location.reload();
            this.Splashscreen();
        }
         }      
            
            
        
        
    }
    changeweek() {
        console.log("iget here")
        let sp = this.state.realtimeusr.starpoints
        let pass = false;


        if(parseInt(this.state.realtimeusr.totalWeekTime.total) < parseInt(this.state.realtimeusr.min)){
            if((parseInt(this.state.realtimeusr.totalWeekTime.total)+parseInt(this.state.weeklyTimeEdit)) >= parseInt(this.state.realtimeusr.min))

            sp = (parseInt(this.state.realtimeusr.starpoints) + 100).toString();

            
            if (parseInt(sp) >= parseInt(this.state.realtimeusr.starpointsGoal)){
                pass= true;

            }
        }

       

        authService.changeweek(this.props.props.props.currentPage._id, this.state.weeklyTimeEdit, this.state.realtimeusr.level, sp, this.state.realtimeusr.starpointsGoal, pass, this.state.realtimeusr.timeTotal, this.state.realtimeusr.totalWeekTime.total);

        
        if ((parseInt(this.state.realtimeusr.totalWeekTime.total)+parseInt(this.state.weeklyTimeEdit)) >= parseInt(this.state.realtimeusr.min)){
            if (parseInt(this.state.realtimeusr.totalWeekTime.total) <  parseInt(this.state.realtimeusr.min)){
                if(this.state.realtimeusr.starPoints){
                this.setState({
               starpointz: true,
            });
        }
            this.props.props.show();
        }
        else{
            if(this.state.timecheck){
                if(this.state.realtimeusr.starPoints){
                this.setState({
                    starpointz:true,
                })
            }
                this.props.props.show();
            }
            else{
            //window.location.reload();
            this.Splashscreen();
            }

        }
    }
        else{
            if(this.state.timecheck){
                if(this.state.realtimeusr.starPoints){
                this.setState({
                    starpointz:true,
                })
            }
                this.props.props.show();
            }
            else{
            //window.location.reload();
            this.Splashscreen();
            }
    }
       
        

        //window.location.reload();
        this.setState({
            timesedit: false,
        });
    }
    
    //render student information.  
    render() {
        
        return (


            <div className="z2 fill1 example" >
                {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
                <div className="columbized card-container0 " style={{marginTop:this.state.tmarginTop}}>
                    {this.state.diaPic && (<Pic handleClose={this.handleClose} realusr={this.state.realtimeusr} />)}

                    {this.state.timesedit && (<Timess timedaycheck={this.state.timedaycheck} timecheck={this.state.timecheck} handleClose={this.handletimesClose} handleChange={this.handleChange} change={this.changetimes} changeweek={this.changeweek} weekly={this.state.realtimeusr.timeday } syncedCheckbox={this.state.realtimeusr.syncedCheckbox} checkboxes={this.state.realtimeusr.checkboxes}/>)}

                {this.state.edittheBackground && (<EditBack handleBackClose={this.handleBackClose} realusr={this.state.realtimeusr} />)}

                {this.state.edit && (<Editing state={this.state} handleSub={this.handleSub} handleEditClose={this.handleEditClose} handleChange={this.handleChange} currentUser={this.state.currentUser.role}/>)}
                    {this.state.showHomework && (<ShowHomework homework={this.state.currentHomework} hideHomework={this.hideHomeworkClose} student={this.props.props.props.currentPage._id} role="student" practice={this.hwpractice}/> )}
                    {this.state.showGoal && (<Goal main={this.state.main} Goal={this.state.currentgoal} handleClose={this.handlegoalClose} role="student" handletheclose={this.handlegoalsClose}/>)}
                    {this.state.starpointz && (<Starpointz handleClose={this.starpointz} sp ={this.state.sp}/>)}


                    
                    <div className="front1 centerized" style={{ position: "relative" }}>



                            <div className="overlap">

                                <img
                                    src={this.state.background}
                                    alt="music"
                                    className="back-screen  cropped1"
                                    
                                />
                            </div>


                        <div className="overlapsaab" style={{marginTop: "8%"}} >

                                <img
                                src={this.state.picture}
                                alt="profile-img"
                                className="profile-img-cardabc huv cropped1 centerized"
                                onClick={this.openPic}
                                style={{position:"relative"}}
                                />

                            </div>
                        </div>


                     
                
                    <div className="makeitwork0abc">

                    <div className="makeitworkagain">
                        <h2>{this.state.first} {this.state.last}</h2>

                    </div>
                    <div className="makeitworkagain" style={{width:this.state.widthforedit, display:"flex", justifyContent:"center"}}>

                        {this.state.about}

                    </div>
                    <div>
                        {this.state.email}
                    </div>
                    <div>
                        {this.state.phone}
                    </div>
                    <div>
                    Scheduled Time: {this.state.time} {this.state.day}
                        </div>
                        <div onClick={this.editMe} className="huv ">
                                <p className="huv rowss3">Edit Profile</p>


                            </div>
                    

                </div>
                

               
                </div>
                <div className="columbized2a" style={{marginTop:"25px"}}>
                <div className="proStud5 ">
                    <div className=" card-container5ab">
                        {this.state.realtimeusr ? (<div className="fill1">{
                                this.state.realtimeusr ?
                                (<div className="fill1">
                                        {this.state.realtimeusr ? (<Goals goalss={false} role={"student"} main={this.state.realtimeusr.mainGoals} goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} 
                                        daysPracticed={this.props.props.props.currentPage.daysPracticed} totalDays={this.props.props.props.currentPage.totalDays} starpoints={this.state.realtimeusr.starpoints} 
                                        starpointsGoal={this.state.realtimeusr.starpointsGoal} level = {this.state.realtimeusr.level}  totalTime={this.state.realtimeusr.wmin} timePracticed={this.state.realtimeusr.timeTotal}
                                        checkboxes={this.state.realtimeusr.checkboxes} wmin={this.state.realtimeusr.wmin} starPointz={this.state.realtimeusr.starPoints} show={this.props.props.show}
                                        splashscreen={this.Splashscreen} MainGoals={this.state.realtimeusr.mainGoals}/>
                                    ) : (<div> </div>
                                        )}
                                    {this.state.realtimeusr.goals[100] ? (<Goals goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} />
                                    ) : (<div> </div>
                                        )}</div>
                                    ) : (<div className="fill2 centerized"><h6 style={{  color: "gray", height: "40px", marginTop:"20%"}} >No Goals assigned yet! </h6></div>)
                            }</div>) : (<div className="fill2 centerized"><h6 style={{  color: "gray", height: "40px", marginTop:"20%" }} >No Goals assigned yet! </h6> </div>)}
                    

                        </div>

                        <div className=" card-container5abc">
                            {this.state.realtimeusr ? (<div className="fill1">{
                                this.state.realtimeusr.mainGoal ?
                                    (<div className="fill1">
                                        {this.state.realtimeusr ? (<Goals goalss={true} role={"student"} main={this.state.realtimeusr.mainGoal} goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} daysPracticed={this.props.props.props.currentPage.daysPracticed} 
                                        totalDays={this.props.props.props.currentPage.totalDays} show={this.props.props.show}  
                                        starpoints={this.state.realtimeusr.starpoints} starpointsGoal={this.state.realtimeusr.starpointsGoal} level = {this.state.realtimeusr.level}
                                         daystreak={this.state.realtimeusr.daystreak} starPointz={this.state.realtimeusr.starPoints}
                                         splashscreen={this.Splashscreen} MainGoals={this.state.realtimeusr.mainGoals}
                                         />
                                        ) : (<div> </div>
                                            )}
                                        {this.state.realtimeusr.goals[100] ? (<Goals goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} />
                                        ) : (<div> </div>
                                            )}</div>
                                    ) : (<div>
                                        {this.state.realtimeusr.goals.length !==0?(
                                            <div className="fill1">
                                            {this.state.realtimeusr ? (<Goals goalss={true} role={"student"} main={this.state.realtimeusr.mainGoal} goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} daysPracticed={this.props.props.props.currentPage.daysPracticed} 
                                            totalDays={this.props.props.props.currentPage.totalDays} show={this.props.props.show} starpoints={this.state.realtimeusr.starpoints} starPointz={this.state.realtimeusr.starPoints} starpointsGoal={this.state.realtimeusr.starpointsGoal} level = {this.state.realtimeusr.level} daystreak={this.state.realtimeusr.daystreak}/>
                                            ) : (<div> </div>
                                                )}
                                            {this.state.realtimeusr.goals[100] ? (<Goals goals={this.state.realtimeusr.goals} student={this.state.realtimeusr._id} />
                                            ) : (<div> </div>
                                                )}</div>


                                        ):(<div className="fill2 centerized"><h5 style={{  color: "gray", height: "40px", marginTop: "20%" }} >No Goals assigned yet! </h5> </div>)}
                                    </div>
                                    
                                        )
                            }</div>) : (<div className="fill2 centerized"><h5 style={{  color: "gray", height: "40px", marginTop: "20%" }} >No Goals assigned yet! </h5> </div>)}


                        </div>

            
                        <div className="card-container5ab ">
                                    <div className="fill1" >
                                <div className="fill2 centerized" style={{ marginBottom: "5px" }}><h2>Homework</h2></div>
                                <div className=" fill2">
                                    {this.state.currentStudent ? (<div className="checkboxstuff centerized fill2">

                                        <div className="fill2">{this.state.realtimeusr ? (
                                            <div className="checkboxstuff1 fill2 " style={{ marginBottom: "10px", flexDirection: "column" }}>

                                                {this.state.realtimeusr.timeday ? (
                                                    <div className=" centerized">
                                                        {!this.state.c ? (
                                                            <div className=" centerized" style={{marginRight:"5px"}}>
                                                                <div className="checkboxstuff1 centerized" style={{fontSize:"13px"}}>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Mon</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.mon} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Tues</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.tues} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Wed</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.wed} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Thurs</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.thur} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Fri</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.fri} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Sat</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.sat} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "15px" }}>
                                                                        <div className=" centerized">Sun</div>
                                                                        <div className=" centerized">{this.state.realtimeusr.hwtime.sun} M</div>
                                                                    </div>
                                                                    <div style={{ flexDirection: "column", marginRight: "0px" }}>
                                                                        <div className=" centerized">Total</div>
                                                                        <div className=" centerized"> {parseInt(this.state.realtimeusr.hwtime.mon) + parseInt(this.state.realtimeusr.hwtime.tues) + parseInt(this.state.realtimeusr.hwtime.wed) + parseInt(this.state.realtimeusr.hwtime.thur) + parseInt(this.state.realtimeusr.hwtime.fri) + parseInt(this.state.realtimeusr.hwtime.sat) + parseInt(this.state.realtimeusr.hwtime.sun) } M</div>
                                                                    </div>

                                                                </div>

                                                            </div>



                                                        ) : (<div>


                                                        </div>)}

                                                    </div>

                                                ) : (
                                                        <div className="centerized">
                                                            {this.state.realtimeusr.edityesnoWeek ? (<div className="centerized">
                                                                {!this.state.c ? (<h6>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </h6>) : (
                                                                    <div>
                                                                    </div>

                                                                )
                                                                }
                                                            </div>



                                                            ) : (<div>


                                                            </div>)}




                                                        </div>)}

                                                <div className="checkboxstuff1a centerized" >

                                                    {this.state.realtimeusr.syncedCheckbox ? (<Checkboxnum2 checkboxes={7} prac={this.state.currentStudent.checked} practice={this.practice} synced={true} sync={this.state.currentStudent.syncedCheckboxes} times={this.state.realtimeusr.hwtime} synctimes={this.state.currentStudent.timeday} />
                                                    ) : (

                                                            <Checkboxnum checkboxes={this.state.realtimeusr.checkboxes} prac={this.state.realtimeusr.checked} practice={this.practice} times={this.state.realtimeusr.hwtime} synctimes={this.state.realtimeusr.timeday} />
                                                        )}
                                                </div>

                                            </div>
                                        ) : (<div></div>)}


                                        </div>




                                    </div>) : (<div></div>)}
                                    {this.state.t ? (
                                        <div className="fill2 centerized">
                                            <div style={{ width: "125px", height: "40px", marginTop: "5px", marginBottom: "7px" }} ><button style={{ height: "30px", background: "#696eb5", color: "#F0F2EF" }} className="btn btn-block centerized" onClick={this.handletimesOpen}>Submit Time</button></div>
                                        </div>
                                    ) : (<div></div>)}
                                   

                                    <div className=" fill2">
                                        <table className="fill2" >
                                            <tr className="fill2">
                                                
                                                <div className="centerized fill2" style={{ height: "200px", marginBottom: "15px" }}>
                                                    <td style={{ width: "75%", height: "100%", border: "2px solid green", borderRadius:"3%" }}>
                                                        <div style={{ width: "100%", height: "98%",  }}>
                                                            {this.state.homeworks[0] ? (<div className="homeworkScroll1" style={{ width: "100%", marginTop:"6px"}} >
                                                        {
                                                            this.state.homeworks.map((homework, index) =>

                                                                <div className="checkboxstuff1  rowss" key={index} style={{marginBottom:"7px"}}>
                                                                    <div><img src={leaf} style={{ width: "22px", hieght: "22px", marginRight: "10px", marginLeft: "5px" }} /></div>
                                                                    <div className="huv checkboxstuff2 " onClick={this.showHomework.bind(this, homework)}>{homework.title}</div>

                                                                    
                                                                </div>

                                                            )
                                                }

                                                    </div>) : (
                                                                <div>No Homework assigned yet!</div>)}
                                                    </div>
                                                            </td>
                                                        
                                                  
                                                </div>
                                            </tr>
                                            </table>
                                    </div>
                                    
                            

                                    
                                   

                                   
                                    
                                            

                                        </div>
                                        {this.state.realtimeusr?(<div>
                                            {this.state.realtimeusr.edityesnoWeek ? (<div style={{marginLeft:"15px"}}>
                                                                {this.state.c ? (<p>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </p>) : (
                                                                    <div>
                                                                        {this.state.realtimeusr.timeday?(
                                                                            <div style={{marginLeft:"15px"}}>
                                                                                <p>Weekly Time Total:  {this.state.realtimeusr.totalWeekTime.total}/{this.state.realtimeusr.min} Minutes  </p>
                                                                            </div>
                                                                        ):(<div></div>)}
                                                                    </div>

                                                                )
                                                                }
                                                            </div>



                                                            ) : (<div>


                                                            </div>)}


                                        </div>):(<div></div>)}
                                        
                                       





                                </div>
                    </div>
                    
                        
                            

                    
                    


                </div>
                    <div className="proStud5a ">
                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized fill2" style={{ height: "200px" }}>
                                <div className="fill2 " style={{ alignSelf: "flex-start" }}>
                                    <h2 className="centerized fill2">Stats</h2>
                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                    {!this.state.c || !this.state.realtimeusr.dayStreak || this.state.realtimeusr.starPoints || this.state.realtimeusr.wmin ?(<div ></div>):(<div style={{ marginTop:"20px"}}>No Results</div>) }
</div>
                                    <div className="homeworkScroll fill2 centerized">
                                        <div className="centerized columbized " style={{ marginTop: "25px", width: "90%", marginLeft: this.state.statsmargin }}>


                                        {this.state.realtimeusr.starPoints?(
                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <div style={{ width: "40%" }}> <b>Student Level:</b> </div>
                                    <div style={{ width: "40%" }} className="centerized ">  {this.state.realtimeusr.level}</div>


                                </div>
                                        ):(<div></div>)}
                                        {this.state.realtimeusr.wmin !== "" ?(

<div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
<div style={{ width: this.state.timepracmargin  }}><b>Time Practiced:</b></div>
<div style={{ width: this.state.timepracmarginr  }} className="centerized "> {this.state.realtimeusr.timeTotal} min</div>




</div>
                                        ):(<div></div>)}
                                        

                                           
                                        {this.state.c ? (
                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                            <div style={{ width: this.state.dayspracmargin  }}> <b>Practice Days:</b> </div>
                                        {this.state.realtimeusr.daysPracticed?(<div style={{ width: "40%" }} className="centerized ">{this.state.realtimeusr.daysPracticed}</div>):(<div style={{ width: "40%" }} className="centerized ">0</div>)}
                                            

                                        
                                        </div>


                                        ):(<div></div>)}
                                        {this.state.realtimeusr.dayStreak ?(
                                              <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                              <div style={{ width: "40%" }}> <b>Streak:</b> </div>
                                      <div style={{ width: "40%" }} className="centerized ">  x{this.state.realtimeusr.daystreak}</div>


                                  </div>
                                        ):(<div></div>)}
                                            


                                            {/*{this.state.realtimeusr.totalDays !== "" ? (
                                           <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                           <div style={{ width: this.state.pracgoalmargin }}> <b> Practice Goal:</b> </div>
                                           <div style={{ width: "40%" }} className="centerized ">  {this.state.realtimeusr.checked}/{this.state.realtimeusr.totalDays}</div>


                                       </div>

                                        
                                        


                                            ):(<div></div>)}*/}
                                            
                                        

                                            </div>
                                    </div>
                                </div>
                            </div>) : (<div></div>)}
                        </div>

                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized" style={{ height: "75%" }}>
                                <div style={{ alignSelf: "flex-start" }}>
                                    <h2 style={{ marginBottom: "20px" }} className="centerized">Accomplished Goals</h2>
                                    <div style={{height: this.state.aheight,}}>
                                    {this.state.realtimeusr.archive[0] ? (
                                        <div className="homeworkScroll ">
                                            {this.state.realtimeusr.archive.map((goal, index) =>
                                                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", }} >
                                                    <span><img alt = "leaf" src = {leaf} style={{ width: "22px", hieght: "22px", }}/></span>
                                                    <div key={index} onClick={this.showGoal.bind(this, goal, true)} className="huv  rowss" style={{width:"50%", color: "#696eb5", marginLeft:this.state.amarginLeft}}>{goal.mainGoal.title}</div><div>{goal.mainGoal.completed?(<div>{goal.mainGoal.completed}</div>):(<div style={{opacity:"0"}}>12/21/2021</div>)}</div>
                                                </div>

                                            )}</div>
                                    ) : (<div className="centerized">No Accomplished Goals Yet.</div>)}
                                    </div>

                                


                            </div>
                            </div>) : (<div></div>)}
                            
                        </div>
                        
                    </div>
                    
                   
                    
                    
                    
                   

                </div>

                </div>

        );
    }
}
/*
  <div className="proStud5ab " style={{ opacity: "0" }}>
                        <div className=" card-container5ab1 " >
                            {this.state.realtimeusr ? (<div className="centerized fill2" style={{ height: "200px" }}>
                                <div className="fill2" style={{ alignSelf: "flex-start" }}>
                                    <h2 className="centerized fill2">Stats</h2>
                                    <div className="homeworkScroll fill2">
                                        <div className="centerized columbized " style={{ marginTop: "25px", width: "75%" }}>


                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div>Week Streak</div>
                                                <div className="centerized " > 0</div>


                                            </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div>Time Practiced</div>
                                                <div className="centerized "> 2 hr 40 min</div>




                                            </div>

                                            <div className="centerized fill2" style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                                <div> Practice Days </div>
                                                <div className="centerized ">50</div>


                                            </div>
                                           
                                            

                                            


                                        </div>
                                    </div>
                                </div>
                            </div>) : (<div></div>)}
                        </div>

                       

                    </div>
 * */