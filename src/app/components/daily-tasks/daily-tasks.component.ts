import { Component, OnInit } from "@angular/core";
import { TasksService } from "../../services/tasks.service";
import { Task } from "../../dto/task";
import { ListsService } from "../../services/lists.service";
import { List } from "../../dto/list";

@Component({
  selector: "app-daily-tasks",
  templateUrl: "./daily-tasks.component.html",
  styleUrls: ["./daily-tasks.component.scss"]
})
export class DailyTasksComponent implements OnInit {
  constructor(
    public tasksService: TasksService,
    public listsService: ListsService
  ) {}

  listItemsDailyPage: List[];
  allTasks: Task[];
  allLists: List[];
  private selectedListItem: List;
  public mainList: List;
  mainListTasks: Task[] = new Array();

  // deleting a task
  deleteTask(task) {
    this.tasksService.deleteTask(task).subscribe(response => {
      let deletedObject = response.json();
      let deletedObjectIndex = this.mainListTasks.indexOf(deletedObject);
      this.removeObjectFromArray(this.mainListTasks, "_id", task._id);
    });
  }

  // again here we are getting the list's id
  listIdFinder(listObject) {
    this.selectedListItem = this.allLists.find(
      something => something._id == listObject._id
    );
  }

  // creating a new task
  createNewTask(
    taskName: HTMLInputElement,
    taskDate: HTMLInputElement,
    taskDesc: HTMLInputElement,
    listOfSelection: HTMLInputElement
  ) {
    this.tasksService
      .createTask(
        taskName.value,
        taskDesc.value,
        taskDate.value || Date.now(),
        this.selectedListItem._id
      )
      .subscribe(response => {
        if (response.json().list == this.mainList._id)
          this.mainListTasks.push(response.json());

        taskName.value = "";
        taskDate.value = null;
        taskDesc.value = "";
        listOfSelection.value = null;
      });
  }

  // updating a task
  updateTask(task) {
    this.tasksService.updateTaskDetails(task).subscribe(respone => {});
  }

  // getting tasks
  getDailyTasks(callback = null) {
    this.tasksService.getMainList().subscribe(response => {
      this.mainList = response.json();
      // getting only the daily tasks items
      this.tasksService.getTasks().subscribe(res2 => {
        this.allTasks = res2.json();
        for (let index = 0; index < this.allTasks.length; index++) {
          if (
            this.allTasks[index].list == this.mainList._id &&
            this.allTasks[index].done != true &&
            !this.mainListTasks.includes(this.allTasks[index])
          )
            this.mainListTasks.push(this.allTasks[index]);
        }
      });
    });
    if (callback) callback();
  }

  // remove object from array using its value
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

  // make a task done (compelete the task)
  doneTask(task) {
    this.tasksService.compeleteTask(task).subscribe(response => {
      this.removeObjectFromArray(this.mainListTasks, "_id", task._id);
    });
  }

  ngOnInit() {
    // I want to get all the lists
    this.listsService.getLists().subscribe(response => {
      this.listItemsDailyPage = response.json();
    });

    this.listsService.getLists().subscribe(response => {
      this.allLists = response.json();
    });

    // getting all the tasks and filter them to just have the main list tasks
    this.getDailyTasks();
  }
}
