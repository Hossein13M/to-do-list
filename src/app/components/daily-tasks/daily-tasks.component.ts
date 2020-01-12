import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../dto/task';
import {ListsService} from '../../services/lists.service'
import { List } from '../../dto/list';

@Component({
  selector: 'app-daily-tasks',
  templateUrl: './daily-tasks.component.html',
  styleUrls: ['./daily-tasks.component.scss']
})
export class DailyTasksComponent implements OnInit {

  constructor(public tasksService:TasksService, public listsService:ListsService){}

  listItemsDailyPage: List[]
  allTasks: Task[]
  allLists:List[]
  private selectedListItem : List
  public mainList: List
  mainListTasks: Task[] = new Array() 

  // deleting a task
  deleteTask(task){
    this.tasksService.deleteTask(task).subscribe(response =>{
      let deletedObject = response.json()
      let deletedObjectIndex = this.mainListTasks.indexOf(deletedObject)
      this.mainListTasks.splice(deletedObjectIndex, 1)
    })
  }

  listIdFinder(listObject){
    this.selectedListItem = this.allLists.find(something => something._id == listObject._id)
  }


  // creating a new task
  createNewTask(taskName: HTMLInputElement, taskDate: HTMLInputElement, taskDesc: HTMLInputElement){
    this.tasksService.createTask(taskName.value, taskDate.value, taskDesc.value, this.selectedListItem._id)
    .subscribe(response => {
      if ((response.json()).list == (this.mainList)._id)
        this.mainListTasks.push(response.json())
    })
  }

  // updating a task
  updateTask(task){
    console.log(task)
    this.tasksService.updateTaskDetails(task).subscribe(respone => {})
  }

  // getting tasks
  getDailyTasks(callback = null){
    this.tasksService.getMainList().subscribe(response =>{
      this.mainList = response.json()
    // getting only the daily tasks items
      this.tasksService.getTasks().subscribe(res2 =>{
        this.allTasks = res2.json()
        for (let index = 0; index < this.allTasks.length; index++) {
          if (this.allTasks[index].list == this.mainList._id && this.allTasks[index].done != true  && !(this.mainListTasks.includes(this.allTasks[index])))
            this.mainListTasks.push(this.allTasks[index])          
        }
      })
    })
    if(callback) callback()
  }

  doneTask(task){
    this.tasksService.compeleteTask(task)
    this.mainListTasks.splice(task, 1)
  }

  ngOnInit() {
    // I want to get all the lists
    this.listsService.getLists().subscribe(response => {
      this.listItemsDailyPage = response.json()
    })

    this.listsService.getLists().subscribe(response => {
      this.allLists = response.json()
    })

    // getting all the tasks and filter them to just have the main list tasks  
    this.getDailyTasks()
  }
}