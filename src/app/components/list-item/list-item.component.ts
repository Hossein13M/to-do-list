import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';
import { httpFactory } from '@angular/http/src/http_module';
import { ListNameComponent } from '../list-name/list-name.component';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {


  

  onCreateList:{
    _id: number;
    title: string;
    isMain: boolean;
    date:Date;
  };

  lists:any[];

  constructor(private http: Http) { 
    http.get('http://localhost:4000/api/lists').subscribe(response => {
      console.log(response.json())  
      this.lists = response.json()
    })
  }



  updateList(onCreateList){
    this.http.put('http://localhost:4000/api/lists' + '/' + (Math.random() * (10 - 5) + 5), {onCreateList})

  }

  

  

  ngOnInit() {
  }

}