import { Component, OnInit } from '@angular/core';
import {ListsService} from '../../services/lists.service'
import { List } from 'src/app/dto/list';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit { 

  // instancing lists with interface
  lists : List[];
  mainRoute = false

  constructor(private listService: ListsService) {}

  getListItems(callback = null){
    this.listService.getLists().subscribe(response => {
      this.lists = response.json()
      if(callback) callback()
    });
  }


  // 
  createNewList(listName: HTMLInputElement, listDate: HTMLInputElement){
    if (listName.value.length !== 0 && listName.value.toLowerCase() !== "Daily Tasks".toLowerCase()){
      this.listService.createList(listName.value, listDate.value || Date.now()).subscribe(resposne => {
        this.lists.push(resposne.json())
        this.getListItems()
        listName.value = ''
      })

      // TODO: now I need to get the whole lists again

    }
  }

  // update list details
  updateList(list){
    this.listService.updateListDetails(list).subscribe(respone => {})
  }

  deleteListItem(listObject){
    this.listService.deleteList(listObject).subscribe(response => {
      this.getListItems()
    });
  }

  ngOnInit() {
    this.getListItems()
  }
}