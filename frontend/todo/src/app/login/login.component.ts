import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='yasiruPadmasiri'
  password=''
  errorMessage='invalid Credentials'
  invalidLoging=false;

  constructor(private router:Router, 
   private HardcodedAuthenticationService:HardcodedAuthenticationService  ) { }

  ngOnInit() {
  }

  handlelogin(){
    // console.log(this.username);
    if(this.HardcodedAuthenticationService.authentication(this.username,this.password))
    {
      console.log(this.router.navigate(['welcome',this.username]))
      this.router.navigate(['welcome',this.username])
      this.invalidLoging=false;
    }else
    {
      this.invalidLoging=true;
    }
  
  }

}
