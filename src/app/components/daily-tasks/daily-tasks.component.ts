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
  private selectedListItem : List
  public mainList: List
  mainListTasks: Task[] = new Array() 

  listIdFinder(listObject){
    // this.selectedListItem = this.allLists.find(something => something._id == listObject._id)
  }
  

  ngOnInit() {
    // I want to get all the lists
    this.listsService.getLists().subscribe(response => {
      // console.log(response.json())
      this.listItemsDailyPage = response.json()
      // console.log(this.listItemsDailyPage)
    })

    // get the mainList
    this.tasksService.getMainList().subscribe(response =>{
      this.mainList = response.json()

    // getting only the daily tasks items
    this.tasksService.getTasks().subscribe(res2 =>{
      this.allTasks = res2.json()
      for (let index = 0; index < this.allTasks.length; index++) {
        if (this.allTasks[index].list == this.mainList._id) {
          this.mainListTasks.push(this.allTasks[index])          
        }
      }
    })
    })
  }
}