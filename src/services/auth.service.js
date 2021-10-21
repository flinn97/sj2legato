import axios from "axios";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
//const API_URL = "http://try.flinnapps.com/api/auth/";
const API_URL = "http://try.flinnapps.com/api/auth/";
//be sure to upload axios. This is my controller for everything that I do for the backend.
class AuthService {
    login(email, password) {
        //login with email and password. set jwt sign in localStorage.


        return axios
            .post(API_URL + "signin", {
                email,
                password
            })
            .then(response => {
                console.log(response.data);
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                //console.log(response.data);
                return response.data;
            });

    }
    setPastFirstTime(id, studentid, password) {
        console.log(studentid);
        //for first time students changing password.
        return axios.post(API_URL + "past", {
            id,
            studentid,
            password,
        });
    }

    logout() {
        //delete jwt sign.
        localStorage.removeItem("user");
    }
    syncedchecking(student, day, checked, checkedd, daysPracticed) {
        console.log("then here");
        return axios
            .post(API_URL + "syncedchecking", {
                student, day, checked, checkedd, daysPracticed
            });
    }

    addStudent(user, first, last, email, double, separate, time, checkbox, day) {
        //add student to the database using axios.
        //console.log(user);
        //console.log(email, password);

        return axios
            .post(API_URL + "student", {
                user, first, last, email, double, separate, time, checkbox, day
            });

    }
    deleteStudent(student, email) {
        console.log(student);
        return axios
            .post(API_URL + "deleteStudent", {
                student, email,
            })






    }
    changeweek(id, time) {
        return axios
            .post(API_URL + "changeweek", {
                id, time,


            })
    }

    editAlltheHomeworkdiaClose(id, yesnoCheckboxsync, yesnoStreak, yesnocheckboxes, yesnoWeek, yesnoWeektext, yesnoDay, yesnoDaytext) {
        return axios
            .post(API_URL + "editAlltheHomeworkdiaClose", {
                id, yesnoCheckboxsync, yesnoStreak, yesnocheckboxes, yesnoWeek, yesnoWeektext, yesnoDay, yesnoDaytext


            })
    }
    changetimes(id, day, time) {
        return axios
            .post(API_URL + "changetimes", {
                id, day, time,
                

            })
    }
    editAlltheHomework(id, student,) {
        return axios
            .post(API_URL + "deletenote", {
                id, student,
                

            })
    }
    deletenote(student, id) {
        return axios
            .post(API_URL + "deletenote", {
                student,
                id,

            })
    }
    deleteNotes(id, notes) {
        return axios
            .post(API_URL + "deleteNotes", {
                id,
                notes

            })
    }
    changenote(id, note,) {
        return axios
            .post(API_URL + "changenote", {
                id,
                note,

            })
    }
    timeSync(id, timeSync, min, daybiao, dmin) {
        return axios
            .post(API_URL + "timeSync", {
                id,
                timeSync,
                min,
                daybiao,
                dmin

            })
    }
    timeTotal(id, total) {
        return axios
            .post(API_URL + "timeTotal", {
                id,
                total

            })
    }
    dayTotal(id, total) {
        return axios
            .post(API_URL + "dayTotal", {
                id,
                total

            })
    }
    syncCheckboxes(id, checkbox) {
        return axios
            .post(API_URL + "syncCheckboxes", {
                id,
                checkbox,

            })
    }

