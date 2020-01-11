import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';
import { httpFactory } from '@angular/http/src/http_module';
// import { ListNameComponent } from '../list-name/list-name.component';
import { stringify } from 'querystring';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit { 

  
  // showing the lists
  lists:any[];

  constructor(private http: Http) {     
      http.get('http://localhost:4000/api/lists').subscribe(response => {
      console.log(response.json())  
      this.lists = response.json()
    })    
  }

  // create a new list

  // createList(listName: HTMLInputElement, listDate: HTMLInputElement){
  //   if (listName.value.length !== 0) {
  //     let onCreateList = {
  //       title: listName.value,   
  //       date: listDate.value,   
  //       isMain: false
  //     }
  //     listName.value = ''
  //     console.log(onCreateList);
  //     this.http.post('http://localhost:4000/api/lists', onCreateList)
  //     .subscribe(response => {
  //       this.lists.push(onCreateList);
  //       console.log(response.json());
  //       console.log(onCreateList);
  //     })
  //   }    
  // }

  deleteList(listObject){
    this.http.delete('http://localhost:4000/api/lists' + "/" + listObject._id).subscribe(response =>{
      console.log(response.json())
    })
  }

  ngOnInit() {
  }

}