import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description : string,
    public done:boolean,
    public targetDate :Date

  ){

  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})


export class ListTodoComponent implements OnInit {

  todos :Todo[]
  
  // =
  
  // [
  //   new Todo(1,'study the enemy',false,new Date()),
  //   new Todo(2,'study fight style',false,new Date()),
  //   new Todo(3,'Learn to fight',false,new Date()),
  //   new Todo(4,'Learn to Escape',false,new Date()),
  //   new Todo(5,'Learn to fight with Tricks',false,new Date()),
  //   new Todo(5,'Learn to fight with Backupm Plan',false,new Date())
  // ]
  
  
  
  // {id:1 , description:'Learn to fight'},
    // {id:2,description:'Learn  Try to Defeat'},
    // {id:3,description:'Learn to Escape'},
    // {id:4,description:'Learn to fight with Tricks '}
  
  // todo={
  //   id:1,
  //   description:'Learn How to Fight'
  // }
  constructor( public todoService:TodoDataService) {
    
   }


   

  ngOnInit(){
 this.todoService.retrieveAllTodos('yasiruPadmasiri').subscribe( 
   response=>{
     this.todos=response;
   }

 )
   
   
  }

}
