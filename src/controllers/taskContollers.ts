import { Response, Request } from "express"
import { addTask, 
         deleteTask, 
         getSpecificTask, 
         getTasks, 
         updateTask } from "../services/taskServices";


export function appTest(req:Request, res:Response){
      return res.send("Test okay")
}

export function getAllTasksController(req: Request, res:Response){
      let tasks = getTasks();
      res.json(tasks)
}

export function getSpecificTaskController(req:Request, res:Response ){
      let {taskID} = req.params;
      let parsedID = parseInt(taskID)
      let task = getSpecificTask(parsedID);

      res.json(task)
}

export function deleteTaskController(req:Request, res:Response){
      let {taskID} = req.params;
      let parsedID = parseInt(taskID);

      let result = deleteTask(parsedID);

      if(result !== null){
            res.send(`Task on index: ${result} deleted`);
      }else{
            res.send("Task not found")
      }
}

export function addTaskController(req: Request, res:Response){
      let new_task = req.body;
      let id = Date.now();
      new_task.id = id;

      addTask(new_task);
      res.json({
            id,
            sucess: true
      })
}

export function updateTaskController(req:Request, res:Response){
      let { taskID } = req.params;
      let parsedID = parseInt(taskID)
      let updatedTask = req.body;

      let result = updateTask(parsedID, updatedTask);
      if (result) {
            return res.json({
                  id: parsedID,
                  success: true
            })
      }
      return res.json({
            success: false
      })
}

                      //  js                        //ts                       import 
//named exports      module.exports = {addTask }     export addTask       const { addTask} = require/ import{}
//default exports   module.exports = addTask        export default ...    const addTask   /   import addTask