import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';
import { httpFactory } from '@angular/http/src/http_module';
import { ListNameComponent } from '../list-name/list-name.component';
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

  createList(listName, listDate){
    let onCreateList = {
      title: listName,
      date: listDate,
      isMain: false
    }
    console.log(listName);
    console.log(listDate);
    console.log(onCreateList);
    this.http.post('http://localhost:4000/api/lists',
      {
        title: listName,
        date:listDate,
        isMain: false
      },      
    )    
    // JSON.stringify(onCreateList)).subscribe(response => {
    //   this.lists.push(this.lists)
    // }    
    // this.http.put('http://localhost:4000/api/lists' + '/' + (Math.random() * (10 - 5) + 5), {onCreateList})
  }

  ngOnInit() {
  }

}