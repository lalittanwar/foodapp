import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auths:AuthService,private router:Router){}

  canActivate():boolean{
    if(this.auths.loggedin()){
      return true
    }
    else{
      this.router.navigate(['/login'])
      return false
    }
    }
}
