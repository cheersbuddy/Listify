const fs = require("fs");
const filename = "data.json";

const getTasks=(req, res) =>{

    let tasksList = [];
    tasksList = JSON.parse()
    // console.log("this is from get method");
    // res.send("this is from get method");
    // console.log("hi");
}

const postTask = (req,res)=>{
    console.log(req.body)
    let tasks = [];
    tasks = JSON.parse(fs.readFileSync(filename));
    tasks.push(req.body);

    fs.writeFileSync(filename,JSON.stringify(tasks),(err)=>{
        console.log(err);
    })

    res.json({

        details: tasks,
        message:"task added"

    });
}

const updateTasks= ((req,res)=>{
   let tasks = [];
   tasks = JSON.parse(fs.readFileSync(filename));
   let temp;
  
   tasks.map((data,index)=>{
      if(data.taskId === req.params.id){
        temp = index;
       }
    });
    console.log("Request body "+req.body);
    console.log(tasks[temp]);
    tasks[temp] = req.body;
    console.log("Updated " + tasks);

    fs.writeFileSync(filename,JSON.stringify(tasks),(err)=>{
     console.log(err);
    });

   res.json({
    details:tasks,
    message:"the task has been updated"
   });
})

// const deleteTasks= ((req,res)=>{
//     let tasks = [];
//     tasks = JSON.parse(fs.readFileSync(filename));
//     let temp
//     tasks.map((data,index)=>{
//        if(Data.taskId === req.params.id){
//          temp = index;
//         }
//      })


//     })
module.exports =
{
    getTasks,
    postTask,
    updateTasks,
    // deleteTasks
}