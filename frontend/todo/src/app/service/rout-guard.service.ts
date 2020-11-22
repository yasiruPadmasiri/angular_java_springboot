import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardService implements CanActivate {

  constructor(private hardcodeAuthenticationService: HardcodedAuthenticationService,
    private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.hardcodeAuthenticationService.isUserLoggedIn()){

      return true;
       }
      else{ 
        this.router.navigate(['login'])
        return false;
      }
  }
}

