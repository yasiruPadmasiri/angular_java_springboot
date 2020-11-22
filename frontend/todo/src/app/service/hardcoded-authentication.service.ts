import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authentication(username,password){ 
    if(username==='yasiruPadmasiri'&& password==='padmasiri'){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    else{
      return false;
    }
   
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
  
}
