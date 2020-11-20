import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handlelogin(){
    // console.log(this.username);
    if(this.username==='yasiruPadmasiri'&&this.password==='padmasiri')
    {
      this.router.navigate(['welcome'])
      this.invalidLoging=false;
    }else
    {
      this.invalidLoging=true;
    }
  
  }

}
