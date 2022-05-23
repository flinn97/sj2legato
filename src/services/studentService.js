
class studentSevice {
/**
 * 
 * @param {*} goal 
 * @param {*} maingoals 
 * @param {*} mainGoal 
 * @param {*} add 
 * @param {*} del 
 * @returns new updated list of a students goals.
 */
updateAddGoals(goal, maingoals, mainGoal, myswitch, archive ) {
    
    let mainG = mainGoal;
    let currentmains= maingoals;
    let myarchive=archive;
    let i=this.compare(maingoals, mainG)
    let j= this.compare(mainG.mainGoal.goals, goal? goal: {id:1}, true)
    switch(myswitch){
        case "addmain":
            currentmains.push(mainG);
            break;
        case "addgoal":
            currentmains[i].mainGoal.goals.push(goal);
            break;
        case "delmain":
            currentmains.splice(i, 1);
            break;
        case "delgoal":
            currentmains[i].mainGoal.goals.splice(j, 1);
            break;
        case "updatemain":
            currentmains[i]= mainG;
            break;
        case "updategoal":
            currentmains[i].mainGoal.goals[j]= goal
            break;
        case "archivegoal":
            myarchive.push(mainG);
            currentmains.splice(i, 1);
            break;
        case "delarchivegoal":
            let a=this.compare(myarchive, mainG)
            myarchive.splice(a, 1);
            break;

    }
    return myswitch==="archivegoal"||myswitch==="delarchivegoal"? {currentmains:currentmains, archive: myarchive} :currentmains;
    }
    /**
     * 
     * @param {*} homework 
     * @param {*} homeworks 
     * @param {*} myswitch 
     * @returns updated homework array
     */
    updateAdddelhomework(homework, homeworks, myswitch ) {
        
        let myhomework = homework;
        let myhomeworks = homeworks;
        let i=this.compare(myhomeworks, myhomework, true)
        switch(myswitch){
            case "addhomework":
                myhomeworks.push(myhomework);
                break;
            case "delhomework":
                myhomeworks.splice(i, 1);
                break;
            case "updatehomework":
                myhomeworks[i]= homework;
                break;
        }
        return myhomeworks
    }
    updateAddDelnotes(note, notes, myswitch, ){
        
        let mynote = note;
        let mynotes = notes;
        let i=this.compare(mynotes, mynote, true)
        switch(myswitch){
            case "addnote":
                mynotes.push(mynote);
                break;
            case "delnote":
                mynotes.splice(i, 1);
                break;
            case "updatenote":
                mynotes[i]= mynote;
                break;
        }
        return mynotes
    }
    /**
     * 
     * @param {*} compare 
     * @param {*} compare1 
     * @param {*} condition 
     * @returns i for the compaired two values
     */
    compare(compare, compare1, condition){
        
        let value;
        for(let i=0; i<compare.length; i++){
            if(!condition){
            if((compare1._id? compare[i]._id=== compare1._id : compare[i].mainGoal.id=== compare1.mainGoal.id) ){
                    value= i
                    break;
            }
            }
            else if(condition){
                if(compare1._id? compare[i]._id=== compare1._id : compare[i].id=== compare1.id){
                value= i
                break;
                }
            }
            else{
                value= false
            }
        }
        return value
    }

 
}

export default new studentSevice();