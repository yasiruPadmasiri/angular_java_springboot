import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }


  retrieveAllTodos(username){
    return  this.http.get<HelloWorldBeans>('http://localhost:7090/hello-world-bean')
     // console.log("execute hllo word bean service");
    // console.log(this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru'));
   }
 



}
