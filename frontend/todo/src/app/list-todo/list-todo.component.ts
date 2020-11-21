import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos = [
    {id:1 , description:'Learn to fight'},
    {id:2,description:'Learn  Try to Defeat'},
    {id:3,description:'Learn to Escape'},
    {id:4,description:'Learn to fight with Tricks '}
  ]
  // todo={
  //   id:1,
  //   description:'Learn How to Fight'
  // }
  constructor() { }

  ngOnInit(){
  }

}
