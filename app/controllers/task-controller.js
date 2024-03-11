const Task = require('../models/task-model')
const {validationResult}= require('express-validator')
const taskCtrl = {}

taskCtrl.createTask = async (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const body =req.body
    try{
        const task = new Task(body)
        await task.save()
        res.json(task)
    }catch(err){
        res.json(err)
    }    
}

taskCtrl.listTasks = async (req,res)=>{
    try{
        const tasks= await Task.find()
        res.json(tasks)
    }catch(err){
        res.json(err)
    }   
}

taskCtrl.getOneTask = async(req,res)=>{
    const id= req.params.id
    try{
        const task = await Task.findById(id)
        res.json(task)
    }catch(err){
        res.json(err)
    }
}
taskCtrl.updateTask = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    try{
        const body = req.body
        const task = await Task.findByIdAndUpdate(id , body, {new : true})
        res.json(task)
    }catch(err){
        res.json(err)
    }
}
taskCtrl.statusCompleted = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    try{
        const body = req.body
        const task = await Task.findByIdAndUpdate(id , {status:"completed"} ,{new : true})
        res.json(task)
    }catch(err){
        res.json(err)
    }
}

taskCtrl.statusPending = async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const id = req.params.id
    try{
        const body = req.body
        const task = await Task.findByIdAndUpdate(id , {status:"pending"}, {new : true})
        res.json(task)
    }catch(err){
        res.json(err)
    }
}
taskCtrl.deleteTask = async(req,res)=>{
    const id = req.params.id
    try{
        const task = await Task.findByIdAndDelete(id)
        res.json(task)
    }catch(err){
        res.json(err)
    } 
}
module.exports = taskCtrl