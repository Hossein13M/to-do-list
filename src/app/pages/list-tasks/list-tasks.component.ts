import { Component, OnInit } from "@angular/core";
import { ListsService } from "../../services/lists.service";
import { List } from "../../dto/list";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-list-tasks",
  templateUrl: "./list-tasks.component.html",
  styleUrls: ["./list-tasks.component.scss"]
})
export class ListTasksComponent implements OnInit {
  constructor(
    public listsService: ListsService,
    private route: ActivatedRoute
  ) {}

  pageUrl: string;
  listUrlTitle: List = {
    _id: "id",
    isMain: false,
    date: new Date(),
    title: "default"
  };
  allLists: List[];

  // separating the current list from the other lists
  getListUrlTitle(listId : string) {
    this.listsService.getLists().subscribe(response => {
      this.allLists = response.json();
      for (let index = 0; index < this.allLists.length; index++) {
        if (this.allLists[index]._id === listId)
          this.listUrlTitle = this.allLists[index];
      }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getListUrlTitle((params as any).listId);
    });
    // getting the title of the url
  }
}
