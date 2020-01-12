import { Injectable } from "@angular/core";
import { Task } from "../dto/task";
import { Http } from "@angular/http";

@Injectable({ providedIn: "root" })
export class TasksService {
  // this service is designed for all the action that we want to do with tasks

  tasks: Task[];
  compeletedTasks: Task[];
  dailyTasks: Task[];

  constructor(private http: Http) {}

  // get all the done tasks
  getCompeletedTasks() {
    return this.http.get("http://localhost:3000/api/compeleted");
  }

  // deleting a task
  deleteTask(taskObject) {
    return this.http.delete(
      "http://localhost:3000/api/tasks/" + taskObject._id
    );
  }

  // getting all of tasks
  getTasks() {
    return this.http.get("http://localhost:3000/api/tasks");
  }

  // getting the mainList
  getMainList() {
    return this.http.get("http://localhost:3000/api/mainList");
  }

  // done task (compelete a task)
  compeleteTask(compeletedTask) {
    return this.http.put(
      "http://localhost:3000/api/tasks/" + compeletedTask._id,
      {
        title: compeletedTask.title,
        description: compeletedTask.description,
        done: true,
        date: compeletedTask.date,
        list: compeletedTask.list
      }
    );
  }

  // move a task to main list
  moveTask(movedTask, mainListId) {
    return this.http
      .put("http://localhost:3000/api/tasks/" + movedTask._id, {
        title: movedTask.title,
        description: movedTask.description,
        done: false,
        date: movedTask.date,
        list: mainListId
      })
      .subscribe(response => {});
  }

  // update title, desc and date of a task
  updateTaskDetails(updatedTask) {
    return this.http.put("http://localhost:3000/api/tasks/" + updatedTask._id, {
      title: updatedTask.title,
      description: updatedTask.description,
      done: false,
      date: updatedTask.date,
      list: updatedTask.list
    });
  }

  // creating a new task
  createTask(taskNameSer, taskDescSer, taskDateSer, taskListIdSer) {
    return this.http.post("http://localhost:3000/api/tasks", {
      title: taskNameSer,
      description: taskDescSer,
      done: false,
      date: taskDateSer,
      list: taskListIdSer
    });
  }
}
