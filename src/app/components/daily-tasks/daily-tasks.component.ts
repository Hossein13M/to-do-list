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

  constructor(private tasksService:TasksService){}

  ngOnInit() {
  }

}