    changeNotes(id, note, notes) {
        return axios
            .post(API_URL + "changeNotes", {
                id,
                note,
                notes

            })
    }
    deletefromarchive(id) {
        return axios
            .post(API_URL + "deletefromarchive", {
                id,

            })
    }
    addNote(id, description, date) {
        console.log(id);
        return axios
            .post(API_URL + "addNote", {
                id,
                description,
                date,

            })
    }
    checkboxes(id, checkbox) {
        return axios
            .post(API_URL + "checkboxes", {
                id,
                checkbox,

            })
    }
    getAccounts(id,) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "getAccounts", {
                id,

            })





    }
    hwchecked(id, homework, practice) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "hwchecked", {
                id,
                homework,
                practice
            })





    }
    clearTime(id, ) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "clearTime", {
                id,
                

            })

    }

    clearChecks(id, homework) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "clearChecks", {
                id,
                homework

            })

    }
    cleargoals(id, homework) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "cleargoals", {
                id,

            })

    }

    clearhw(id, homework) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "clearhw", {
                id,

            })

    }
    cleararchive(id, homework) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "cleararchive", {
                id,

            })

    }

    getStudents(user, studentList) {
        //get all students from the database for that teacher.
        //console.log(user);

        return axios
            .post(API_URL + "getStudents", {
                user,
                studentList,
            })





    }
    /*
     *  if (this.state.yesnoCheckboxes) {
            if (this.state.syncCheckbox) {
                AuthService.syncCheckboxes(this.props.state.realtimestudent._id, this.state.checkbox);

            }
            else {
                AuthService.checkboxes(this.props.state.realtimestudent._id, this.state.checkbox);
            }
        }
        if (this.state.yesnoTime) {

            AuthService.timeSync(this.props.state.realtimestudent._id, this.state.timeSync, this.state.weeklytimebiao, this.state.dailytimebiao, this.state.dmin);



        }
        if (this.state.timebool) {
            AuthService.timeTotal(this.props.state.realtimestudent._id, "0")

        }
        if (this.state.daysbool) {
            AuthService.dayTotal(this.props.state.realtimestudent._id, "0")

        }
        if (this.state.timeframePractice) {
            AuthService.updateSetDays(this.props.state.realtimestudent._id, this.state.days, this.state.smonths, this.state.emonths, this.state.timeframePracticebiao, this.state.min, this.state.tsmonths, this.state.temonths);

        }
    }
     * 
//    oneCallThatsAll(id, checkbox, /*synccheck*/// timeSync, weeklytimebiao, dailytimebiao, dmin /*yesnoTme*/) {
   //     return axios.post(API_URL + "oneCallThatsAll", {
 //           id,
  //          main,
   //         goals,
  //      })
   // }
//} 
    AddGoals(id, main, goals) {
        return axios.post(API_URL + "AddGoals", {
            id,
            main,
            goals,
        })
    }
    AddHomeworks(id, homeworks) {
        return axios.post(API_URL + "AddHomeworks", {
            id,
            homeworks,
        })
    }
    doneUpdatingnewStudent(id, done) {
        return axios.post(API_URL + "doneUpdatingnewStudent", {
            id,
            done,
        })
    }


   
