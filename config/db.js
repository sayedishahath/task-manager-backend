const mongoose = require('mongoose')
const dbConfigure = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/task-manager")
        console.log('connected to db')
    }catch(err){
        console.log('error connecting db')
    }
}
module.exports = dbConfigure