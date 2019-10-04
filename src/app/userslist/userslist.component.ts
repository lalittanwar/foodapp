import { Component, OnInit, Input } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { LoginService } from '../login.service';
import {Router}  from  '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FoodComponent } from '../food/food.component';
import {AuthService} from '../auth.service';
import{User} from '../user';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  usery:any;
  public userob=new User();
  show=false;
  msg=false;
  fd;
  c=0;
  x=0;
  up=true;

  
  id:number;
   name: string;
   email: string;
   password:string;
   phone:number;
   dob :Date;
   special=[];  
   isAdmin:boolean;
   user:string;

   keys=Object.keys(localStorage);
  constructor(private logins:LoginService,private route:Router,private spinner: NgxSpinnerService,
    private auths:AuthService,private eve: EventService, 
    config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false; }

  ngOnInit() {
    this.isAdmin=this.auths.isadmin;
    this.user=this.auths.user;
    this.up=true;
    this.get();
    //this.eve.special()
    this.eve.event()
      .subscribe(
        res => this.special = res,
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.route.navigate(['/login'])
            }
          }
        }
      )
    
    //console.log(this.usery)
  /*  for (var i = 0; i<localStorage.length; i++) {
   console.log(JSON.parse(localStorage.getItem(this.keys[i])));
     this.usery.push(JSON.parse(localStorage.getItem(this.keys[i])));
    }
    */
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 1000);
  }

  get(){
    this.auths.getUser()
    .subscribe(user=>this.usery=user)
    console.log(typeof(this.usery))
    
    console.log(JSON.stringify(this.usery))
  }
 
  open(content,u) {
    this.modalService.open(content); 
    this.fd=JSON.stringify(u);
    this.x=u.id-1;
     console.log(this.x);
     console.log(this.usery[u.id-1]); 
     console.log(this.fd);
     //const modalRef = this.modalService.open();
     //modalRef.componentInstance.p = 'World';
     
   }
    
  
  onclear(id1:any){
    this.auths.deleteUser(id1)
    .subscribe(data=>{ 
       //if(data.n==1) 
       for(let i=0;i<this.usery.length;i++){
       if(this.usery[i]._id==id1){
      this.usery.splice(i,1);
      //console.log('i: ',i);
      break;
       }
       }
})
    // console.log(u.id);
    // window.localStorage.removeItem(u.id);
    // window.location.reload();
    this.isAdmin=this.auths.isadmin;
    this.user=this.auths.user;
    }
  /*  editing(u){ 
    this.show=true;
    this.userob.setId(u.id);
    this.userob.setfirstname(u.firstname);
    this.userob.setemail(u.email);
    this.userob.setpassword(u.password);
    this.userob.setphone(u.phone);
    this.userob.setdob(u.dob);
    }
    */
    onSubmit1(myForm1){
    localStorage.setItem(myForm1.id,JSON.stringify(myForm1));
    this.up=false;
    this.msg=true;
    //window.location.reload();
    }

    desc(u){
      this.route.navigate(['/desc',u.id]);
    }
 
  }
  
 /*
  console.log(id);
  var nid=id-1;
  let fn=user[nid].firstname;
  let result = prompt("Edit Task Title", fn);
  if (result !== null && result !== ""){
    user[nid].firstname=result;
    console.log(user[nid].firstname);
    localStorage.setItem(user[nid].id,JSON.stringify(user[nid]));
  
*/
    /*
     console.log((JSON.stringify(user[1])));
  let fn=user[1].firstname;
  let result = prompt("Edit Task Title", fn);
  if (result !== null && result !== ""){
    user[1].firstname=result;
    console.log(user[1].firstname);
    localStorage.setItem(user[1].id,JSON.stringify(user[1]));
    */