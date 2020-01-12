import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../dto/task';
import {ListsService} from '../../services/lists.service'
import { List } from 'src/app/dto/list';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  constructor(public tasksService:TasksService, public listsService:ListsService){}

  allLists:List[]
  allTasks:Task[]

  private selectedListItem : List

  listIdFinder(listObject){
    this.selectedListItem = this.allLists.find(something => something._id == listObject._id)
  }


  createNewTask(taskName: HTMLInputElement, taskDate: HTMLInputElement, taskDesc: HTMLInputElement){
    this.tasksService.createTask(taskName.value, taskDate.value, taskDesc.value, this.selectedListItem._id)
    .subscribe(response => {})
    console.log(this.selectedListItem._id)
  }  

  ngOnInit() {
     // I want to get all the lists
     this.listsService.getLists().subscribe(response => {
      this.allLists = response.json()
    })

    // i want to get all the tasks
    this.tasksService.getTasks().subscribe(response => {
      this.allTasks = response.json()
    })


  }

}
