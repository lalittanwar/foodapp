import { Component } from '@angular/core';
import {NgxUiLoaderService } from 'ngx-ui-loader';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderConfig,SPINNER } from  'ngx-ui-loader';
import { NgxSpinnerService } from 'ngx-spinner';
import {AuthService} from './auth.service';
import{Router}  from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mylogin';
  isAdmin:boolean;
  user:string;
  loginuserdata={};
  name:string='';

 constructor(private router:Router,private spinner: NgxSpinnerService, 
              public auths:AuthService, private logins:LoginService) { }
 
  ngOnInit() {
    this.logins.sname$
    .subscribe(
      name=>{
        this.name=name;
      }
    )
    this.isAdmin=this.auths.isadmin;
    //this.user=this.auths.user;
    console.log('Logged in user',this.user);
   
    // if(!!localStorage.getItem('token')){
    // this.auths.loginuser(this.loginuserdata)
    // .subscribe(
    //   res=>{
    //     this.loginuserdata=res.user;
    //     console.log(res)
    //     console.log('login',this.loginuserdata)
    //     console.log('user',res.user)
    //   })
    // }
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
    //this.router.navigate(['/food'])
  }
  
 /*  config: NgxUiLoaderConfig;

  constructor(private ngxService: NgxUiLoaderService) { 
  
  }
 ngOnInit() {
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 5000);

} */
}
