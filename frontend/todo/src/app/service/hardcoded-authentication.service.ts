import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authentication(username,password){
    if(username==='yasiruPadmasiri'&& password==='padmasiri'){
      return true;
    }
    else{
      return false;
    }
    
  }
}
