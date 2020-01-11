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

  constructor(private tasksService:TasksService, private listService:ListsService){}

  // getting listItems from List interface 
  listItems: List[]
  
  

  // the bellow function is for finding the id of the list we have selected from the select check box in the template
  listIdFinder(changedListTitle){
    let taskListId = (this.listItems.find(element => element.title === changedListTitle))._id;
    return taskListId;
  }

  createNewTask(taskTitle: HTMLInputElement, taskDesc: HTMLInputElement, taskDate: HTMLInputElement, taskListId){
    if (taskTitle.value.length !== 0){
      this.tasksService.createTask(taskTitle.value, taskDesc.value, taskDate.value, taskListId)
      taskTitle.value = ''
      taskDesc.value = ''
      taskDate.value = ''
    // TODO: get the tasks again
  }
}



  ngOnInit() {
    // getting all the list items so we can indicate in the list select boxes for creating task
    this.listService.getLists().subscribe(response=> this.listItems = response.json())
  }

}
