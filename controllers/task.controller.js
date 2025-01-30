
import Task from "../models/task.model.js";

const createTask =  (req, res) => {

    const { title, description, dueDate, priority } = req.body;

    if (!title || !description || !dueDate || !priority) {
        return res.status(400).json({ message: "some data is missing" });
    }

    const task =  Task.create({ ...req.body, user: req.user._id });

    res.status(201).json(task);

};


const getTasks = (req, res) => {
    const tasks = Task.find({ user: req.user._id });

    res.status(200).json(tasks);
};


const getTaskById = (req, res) => {
    const id = req.params.id
    const task = Task.findById(id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
};


const updateTask = (req, res) => {
    const id = req.params.id
    const task = Task.findById(id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    Object.assign(task, req.body);
    task.save();

    res.status(201).json(task);
};


const deleteTask = (req, res) => {

    const id = req.params.id
    const task = Task.findById(id);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.deleteOne();
    res.status(201).json({ message: "Task deleted" });
};


export { createTask, getTasks, getTaskById, updateTask, deleteTask }



