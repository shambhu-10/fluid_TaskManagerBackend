// Include endpoints for:
// Creating a new task
// Retrieving a list of all tasks
// Retrieving a single task by ID
// Updating an existing task
// Deleting a task


import express from "express";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;


















