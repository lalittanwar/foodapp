import { Component, OnInit,ViewChild} from '@angular/core';
import {FormsModule}  from '@angular/forms';
import {LoginService} from  '../login.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {AuthService} from '../auth.service';
import{User} from '../user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
 {


  submitted=false;
  show=false;
  public user=[];
  public uname_get:boolean;
  userarray:any=[];
   id:number;
   name: string;
   email: string;
   password:string;
   phone:number;
   dob :Date;
   c:any;
  // usery:User[]=[];
   //us=[];
  //reguserdata={};
  //@ViewChild(name) nameElementRef:ElementRef;
  
  constructor(private logins:LoginService,private auths:AuthService, private spinner: NgxSpinnerService) { 
    this.uname_get=this.logins.getData();
  }

  ngOnInit() {
    
   
    this.auths.getUser()
    .subscribe(user=>
      {
      this.userarray.push(user);
      console.log('User Array: ',this.userarray[0]);
      //console.log('User Array: ',this.userarray[0][1]);
      //console.log('User Array: ',JSON.stringify(this.userarray));
      console.log('length:', this.userarray[0].length);
      this.c= this.userarray[0].length+1;
      console.log('c: ',this.c)
      //console.log('User Array 1: ',this.user);
      //console.log('User Array 1 length: ',this.user.length);
     },
      err=>console.log(err)
    )
    //console.log('User Array: ',this.userarray);
     this.spinner.show();
     setTimeout(() => {
         this.spinner.hide();
     }, 1000);

}


// ngAfterviewInit(){
//   this.nameElementRef.nativeElement.focus();
// }

  
  onSubmit(myForm){
    this.submitted=true;
    this.show=true;
    //localStorage.setItem(myForm.id,JSON.stringify(myForm));
    const newuser:User={
      id:myForm.value.id,
      name:myForm.value.name,
      email:myForm.value.email,
      phone:myForm.value.phone,
      password:myForm.value.password,
      dob:myForm.value.dob,
      isAdmin:myForm.value.isAdmin
     }
    this.auths.regUser(newuser)
    .subscribe(user=>
      {
      this.userarray.push(user);
      console.log(user);
      console.log(this.userarray);
      
      },
      err=>console.log(err)
    )
  }

  }

  



