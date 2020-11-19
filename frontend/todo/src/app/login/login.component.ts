import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='yasiruPadmasiri'
  password=''

  constructor() { }

  ngOnInit() {
  }

  handlelogin(){
    console.log(this.username);
    console.log(this.password);
  }

}