AddHomework(id, homework, type, hwchecked, description, hwcheckboxes, date, hwresearch, day, hwsynccheck, hwdmin, HWweeklytimebiao, hwtimesync, hwlink, struggles, hwQuestions) {
        //add homework for student. Homework appears on students page.
        //console.log(name, email, password);
        //binding parameters.
        return axios.post(API_URL + "homework", {
            id,
            homework,
            type,
            hwchecked,
            description,
            hwcheckboxes,
            date,
            hwresearch,
            day,
            hwsynccheck, hwdmin, HWweeklytimebiao, hwtimesync, hwlink, struggles, hwQuestions
        });
        //console.log(response.data);


        
    }
    AddGoal(id, mainGoal,goal, description, date, ) {
        //add homework for student. Homework appears on students page.
        //console.log(name, email, password);
        //binding parameters.
        return axios.post(API_URL + "goals", {
            id,
            mainGoal,
            goal,
           
            description,
           
            date,
           
        });
        //console.log(response.data);


        
    }
    starPoints(id, manual) {
        return axios.post(API_URL + "starPoints", {
            id,

            manual,

        });
    }
    updateSetDays(id, totalDays, monthStart, monthEnd, timebiao, min, tsmonths, temonths) {
        return axios.post(API_URL + "totalDays", {
            id,

            totalDays,
            monthStart,
            monthEnd,
            timebiao,
            min,
            tsmonths,
            temonths

        });
    }
    setDayStreak(id, streak) {
        return axios.post(API_URL + "setDayStreak", {
            id,

            streak,
           

        });
    }
    setWeekStreak(id, streak) {
        return axios.post(API_URL + "setWeekStreak", {
            id,

            streak

        });
    }
    savegoal(id, goal, main) {
        return axios.post(API_URL + "archivegoal", {
            id,
            
            goal,
            main,
            
        });
    }
    daysPracticed(id, daysPracticed,) {
        return axios.post(API_URL + "daysPracticed", {
            id,

            daysPracticed,

        });
    }
   
    deletegoal(id, goal, main) {
        return axios.post(API_URL + "deletegoal", {
            id,

            goal,
            main,

        });
    }
    deleteHomework(id, homework) {
        return axios.post(API_URL + "deleteHomework", {
            id,

            homework,


        });
    }
    goalStatusChange(id, checked, goal, main, complete) {
        //add homework for student. Homework appears on students page.
        //console.log(name, email, password);
        //binding parameters.
        return axios.post(API_URL + "goalStatusChange", {
            id,
            checked,
            goal,
            main,
            complete

           
        });
        //console.log(response.data);



    }
    changeactivestudent(id, id2,) {
        //add homework for student. Homework appears on students page.
        //console.log(name, email, password);
        //binding parameters.
        return axios.post(API_URL + "changeactivestudent", {
            id,
            id2,
           


        });
        //console.log(response.data);



    }
    async register(firstname, lastname, email, password) {
        //Teacher login. Name email password. Probably going to separate to first name and last name.
        //console.log(name, email, password);
        
        return await axios.post(API_URL + "signup", {
            firstname,
            lastname,
            email,
            password
        });
        
            //console.log(response.data);
           
            
        
    }
    getCurrentUser(cookie) {
        //gets whatever jwt was saved in local service. 
        if (cookie) {
            if (JSON.parse(localStorage.getItem('user'))) {
                return JSON.parse(localStorage.getItem('user'));
            }
            else {
                const current = {
                    pastFirstTime: false
                }
                return current;
            }

        }
        else {
            return JSON.parse(localStorage.getItem('user'));
        }
    }

    

    changeuserinfo(id, accountid, firstname, lastname, about, email, phone) {
        console.log(accountid);

        return axios.post(API_URL + "changeuserinfo", {
            id,
            accountid,
            firstname,
            lastname,
            about,
            email,
            phone
        })

    }
    changeuserinfoA(id, firstname, lastname, email, password) {

        return axios.post(API_URL + "changeuserinfoA", {
            id,
            firstname,
            lastname,
            email,
            password
        })

    }
    changeAccountInfo(id, email, password) {
        return axios.post(API_URL + "changeAccountInfo", {
            id,

            email,
            password
        })
    }
    changeStudentinfo(id, accountid, firstname, lastname, about, email, phone, time, checkbox,day) {
        console.log(id);

        return axios.post(API_URL + "changeStudentinfo", {
            
            id,
            accountid,
            firstname,
            lastname,
           about,
            email,
            phone,
            time,
            checkbox,
            day,
            
           
        })

    }
    
    admindelete(id) {
        return axios.post(API_URL + "admindelete", {

            id,

        })
    }
    changeStudentinfoA(id, firstname, lastname, email,  checkbox,  password) {

        return axios.post(API_URL + "changeStudentinfoA", {

            id,
            
            firstname,
            lastname,
            
            email,
           
            
            checkbox,
            
            password
        })

    }
    uploadPhoto(photo, id, background, role) {
        console.log(background);
        
        return axios.post('http://localhost:8080/api/auth/postpic', photo).then(response => {
            console.log(response.data);
            const picpath = response.data.path;
            
            return axios.post("http://localhost:8080/api/auth/profilepic", {
                picpath,
                id,
                background,
                role
            }).then(response => {
                console.log(response.data)
            })
        })

        }

    checked(id, checked,) {
        console.log(id);

        return axios.post(API_URL + "checked", {
            id,
            checked,

           

        })

    }
    getAllaccounts(email, password) {
        return axios.post(API_URL + "getAllaccounts", {
            email,
            password
        })
    }
    getAllstudents(email, password) {
        return axios.post(API_URL + "getAllstudents", {
            email,
            password
        })
    }
    getAllusers(email, password) {
        return axios.post(API_URL + "getAllusers", {
            email,
            password
        })
    }
}



export default new AuthService();