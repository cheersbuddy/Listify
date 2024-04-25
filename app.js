const express = require("express");
const env= require("dotenv");
const bodyParser = require("body-parser");

const taskRoute = require("./routes/taskRoutes")

const app = express();

env.config();

app.use(bodyParser.json());

app.use("/", taskRoute.route);

let port = process.env.PORT; 

app.listen(port, ()=>{
    console.log("Server is running on" ,{port});
});