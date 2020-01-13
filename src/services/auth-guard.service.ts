import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
//import { AuthService } from './auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router,private loginService:LoginService) {}
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    if (localStorage.getItem('userToken')!=null)
    {
      let roles=next.data['roles'] as Array<string>;
      if(roles){
        var match=this.loginService.roleMatch(roles);
        if(match)
        return true;
        else{
          this.router.navigateByUrl("/forbidden");
          return false;
        }
      }

    }
    this.router.navigate(['Home']);
    return false;
    
  }
}