// Define a MongoDB schema for tasks with fields such as title, description, due date, priority, status, etc.


import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    due_date: { type: String, required: true },
    priority: { type: String, required: true },
    status: { type: Boolean, required: true }
})

const Task = model("tasks", taskSchema)

export default Task;


// {
//     "title": "assignment",
//     "description": "fluid ai assignment",
//     "due_date": "30th jan",
//     "priority": "high",
//     "status": false
//   }




