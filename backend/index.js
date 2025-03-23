const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");


// // For testing the TaskModel console_log
// const taskModel = require("./models/task.model");


// // For testing the TaskService console_log
// const TaskService = require("./services/task.service");

// const TaskServiceInstance = new TaskService();
// console.log(
//   TaskServiceInstance.find,
//   TaskServiceInstance.create,
//   TaskServiceInstance.update,
//   TaskServiceInstance.delete
// );

// // To confirm controller module
// const {getTasks, createTask, updateTask, deleteTask,} = require("./controllers/task.controller");
// console.log(getTasks, createTask, updateTask, deleteTask);





const app = express();
const PORT = 8082;
//const DB_URI = "mongodb://localhost:27017/task-manager";
//const DB_URI = "mongodb+srv://kamleshsahur:6xQr4aqWBIkK7SFl@tasks.hctme.mongodb.net/";
const DB_URI = "mongodb+srv://kamleshsahur:6xQr4aqWBIkK7SFl@tasks.hctme.mongodb.net/tasks?retryWrites=true";

mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("Error in connecting DB", error));


app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/task.routes");
app.use("/tasks", taskRoutes);


app.listen(PORT, () => {
    console.log(`Backend listning on Port ${PORT}`);
});
