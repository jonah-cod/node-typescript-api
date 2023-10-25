import { Router, Request, Response } from "express";
import { addTaskController, 
         appTest,
         deleteTaskController,
         getAllTasksController,
         getSpecificTaskController,
         updateTaskController, } from "../controllers/taskContollers";

const taskrouter: Router  = Router()

taskrouter.get('/', appTest)
taskrouter.get("/", getAllTasksController)
taskrouter.get('/:taskID', getSpecificTaskController)
taskrouter.delete("/:taskID", deleteTaskController)
taskrouter.post("/", addTaskController)
taskrouter.put("/:taskID", updateTaskController)





export default taskrouter;