import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

mongoose
    .connect("mongodb://localhost:27017/learn")
    .then(() => {
        console.log("mongodb connected successfully")
    })
    .catch((err) => {
        console.log("mongodb connection failed.", err)
    })

app.listen(8080, () => {
    console.log("server is running on http://localhost:8080")
})










