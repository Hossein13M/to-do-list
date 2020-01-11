import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../dto/task';



@Component({
  selector: 'app-done-task-items',
  templateUrl: './done-task-items.component.html',
  styleUrls: ['./done-task-items.component.scss'],
})
export class DoneTaskItemsComponent implements OnInit {

  constructor(private tasksService:TasksService){
  }

  doneTasks: Task[]

  ngOnInit() {
    this.tasksService.getCompeletedTasks().subscribe(response => {
      this.doneTasks = response.json();
      console.log(this.doneTasks)
      for (let index = 0; index < this.doneTasks.length; index++) {
        console.log(this.doneTasks[index].title)        
      }
 });

    
  }
    // something : this.tasksService.getCompeletedTasks()
    // let com = this.tasksService.compeletedTasks
    // console.log(com)

    // console.log(this.tasksService.getCompeletedTasks())
    // console.log(this.tasksService.getCompeletedTasks())
    // console.log(this.tasksService.compeletedTasks)
}


