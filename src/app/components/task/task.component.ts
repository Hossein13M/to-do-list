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

  constructor(private http: Http) {     
    http.get('http://localhost:4000/api/lists').subscribe(response => {
    console.log(response.json())  
    this.lists = response.json()
  })
  http.get('http://localhost:4000/api/tasks').subscribe(response =>{
    console.log(response.json())
    this.tasks = response.json()
  })
}

  ngOnInit() {
  }

}
