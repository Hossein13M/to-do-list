import { Injectable } from '@angular/core';
import { Task } from '../dto/task';
import { Http } from '@angular/http';

@Injectable({}) 

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
    return this.getCompeletedTasks()
  }

  // getting the main list's task (daily tasks)
  getDailyTasks(){
    return this.http.get("http://localhost:4000/api/mainList")

  }
}
  
  

