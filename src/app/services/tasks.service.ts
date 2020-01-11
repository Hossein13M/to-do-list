import { Injectable } from '@angular/core';
import { Task } from '../dto/task';
import { Http } from '@angular/http';

@Injectable({ providedIn: 'root' })

export class TasksService {
  
  // this service is designed for all the action that we want to do with tasks

  tasks: Task[]
  compeletedTasks: Task[]
  dailyTasks: Task[]
  
  constructor(private http: Http) { }

  getCompeletedTasks(){
    return this.http.get("http://localhost:4000/api/compeleted");
    // return this.http.get("http://localhost:4000/api/compeleted").subscribe(response =>{
    // this.compeletedTasks = response.json()
    // return response.json()
  }

  deleteTask(taskObject){
    this.http.delete("http://localhost:4000/api/tasks" + "/" + taskObject._id).subscribe(response => {
    })
    // return this.getCompeletedTasks()
  }

  // getting the main list's task (daily tasks)
  getDailyTasks(){
    return this.http.get("http://localhost:4000/api/tasks")
  }


  // creating a new task

  // createTask(taskName: HTMLInputElement, taskDate: HTMLInputElement, taskDesc: HTMLInputElement, taskListId){
  //   if (taskName.value.length !== 0) {
  //     console.log(this.lists)
  
  //     let onCreateTask = {
  //       title: taskName.value,
  //       description: taskDesc.value,
  //       done: false,
  //       date: taskDate.value,
  //       list: taskListId
  //     }
  //     taskName.value = ''
  //     taskDate.value = ''
  //     taskDesc.value = ''
  //     // console.log(onCreateTask);
  //     this.http.post("http://localhost:4000/api/tasks", onCreateTask)
  //     .subscribe(response => {
  //       this.tasks.push(onCreateTask);
  //       console.log(response.json());
  //       console.log(onCreateTask);
  //     })
  //   }    
  // }

  createTask(taskNameSer, taskDescSer, taskDateSer, taskListIdSer){
    return this.http.post('http://localhost:4000/api/tasks', 
    {
      title: taskNameSer,
      description: taskDescSer,
      done: false,
      date: taskDateSer,
      list:taskListIdSer
    }).subscribe(response => {})
  }
}