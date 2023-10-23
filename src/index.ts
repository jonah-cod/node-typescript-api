import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';

import { addTask, deleteTask, getSpecificTask, getTasks, updateTask } from './data'
dotenv.config();


const app = express();
app.use(express.json())

app.get('/', (req:Request, res:Response)=>{
      res.send("Test okay")
})

app.get("/tasks", (req: Request, res:Response)=>{
      let tasks = getTasks();
      res.json(tasks)
})

app.get('/tasks/:taskID', (req:Request, res:Response )=>{
      let {taskID} = req.params;
      let parsedID = parseInt(taskID)
      let task = getSpecificTask(parsedID);

      res.json(task)
})

app.delete("/tasks/:taskID", (req:Request, res:Response)=>{
      let {taskID} = req.params;
      let parsedID = parseInt(taskID);

      let result = deleteTask(parsedID);

      if(result !== null){
            res.send(`Task on index: ${result} deleted`);
      }else{
            res.send("Task not found")
      }
})

app.post("/tasks", (req: Request, res:Response)=>{
      let new_task = req.body;
      let id = Date.now();
      new_task.id = id;

      addTask(new_task);
      res.json({
            id,
            sucess: true
      })
})

app.put("/tasks/:taskID", (req:Request, res:Response)=>{
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
})


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));