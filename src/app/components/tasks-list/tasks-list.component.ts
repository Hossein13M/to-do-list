import { Component, OnInit, ɵConsole } from "@angular/core";
import { TasksService } from "../../services/tasks.service";
import { Task } from "../../dto/task";
import { ListsService } from "../../services/lists.service";
import { List } from "../../dto/list";
import { ActivatedRoute } from "@angular/router";
import { promise } from "protractor";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.scss"]
})
export class TasksListComponent implements OnInit {
  constructor(
    public tasksService: TasksService,
    public listsService: ListsService,
    private route: ActivatedRoute
  ) {}

  currentListTasks: Task[] = new Array();
  currentPageUrl: string;
  pageUrl: string;
  allTasks: Task[];
  allLists: List[];
  listUrlTitle: List;
  private selectedListItem: List;

  // finding a list's id
  listIdFinder(listObject) {
    this.selectedListItem = this.allLists.find(
      something => something._id == listObject._id
    );
  }

  // getting the list name using the id which have been fixed by route
  getListUrlTitle(listId: string) {
    this.listsService.getLists().subscribe(response => {
      this.allLists = response.json();
      for (let index = 0; index < this.allLists.length; index++) {
        if (this.allLists[index]._id === listId)
          this.listUrlTitle = this.allLists[index];
      }
      this.getListData();
    });
  }

  // getting all the tasks of the list
  getListData() {
    this.tasksService.getTasks().subscribe(response => {
      this.allTasks = response.json();
      for (let index = 0; index < this.allTasks.length; index++) {
        if (
          this.allTasks[index].list == this.listUrlTitle._id &&
          this.allTasks[index].done != true
        )
          this.currentListTasks.push(this.allTasks[index]);
      }
    });
  }

  // create a new task
  createNewTask(
    taskName: HTMLInputElement,
    taskDate: HTMLInputElement,
    taskDesc: HTMLInputElement,
    listOfSelection: HTMLInputElement
  ) {
    this.tasksService
      .createTask(
        taskName.value,
        taskDate.value,
        taskDesc.value || Date.now(),
        this.selectedListItem._id
      )
      .subscribe(response => {
        if (response.json().list == this.listUrlTitle._id)
          this.currentListTasks.push(response.json());
        taskName.value = "";
        taskDate.value = null;
        taskDesc.value = "";
        listOfSelection.value = null;
      });
  }

  // remove an object from array with its id
  removeObjectFromArray(arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }

  // compelete a task
  doneTaskOf(task) {
    this.tasksService.compeleteTask(task).subscribe(response => {
      this.removeObjectFromArray(this.currentListTasks, "_id", task._id);
    });
  }

  // move a task to main list
  movingTask(movedTask) {
    for (let index = 0; index < this.allLists.length; index++) {
      if (this.allLists[index].isMain == true)
        var mainListId = this.allLists[index]._id;
    }
    this.tasksService.moveTask(movedTask, mainListId);
    this.currentListTasks.splice(movedTask, 1);
  }

  // updating a task
  updateTask(task) {
    this.tasksService.updateTaskDetails(task).subscribe(respone => {});
  }

  // delete a task from this list
  deleteTask(task) {
    this.tasksService.deleteTask(task).subscribe(response => {
      let deletedObject = response.json();
      let deletedObjectIndex = this.currentListTasks.indexOf(deletedObject);
      this.removeObjectFromArray(this.currentListTasks, "_id", task._id);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListUrlTitle((params as any).listId);
    });
    // I want to get all the lists
    this.listsService.getLists().subscribe(response => {
      this.allLists = response.json();
    });
    // i want to get all the tasks
    this.tasksService.getTasks().subscribe(response => {
      this.allTasks = response.json();
    });
  }
}
