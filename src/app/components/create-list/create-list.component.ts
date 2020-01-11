import { Component, OnInit } from '@angular/core';
import {ListsService} from '../../services/lists.service'

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(private listService: ListsService) {}

  createNewList(listName: HTMLInputElement, listDate: HTMLInputElement){
    if (listName.value.length !== 0){
      // listName.value = ''
      this.listService.createList(listName.value, listDate.value)
      listName.value = ''
      this.listService.getLists()
      // TODO: now I need to get the whole lists again

    }
  }

  ngOnInit() {
  }

}
