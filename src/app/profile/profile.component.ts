import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';
import {LoginService} from  '../login.service';
import {Router}  from  '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public descId;
  public user=[];
  d:any=[];
  public uname_get:boolean;
  public ll;
  constructor(private router:ActivatedRoute,private logins:LoginService) { 
    this.uname_get=this.logins.getData();
  }

  ngOnInit() {
    let id=this.router.snapshot.paramMap.get('id');
    this.descId=id;

    const keys=Object.keys(localStorage);
    for (var i = 0; i<localStorage.length; i++) {
   //console.log(JSON.parse(localStorage.getItem(keys[i])));
     this.user.push(JSON.parse(localStorage.getItem(keys[i])));
     //this.ll= localStorage.length+1;
     //console.log(this.ll);

}
  }
}
