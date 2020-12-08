import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private https:HttpClient;
  constructor() { }


  retrieveAllTodos(username){
   
    return  this.https.get<Todo[]>('http://localhost:7090/users/yasiruPadmasiri/todos')
     }
  



}
