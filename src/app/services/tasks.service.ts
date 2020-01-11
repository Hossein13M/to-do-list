import { Injectable } from '@angular/core';
import { Task } from '../dto/task';
import { Http } from '@angular/http';

@Injectable({ providedIn: 'root' }) 

export class TasksService {

  tasks: Task[]
  compeletedTasks: Task[]
  some:any
  constructor(private http: Http) { }

  getCompeletedTasks(){
    return this.http.get("http://localhost:4000/api/compeleted");
    // return this.http.get("http://localhost:4000/api/compeleted").subscribe(response =>{
    // console.log(response.json())
    // this.compeletedTasks = response.json()
    // return response.json()
    // console.log(this.compeletedTasks)
    // return this.compeletedTasks
  }}
  
  

