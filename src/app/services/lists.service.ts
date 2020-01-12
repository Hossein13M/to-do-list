import { Injectable } from "@angular/core";
import { Task } from "../dto/task";
import { Http } from "@angular/http";
import { List } from "../dto/list";

@Injectable({ providedIn: "root" })
export class ListsService {
  lists: List[];
  mainList: List[];
  onCreateList: List[];

  constructor(private http: Http) {}

  // getting all lists
  getLists() {
    return this.http.get("http://localhost:3000/api/lists");
  }

  // creating a new list
  createList(listNameSer, listDateSer) {
    return this.http.post("http://localhost:3000/api/lists", {
      title: listNameSer,
      date: listDateSer,
      isMain: false
    });
  }

  // updating a list
  updateListDetails(updatedList) {
    return this.http.put("http://localhost:3000/api/lists/" + updatedList._id, {
      _id: updatedList._id,
      title: updatedList.title,
      isMain: false,
      date: updatedList.date
    });
  }

  // deleting an exisiting list
  deleteList(listObject) {
    return this.http.delete(
      "http://localhost:3000/api/lists/" + listObject._id
    );
  }
}
