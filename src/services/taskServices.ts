import { tasks } from "../data";;
import { Task } from "../Types/interface";

export function getTasks(){
      return tasks;
    }

    export function getSpecificTask(id: number){
      let task = tasks.find((task)=>task.id===id)
      if(task)return task;
      return null
    }

    export function addTask(task: Task){
      tasks.push(task)
    }

    export function deleteTask(id: number){
      let indexofTask = tasks.findIndex((task)=>task.id === id)

      if(indexofTask<0){
        return null
      }else{
        tasks.splice(indexofTask, 1)
        return indexofTask
      }
    }


    export function updateTask(id:number, body:Task){
      let indexOfTask = tasks.findIndex((task)=>task.id===id)

      if(indexOfTask>=0){
        tasks[indexOfTask] = body;
        let success = true
        return success
      }else{
        return false
      }
    }