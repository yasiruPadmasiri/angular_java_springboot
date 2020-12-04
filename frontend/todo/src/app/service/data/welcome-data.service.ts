import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export class HelloWorldBeans{
  constructor(public message :String){}
}
@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private http:HttpClient

  ) { }
  executeHelloWorldService(){
   return  this.http.get<HelloWorldBeans>('http://localhost:7090/hello-world-bean')
    // console.log("execute hllo word bean service");
   // console.log(this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru'));
  }

  executeHelloWorldServicePathVarible(name){
    return  this.http.get<HelloWorldBeans>(`http://localhost:7090/hello-world-bean/path-varible/${name}`)
     // console.log("execute hllo word bean service");
    // console.log(this.http.get('http://localhost:7090/hello-world-bean/path-varible/yasiru'));
   }



}
