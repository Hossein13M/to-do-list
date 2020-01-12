import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../dto/task';



@Component({
  selector: 'app-done-task-items',
  templateUrl: './done-task-items.component.html',
  styleUrls: ['./done-task-items.component.scss'],
})
export class DoneTaskItemsComponent implements OnInit {

  constructor(private tasksService:TasksService){}

  doneTasks: Task[]

  ngOnInit() {
    // here I am getting all the compeleted tasks from service and store them in "doneTasks" to indicate them
    // on the template
    this.tasksService.getCompeletedTasks().subscribe(response => {
      this.doneTasks = response.json()
    });    
  }

  deleteTask(task){
    this.tasksService.deleteTask(task).subscribe(response => {
      this.doneTasks.splice(task, 1)
    })
  }
   
}


