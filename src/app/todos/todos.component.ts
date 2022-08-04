import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  
  title='Todo';
  todos: Todo[] = [];
    constructor() { 
    }
  
  ngOnInit(): void {
    this.todos=[
      {
        content:'First Todo',
        completed:false
      },
      {
        content:'Second Todo',
        completed:true
      }
    ]
  }

}
