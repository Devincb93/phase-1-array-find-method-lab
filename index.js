// code your solution here
function superbowlWin(records) {
    for (const obj of records){
        if(obj.result === "W"){
            return obj.year
        }
        }
    }
