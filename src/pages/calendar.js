import React, { Component } from "react";
import "./calendar.css";
import AuthService from "../services/auth.service";
import Short from "../components/short.js";
import Splashscreen  from "../components/splashscreen.js";

class Calendar extends Component {
    constructor(props) {
        super(props);
      
        this.handleTime = this.handleTime.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.Splashscreen = this.Splashscreen.bind(this);

        this.state = {
            appointments: [],
            currentUser: AuthService.getCurrentUser(),
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: [],
            marginTop: "100px",
            tooSmall:false,
            splashscreen:true,

        }

    };
    Splashscreen(){
        this.setState({splashscreen:false})
    }
    
    updateWindowDimensions() {
        if(parseInt(window.innerWidth) <= 550){
        this.setState({  
            tooSmall:true,
            marginTop: "30px"});
        }
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
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
/*
    async componentWillMount() {
        if (this.state.currentUser) {


            if (this.state.currentUser.role !== "teacher") {
                this.props.history.push("/");
                window.location.reload();
            }
            else {
                await AuthService.getStudents(this.state.currentUser.account._id).then(response => {
                    this.setState({

                        appointments: response.data,
                    });





                });

                for (let i = 0; i < this.state.appointments.length; i++) {

                    if (this.state.appointments[i].day === "Monday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.monday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Tuesday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.tuesday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Wednesday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.wednesday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Thursday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.thursday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Friday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.friday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Saturday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.saturday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Sunday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.sunday.push(newAppointment);
                    }
                }
            }
        }
        else {
           
                this.props.history.push("/login");
                window.location.reload();
            
        }
    } */
    
     async componentDidMount() {
        if (this.state.currentUser) {


            if (this.state.currentUser.role !== "teacher") {
                this.props.history.push("/");
                window.location.reload();
            }
            else {
                await AuthService.getStudents(this.state.currentUser.account._id).then(response => {
                    this.setState({

                        appointments: response.data,
                    });





                });

                for (let i = 0; i < this.state.appointments.length; i++) {

                    if (this.state.appointments[i].day === "Monday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.monday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Tuesday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.tuesday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Wednesday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.wednesday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Thursday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.thursday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Friday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.friday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Saturday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.saturday.push(newAppointment);
                    }
                    if (this.state.appointments[i].day === "Sunday") {
                        let newAppointment = this.state.appointments[i];
                        let time = this.handleTime(newAppointment.scheduling);
                        newAppointment.scheduling = time;
                        await this.state.sunday.push(newAppointment);
                    }
                }
            }
        }
        else {
           
                this.props.history.push("/login");
                window.location.reload();
            
        }
        window.addEventListener("resize", this.updateWindowDimensions());
        if(parseInt(window.innerWidth) <= 550){
        this.setState({  
            tooSmall:true,
            marginTop: "30px"});
            
     }

         await AuthService.getStudents(this.state.currentUser.account._id).then(response => {
             this.setState({

                 appointments: response.data,
             });


             
         });
      
     }
    
    handleTime(apptTime) {
        var ar = "";
        let ampm = false;
        for (let i = 0, j = i + 1; i < apptTime.length; i++, j++) {
            
            if (i === 0) {
                console.log(i);

                if (apptTime.length === 4) {

                    if (apptTime[0] === "1") {

                        if (apptTime[1] === "0") {
                            ar = ar + "10";
                            ampm = true;

                        }
                        if (apptTime[1] === "1") {
                            ar = ar + "11";
                            ampm = true;
                        }
                        if (apptTime[1] === "2") {
                            ar = ar + "12";
                        }
                        if (apptTime[1] === "3") {
                            ar = ar + "1";
                        }
                        if (apptTime[1] === "4") {
                            ar = ar + "2";
                        }
                        if (apptTime[1] === "5") {
                            ar = ar + "3";
                        }
                        if (apptTime[1] === "6") {
                            ar = ar + "4";
                        }
                        if (apptTime[1] === "7") {
                            ar = ar + "5";


                        }
                        if (apptTime[1] === "8") {
                            ar = ar + "6";
                        }
                        if (apptTime[1] === "9") {
                            ar = ar + "7";
                        }

                    } else if (apptTime[0] === "2") {
                        if (apptTime[1] === "0") {
                            ar = ar + "8";
                        }
                        if (apptTime[1] === "1") {
                            ar = ar + "9";
                        }
                        if (apptTime[1] === "2") {
                            ar = ar + "10";
                        }
                        if (apptTime[1] === "3") {
                            ar = ar + "11";
                        }
                    }
                    else if (apptTime[0] === "0") {
                        if (apptTime[1] === "0") {
                            ar = ar + "12";
                            ampm = true;
                        }
                    }
                }
                else {
                    console.log(apptTime);
                    ar = ar + apptTime[i];

                }

            }



            else {
                if (apptTime.length === 3) {
                    console.log(i);
                    if (i === 1) {
                        ar = ar + ":";

                    }
                    console.log(apptTime);
                    ar = ar + apptTime[i];

                    if (i === 2) {
                        ar = ar + " AM";
                    }


                }
                else {
                    if (apptTime[j]) {
                        if (i === 1) {
                            ar = ar + ":";
                        }

                        ar = ar + apptTime[j];
                        if (i === 2) {
                            if (ampm) {
                                ar = ar + " AM";
                            }
                            else { ar = ar + " PM"; }

                        }

                    }
                }


            }

            console.log(ar);

        }
        return ar;
    }
    
    
   
    render() {


        return (

            <div className="z ">
                {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}

                <div className="flex-box " style={{ marginTop: this.state.marginTop}} >
                <div className="cal-day" style={{background:"#e3e3e3"}}>
                    <div className="cal-day-bottom" >
                        <h2>Sun</h2>
                        </div>
                    <div  >
                        {
            this.state.sunday.map((appointment, index) =>
            <div>
            {this.state.tooSmall?(

                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}> </h7></div>) : (<h7>{appointment.firstName}  </h7>)}

                <h7 className="fixrows">{appointment.firstName} {appointment.scheduling}</h7>
            </div>
            ):(

                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}

                <h5 className="fixrows">{appointment.firstName} {appointment.scheduling}</h5>
            </div>
            )}

               
                </div>)}
            
                        </div>
                </div>
                <div className="cal-day">
                    <div className="cal-day-bottom">
                            <h2>Mon</h2>
                        </div>
                    <div>
                        {
                            this.state.monday.map((appointment, index) =>
                            <div>
                                {this.state.tooSmall?(

                                    <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}></h7></div>) : (<h7>{appointment.firstName}  </h7>)}

                                </div>
                                ):(

                                    <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling} </h5>)}

                                </div>
                                )}
                                </div>
                            )}
                            
                        </div>
                </div>
                <div className="cal-day" style={{background:"#e3e3e3"}}>
                    <div className="cal-day-bottom" >
                            <h2>Tues</h2>
                        </div>
                    <div>
                        {
                            this.state.tuesday.map((appointment, index) =>
                            <div>
                            {this.state.tooSmall?(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}></h7></div>) : (<h7>{appointment.firstName} </h7>)}

                            </div>
                            ):(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}

                            </div>
                            )}

                               
