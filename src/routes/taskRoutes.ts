import { Router, Request, Response } from "express";
import { addTaskController, 
         appTest,
         deleteTaskController,
         getAllTasksController,
         getSpecificTaskController,
         updateTaskController, } from "../controllers/taskContollers";

const router: Router  = Router()

router.get('/', appTest)
router.get("/tasks", getAllTasksController)
router.get('/tasks/:taskID', getSpecificTaskController)
router.delete("/tasks/:taskID", deleteTaskController)
router.post("/tasks", addTaskController)
router.put("/tasks/:taskID", updateTaskController)





export default router;