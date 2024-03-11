// setup express server and connect to mongoDB
const express = require ("express")
const mongoose = require("mongoose")
const {checkSchema,validationResult}=require("express-validator")
const cors = require("cors")
const dbConfigure = require("./config/db")
const taskCtrl = require('./app/controllers/task-controller')
const taskValidationSchema = require('./app/validations/task-validator')

const port = 3002
const app=express()

dbConfigure()
//middlewares
app.use(express.json())
app.use(cors())

//defining schema and model



app.post("/api/tasks",checkSchema(taskValidationSchema),taskCtrl.createTask)
app.get("/api/tasks",taskCtrl.listTasks)
app.get("/api/tasks/:id",taskCtrl.getOneTask)
app.put("/api/tasks/:id",checkSchema(taskValidationSchema),taskCtrl.updateTask)
app.put("/api/tasks/completed/:id",taskCtrl.statusCompleted)
app.put("/api/tasks/pending/:id",taskCtrl.statusPending)
app.delete("/api/tasks/:id",taskCtrl.deleteTask)


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})