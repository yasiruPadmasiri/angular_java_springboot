import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todo/list-todo.component';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private http:HttpClient;
  constructor() { }


  retrieveAllTodos(username){
   console.log(this.http.get<Todo[]>(`http://localhost:7090/users/${username}/todos`))
  
    return  this.http.get<Todo[]>(`http://localhost:7090/users/${username}/todos`)
     // console.log("execute hllo word bean service");
    // console.log(this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru'));
   }
  



}
