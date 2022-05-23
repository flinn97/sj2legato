
class calendarService {
   /**
    * 
    * @param {*} students 
    * @returns sorted schedule of students
    */
getOrganizedCalendar(students) {
    let myob={
        Monday: [],
        Tuesday: [],
        Wednesday:[],
        Thursday:[],
        Friday:[],
        Saturday:[],
        Sunday: [],
    }
    for(let i =0; i<students?.length; i++){ 
        if(students[i].day){
            
            let ar =myob[students[i].day]

            
            let schedule = students[i].scheduling[3]===" "? students[i].scheduling[0]+":"+students[i].scheduling.substr(1): students[i].scheduling.substr(0, 1)+":"+students[i].scheduling.substr(2)
    ar.push({firstName: students[i].firstName,firstName: students[i].firstName,scheduling: schedule, schedule: ""})
    
    ar.sort(function (a, b) {
        
        a.schedule = a.scheduling[4]===" "? parseInt((a.scheduling[0]+a.scheduling.substr(2, 3))): parseInt((a.scheduling.substr(0, 1)+a.scheduling.substr(3, 4)))
        b.schedule = b.scheduling[4]===" "? parseInt((b.scheduling[0]+b.scheduling.substr(2, 3))): parseInt((b.scheduling.substr(0, 1)+b.scheduling.subsstr(3, 4)))
        return a.schedule - b.schedule;
    });
    ar.sort(function (a, b) {
        
        a.schedule = a.scheduling.endsWith("am")? 1: 0
        b.schedule = b.scheduling.endsWith("am")? 1: 0
        return b.schedule - a.schedule;
    });
    myob[students[i].day]=ar
        }
}
return myob
}
}

export default new calendarService();