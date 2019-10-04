import { Component, OnInit } from '@angular/core';
import {LoginService} from  '../login.service';
import {Router}  from  '@angular/router';
import{ ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public descId;
  public user=[];
  d:any=[];
  public uname_get:boolean;
  public ll;
  constructor(private logins:LoginService,private router:Router,public router1:ActivatedRoute) { 
    this.uname_get=this.logins.getData();
    
  //this.logins.getData().subscribe(Data => this.uname_get=Data);
   // console.log(this.uname_get);
  }

  ngOnInit() {
    let id=this.router1.snapshot.paramMap.get('id');
    this.descId=id;
    
    const keys=Object.keys(localStorage);
    for (var i = 0; i<localStorage.length; i++) {
   //console.log(JSON.parse(localStorage.getItem(keys[i])));
     this.user.push(JSON.parse(localStorage.getItem(keys[i])));
     //this.ll= localStorage.length+1;
     //console.log(this.ll);
  }
}

prof(){
  this.router.navigate(['/profile',this.descId]);
}
}