</div>)}
                        </div>
                </div>
                <div className="cal-day">
                    <div className="cal-day-bottom">
                            <h2>Wed</h2>
                        </div>
                    <div>
                        {
                            this.state.wednesday.map((appointment, index) =>
                            <div>
                            {this.state.tooSmall?(
                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{marginLeft: "2px"}}></h7></div>) : (<h7>{appointment.firstName} </h7>)}
                                
                            </div>
                            ):(
                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{marginLeft: "2px"}}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}
                                
                            </div>
                            )}
                               
                               </div>)}
                        </div>
                </div>
                <div className="cal-day" style={{background:"#e3e3e3"}}>
                    <div className="cal-day-bottom" >
                            <h2>Thurs</h2>
                        </div>
                    <div>
                        {
                            this.state.thursday.map((appointment, index) =>
                            <div>
                            {this.state.tooSmall?(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}></h7></div>) : (<h7>{appointment.firstName} </h7>)}

                                </div>
                            ):(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}

                                </div>
                            )}

                                
</div>)}
                        </div>
                </div>
                <div className="cal-day">
                    <div className="cal-day-bottom">
                            <h2>Fri</h2>
                        </div>
                    <div>
                        {
                            this.state.friday.map((appointment, index) =><div>
                            {this.state.tooSmall?(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)} >
                                    {appointment.firstName.length > 9 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}></h7></div>) : (<h7>{appointment.firstName} </h7>)}

                                </div>
                            ):(

                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)} >
                                    {appointment.firstName.length > 9 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}

                                </div>
                            )}

                                
</div>)}
                        </div>
                </div>
                <div className="cal-day" style={{background:"#e3e3e3"}}>
                    <div className="cal-day-bottom" >
                            <h2>Sat</h2>
                        </div>
                    <div>
                        {
                            this.state.saturday.map((appointment, index) =><div>
                            {this.state.tooSmall?(
                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h7 style={{ marginLeft: "2px" }}></h7></div>) : (<h7>{appointment.firstName} </h7>)}

                                </div>
                            ):(
                                <div className="huv rowss" key={index} onClick={this.profile.bind(this, appointment)}>
                                    {appointment.firstName.length > 10 ? (<div className="checkboxstuff2"><Short word={appointment.firstName} wordtype="procal1" /><h5 style={{ marginLeft: "2px" }}>{appointment.scheduling}</h5></div>) : (<h5>{appointment.firstName} {appointment.scheduling}</h5>)}

                                </div>
                            )}

                                
</div>)}
                        </div>
                </div>



                </div>
                </div>

        );
    }
}
export default Calendar;