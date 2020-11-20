import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handlelogin(){
    // console.log(this.username);
    if(this.username==='yasiruPadmasiri'&&this.password==='padmasiri')
    {
      this.invalidLoging=false;
    }else
    {
      this.invalidLoging=true;
    }
  
  }

}
