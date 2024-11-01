/*
Task 1: Task Manager Function
Create a function manageTasks that organizes a list of tasks. This function should:
Accept an array of task objects, each having a property status indicating “completed” or “pending”.
Return an object with two properties: pendingTasks and completedTasks, each containing an array of tasks categorized by their status.
*/

const studentTask=[
    {"nameofTask":"send cv to Linus",status:true},
    {"nameofTask":"repeat Homework",status:true},
    {"nameofTask":"send email to Hanny",status:false},
    {"nameofTask":"create to do list",status:false},
    {"nameofTask":"obtain Internship from Bundersamt",status:true}
];

let completed=[];

let pending=[];


function manageTasks(studentTask){

    studentTask.forEach(aa=>{
    
        if(aa.status===true){

            completed.push(aa);
        }

        else{

            pending.push(aa);
        }

    })
    return {

        completed,
        pending

           }
}

console.log(manageTasks(studentTask));