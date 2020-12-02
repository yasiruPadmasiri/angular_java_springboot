import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }
  executeHelloWorldService(){
   return  this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru')
    // console.log("execute hllo word bean service");
   // console.log(this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru'));
  }
}
