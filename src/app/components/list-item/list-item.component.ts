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

  constructor(private listService: ListsService) {}

  deleteListItem(listObject){
    this.listService.deleteList(listObject)
    this.listService.getLists().subscribe(response => {
      this.lists = response.json()
    }); 
  }

  ngOnInit() {
    this.listService.getLists()
    this.listService.getLists().subscribe(response => {
      this.lists = response.json()
    }); 
  }

}