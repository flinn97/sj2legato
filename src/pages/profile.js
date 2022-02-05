import React, { Component } from "react";
import AuthService from "../services/auth.service";
import StudentList from '../components/studentList.js';
import AdddStudent from '../components/dialoghelp.js';
import ExistingEmail from '../components/existingEmail.js';
import DeleteStudent from '../components/deletestudent.js';
import Splashscreen  from "../components/splashscreen.js";


//this is the teachers profile page. A lot of react stuff going on here using state and pass along functions and such. I'll try to explain.

export default class Profile extends Component {
    //we set state and all the needed things here for other components. we bind all the functions.
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.update = this.update.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.doubleAccount = this.doubleAccount.bind(this);
        this.separate = this.separate.bind(this);
        this.windowreload = this.windowreload.bind(this);
        this.deleteStudent0 = this.deleteStudent0.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.selectDay = this.selectDay.bind(this);
        this.changeTime = this.changeTime.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.Splashscreen = this.Splashscreen.bind(this);
        this.splashscreen = this.splashscreen.bind(this);

        
        
        this.deleted = this.deleted.bind(this);




        this.state = {

            currentUser: AuthService.getCurrentUser(),
            currentStudents: [],
            first: "",
            last: "",
            email: "",
            updated: false,
            doubleAccount: false,
            existing_email: false,
            separate: false,
            time: "",
            checkbox: "",
            day: "",
            studentList: true,
            deleteStudent: false,
            delStudent: "",
            message: "",
            messag: false,
            tooSmall: false,
            splashscreen: true,
        };

    }
    
    //handles any change for state
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    selectDay(day) {
        this.setState({
            day: day
        })
    }
    changeTime(time) {
        this.setState({
            time: time
        })
    }
    //When a new student is added to the teachers account this function collects all the students and spits them into state.
    update() {
        //console.log("igothere");
        if (this.state.updated) {
            AuthService.getStudents(this.state.currentUser.account._id).then(response => {
                this.setState({
                    currentStudents: response.data,
                });
            });
            this.setState({
                updated: false,
            })
        }
    }

    deleted(e) {
        
        AuthService.deleteStudent(this.state.delStudent._id, this.state.delStudent.email);
        this.splashscreen();
    }
    updateWindowDimensions() {
        if(parseInt(window.innerWidth) <= 600)
        this.setState({ tooSmall: true });
     }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }
    async Splashscreen(){
        this.setState({
            splashscreen:false
        })
        
        

        

    }
    async splashscreen(){
        this.setState({
            splashscreen:!this.state.splashscreen
        })
        
        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(600)
            window.location.reload();

        

    }
    //get user if it exists from the jwt.sign for browser history. I don't use cookies for this app.

    //this will help populate screen with all the students in the database for the teacher at mount time.
    componentDidMount() {
        


        window.addEventListener("resize", this.updateWindowDimensions());

        if (this.state.currentUser) {



            if (this.state.currentUser.role !== "teacher") {
                
                this.props.history.push("/");
                window.location.reload();

            }
            else {
                console.log(this.state.currentUser.account._id);
                AuthService.getStudents(this.state.currentUser.account._id, this.state.studentList).then(response => {
                    console.log(response);
                    this.setState({

                        currentStudents: response.data,
                    });
                    

                });
                //console.log(this.state.currentstudents);
            }
        }
        else {
            this.props.history.push("/login");
            window.location.reload();

        }
        
    }
    windowreload() {
        window.location.reload();
    }
    //this function will use controller Authservice to add a student with given material in state. Then uses components to reload a view of all the students.
    async addStudent(e) {
        e.preventDefault();
        
        if (!this.state.first || !this.state.last || !this.state.email) {
            this.setState({
                message: "Please make sure to include forms with a star",
                messag: true,

            })
        }
        else {
            await this.setState({
                updated: true,
            });
            AuthService.addStudent(
                this.state.currentUser,
                this.state.first,
                this.state.last,
                this.state.email,
                this.state.doubleAccount,
                this.state.separate,
                this.state.time,
                this.state.checkbox,
                this.state.day,


            ).then(response => {
                if (response.data.existing_email) {
                    this.setState({
                        existing_email: response.data.existing_email,
                    })
                }
                else {
                        this.profile(response.data);
                      
                    this.update();
                }
            });

        }
    }
            //allows me to close the popup.
    async handleClose(e){
        await this.setState({
            existing_email: false,
        })
    }
    async deleteStudent0(student) {
        await this.setState({
            deleteStudent: true,
            delStudent: student
        })

    }
    async deleteStudent() {
        await this.setState({
            deleteStudent: false,
        })

    }
    //tells the backend to create another student in the same account.
    async doubleAccount(e) {
        await this.setState({
            doubleAccount: true,

        });
        AuthService.addStudent(
            this.state.currentUser,
            this.state.first,
            this.state.last,
            this.state.email,
            this.state.doubleAccount,
            this.state.separate,
            this.state.time,
            this.state.checkbox,
            this.state.day,

        ).then(response => {
            window.location.reload();
        })

        //window.location.reload();
        this.update();

        
    }
    
    //tells the backend to keep students with the same email as seperate accounts.
    async separate(e) {
        await this.setState({
            separate: true,

        });

        AuthService.addStudent(
            this.state.currentUser,
            this.state.first,
            this.state.last,
            this.state.email,
            this.state.doubleAccount,
            this.state.separate,
            this.state.time,
            this.state.checkbox,
            this.state.day,

        ).then(response => {
            window.location.reload();
        })
       
        this.update();


    }
    profile(student) {

        this.props.history.push({
            pathname: "/student",
            state: { detail: student }
        });

    }
   
    //I'm going to render StudentList for the list of students and the line after that only renders as a popup for when a student is added with the same email as another student.
    //I'm passing handleclose doubleAccount and separate to the next component Existing Email.
    render() {

        const { history } = this.props;
        return (
            <div className="  fill1" >
                
            {
                this.state.currentUser ? (
                    
                        <div className=" container example fill1" style={{
                        zIndex: "1",
                        padding:"0px",
                        
                        }}>
                            {this.state.splashscreen && (<Splashscreen closesplash={this.Splashscreen}/>)}
                           
                            {this.state.currentStudents.length === 0?(
                             <div style={{height:"200px", marginTop:"250px"}}>
                            <div className="card-container5ab centerized" style={{display:"flex", flexDirection:"column", }}>
                            You have no students currently. 

                            <AdddStudent addStudentButton={this.addStudent} handleChange={this.handleChange} message={this.state.message} messag={this.state.messag} selectDay={this.selectDay} changeTime={this.changeTime}/>


                            </div>
                            </div>):(
                                <div>
                                <div className="forfiles fill2" style={{width:"76%", marginTop:"20px",}}>
                                    {this.state.tooSmall?(<h1  style={{margin: "0 auto", marginTop:"5px", fontFamily:"Lora" }}>STUDENTS </h1>):(<h2 style={{marginTop:"5px", fontFamily:"Lora" }}className="">STUDENTS: </h2>)}

                                    {this.state.tooSmall?(<div></div>):(<AdddStudent addStudentButton={this.addStudent} handleChange={this.handleChange} message={this.state.message} messag={this.state.messag} selectDay={this.selectDay} changeTime={this.changeTime}/>)}
                                
                        </div>
                        {this.state.tooSmall?(<div  style={{ margin: "0 auto", marginTop:"7px", width:"100%", display:"flex", flexDirection:"row", justifyContent:"center"}}><AdddStudent addStudentButton={this.addStudent} handleChange={this.handleChange} message={this.state.message} messag={this.state.messag} selectDay={this.selectDay} changeTime={this.changeTime}/></div>):(<div></div>)}

                        </div>
                            )}
                            
                        {this.state.existing_email && (<ExistingEmail handleClose={this.handleClose} doubleAccount={this.doubleAccount} separate={this.separate} />)}
                        {this.state.deleteStudent && (<DeleteStudent handleClose={this.deleteStudent} delete={this.deleted} />)}

                        <StudentList role={this.state.currentUser.role} students={this.state.currentStudents} history={history} deleted={this.deleteStudent0} />

                        <div style={{width:"200px", height:"500px", opacity:"0"}}>Spacer</div>


                    </div>
                ) : (<div></div>)
            }
            </div>
                
    

             
                
            
        );
    }
}