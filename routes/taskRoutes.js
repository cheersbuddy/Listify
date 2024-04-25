const express = require("express");
const route = express.Router();
// rest api - base standard for end point creation (this method is like get or post we dont have to assign again in end points defines it ) so best practice to name endpoints

const taskController = require("../controller/taskControllers");

route.get("/tasks",taskController.getTasks);
route.post("/task",taskController.postTask);
route.put("/task/:id",taskController.updateTasks);
// route.delete("/task/:id",taskController.deleteTasks);

module.exports = {
    route,
}