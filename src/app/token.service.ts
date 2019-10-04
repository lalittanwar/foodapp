import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenService implements HttpInterceptor {

  constructor(private inj: Injector) { }

  intercept(req, next) {
    let authService = this.inj.get(AuthService)
    console.log(authService.getToken())
    //const idToken = localStorage.getItem('token');
    //console.log(idToken);
    let tokenreq = req.clone({
      setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
    })
    /*const tokenreq = req.clone({
      headers: req.headers.set("Authorization",
          idToken)
  });*/
    //console.log('Header')
    console.log(tokenreq);
    return next.handle(tokenreq)
  }

}
