import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  lists:any[];
  tasks:any[];
  tasksUrl: "http://localhost:4000/api/tasks"

  constructor(private http: Http) {     
    http.get('http://localhost:4000/api/lists').subscribe(response => {
    console.log(response.json())  
    this.lists = response.json()
  })
  http.get("http://localhost:4000/api/tasks").subscribe(response =>{
    console.log(response.json())
    this.tasks = response.json()
  })
}
idFinder(changedList){
  console.log(changedList)
  let taskListIdObject = this.lists.find(element => element.title == changedList);
  console.log(taskListIdObject)
  let taskListId = taskListIdObject._id
  console.log(taskListIdObject._id)
  function createTask(taskListId){};
}


createTask(taskName: HTMLInputElement, taskDate: HTMLInputElement, taskDesc: HTMLInputElement, taskListId){
  if (taskName.value.length !== 0) {
    console.log(this.lists)

    let onCreateTask = {
      title: taskName.value,
      description: taskDesc.value,
      done: false,
      date: taskDate.value,
      list: taskListId
    }
    taskName.value = ''
    taskDate.value = ''
    taskDesc.value = ''
    // console.log(onCreateTask);
    this.http.post("http://localhost:4000/api/tasks", onCreateTask)
    .subscribe(response => {
      this.tasks.push(onCreateTask);
      console.log(response.json());
      console.log(onCreateTask);
    })
  }    
}

deleteTask(taskObject){
  console.log(taskObject)
  this.http.delete("http://localhost:4000/api/tasks" + "/" + taskObject._id).subscribe(response => {
  console.log(taskObject._id)
  console.log(response.json());
  })
}



  ngOnInit() {
  }

}
