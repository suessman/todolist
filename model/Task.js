const mongooose = require("mongoose");
const Schema = mongooose.Schema;

const taskSchema = Schema({
    task:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        required:true
    }
},{timestamps:true})

const Task = mongooose.model("Task", taskSchema);

module.exports = Task;