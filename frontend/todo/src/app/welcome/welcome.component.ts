import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {AppComponent} from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name=''
  messageFromService:String=null;
  messageFromServiceVal=false
  messageFromServiceErrorVal=false
  messageFromServicePathVaribleVal=false

  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService) { }

  ngOnInit() {

    console.log (this.route.snapshot.params['name'])
   this.name= this.route.snapshot.params['name']
  }


  getWelcomeMessage(){

   console.log ( this.service.executeHelloWorldService());

   this.service.executeHelloWorldService().subscribe(
    //  response=>this.handleSuccessfullResponse(response)
    response=>this.handleSuccessfullResponse(response),
    error =>this.handleErrorResponse(error)
   );
   console.log("last line of getwelcome message");
    // console.log("get welcome message");
  }
  
  getWelcomeMessageWithParameeter(){

    console.log ( this.service.executeHelloWorldServicePathVarible(this.name));
 
    this.service.executeHelloWorldServicePathVarible(this.name).subscribe(
     //  response=>this.handleSuccessfullResponse(response)
     response=>this.handleSuccessfullResponse(response),
     error =>this.handleErrorResponse(error)
    );
    console.log("last line of getwelcome message");
     // console.log("get welcome message");
   }



  handleSuccessfullResponse(response){
    console.log(response);
    console.log(response.message);
    this.messageFromServiceVal=true;
    this.messageFromService=response.message;
  }
  handleErrorResponse(error){
    this.messageFromServiceErrorVal=true;
    this.messageFromService=error.error.message;
  }

}
