import { Component, OnInit } from '@angular/core';
import {ListsService} from '../../services/lists.service'
import { List } from 'src/app/dto/list';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  constructor(private listService: ListsService) {}

  lists : List[];

  getListItems(callback = null){
    this.listService.getLists().subscribe(response => {
      this.lists = response.json()
      if(callback) callback()
    });
  }


  createNewList(listName: HTMLInputElement, listDate: HTMLInputElement){
    if (listName.value.length !== 0 && listName.value.toLowerCase() !== "Daily Tasks".toLowerCase()){
      this.listService.createList(listName.value, listDate.value).subscribe(resposne => {
        this.getListItems()
        listName.value = ''
      })

      // TODO: now I need to get the whole lists again

    }
  }

  ngOnInit() {
    this.getListItems()
  }

}
