import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-done-task-items',
  templateUrl: './done-task-items.component.html',
  styleUrls: ['./done-task-items.component.scss']
})
export class DoneTaskItemsComponent implements OnInit {

  lists:any[];
  tasks:any[];
  tasksUrl: "http://localhost:4000/api/compeleted"

  constructor(private http: Http) {     
    http.get('http://localhost:4000/api/lists').subscribe(response => {
    console.log(response.json())  
    this.lists = response.json()
  })
  http.get("http://localhost:4000/api/compeleted").subscribe(response =>{
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
