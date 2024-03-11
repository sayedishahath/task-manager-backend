const {Schema, model}=require('mongoose')
const taskSchema =new Schema({
    title: String,
    description:String,
    status:String,
    priority:String,
    dueDate:Date
},{timestamps:true})

const Task = model ('Task',taskSchema)
module.exports =Task