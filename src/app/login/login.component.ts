import { Component, OnInit,Input,Output} from '@angular/core';
import{Router}  from '@angular/router';
import {LoginService} from  '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import{AuthService} from '../auth.service';
import{User} from '../user';
import { EventEmitter } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
d:any=[];
public nuser:any=[];
loginuserdata={"email":"","password":""};




  constructor(private router:Router,private logins:LoginService,private spinner: NgxSpinnerService,private auths:AuthService) { }

  ngOnInit() {
    //for(var key in localStorage)
    //this.d.push(localStorage.getItem(key));
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);

   /* this.logins.getUser()
    .subscribe(data=>this.nuser=data); 
    console.log(this.nuser);
*/
    // this.logins.getUser1()
    // .subscribe(data=>this.nuser=data); 
    // console.log(this.nuser);
    
    
  }

  keys=Object.keys(localStorage);
  public usery=[];
  j:any;
  c:boolean=true;
  isadmin:boolean;
 // @Output() passdata:EventEmitter=new EventEmitter();
  lname;
  loginUser(){
    this.auths.loginuser(this.loginuserdata)
    .subscribe(
      res=>{
        console.log(res)
        console.log('login',this.loginuserdata)
        console.log('user',res.user)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/food'])
        this.isadmin=res.user.isAdmin;
        this.auths.isadmin=this.isadmin;
        console.log('ADMIN',this.auths.isadmin)
        //this.auths.user=res.user.name;
        this.lname=res.user.name;
        console.log("name of login user: ",this.lname);
        this.logins.sendName(this.lname);
      },
      error=>console.log(error) 
    )
    
}


  /*loginuser(e){
    e.preventDefault();
    var username=e.target.elements[0].value;
    var password=e.target.elements[1].value;
    console.log(username,password);
 
  if((username=="admin" && password=="admin")){
      this.logins.setUserLoggedin();
      this.router.navigate(['caro']);
    }
*/
   /* for (var i = 0; i<localStorage.length; i++) {
      console.log(JSON.parse(localStorage.getItem(this.keys[i])));
        this.usery.push(JSON.parse(localStorage.getItem(this.keys[i])));
        console.log(this.usery[i].firstname,this.usery[i].password)
     *
    if((username==this.usery[i].firstname && password==this.usery[i].password) ){
      this.j=i;
      console.log(this.usery[this.j].firstname);
      this.logins.setData(this.usery[this.j].firstname);  
      this.logins.setUserLoggedin();
      this.router.navigate(['/cart',this.usery[this.j].id]);
    } */
   // else{ this.c=false; }
  }
 
/*
  if((username==this.nuser[1].name && password==this.nuser[1].username)){
    this.logins.setUserLoggedin();
    this.router.navigate(['home']);
  }
*/

/*
  onclick(name:string){
    //for (var i = 0; i < localStorage.length; i++)
    localStorage.setItem('1','Lorem');
localStorage.setItem('2','Ipsum');
localStorage.setItem('3','Dolor');
    //localStorage.setItem(localStorage.key[0],name);
  
}
*/

