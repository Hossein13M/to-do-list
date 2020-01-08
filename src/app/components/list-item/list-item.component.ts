import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  lists:any[];

  constructor(http: Http) { 
    http.get('http://localhost:4000/api/lists').subscribe(response => {
    console.log(response.json())  
    this.lists = response.json()
    })
  }

  ngOnInit() {
  }

}