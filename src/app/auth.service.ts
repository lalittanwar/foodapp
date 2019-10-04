import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//  private url="http://localhost:3000/api/register/";
//  private lurl="http://localhost:3000/api/login/";
//  private userurl="http://localhost:3000/api/user/";

  
   private url="https://vickymean.herokuapp.com/api/register/";
   private lurl="https://vickymean.herokuapp.com/api/login/";
   private userurl="https://vickymean.herokuapp.com/api/user/";

  isadmin:boolean;
  user:string;
  
  constructor(private http:HttpClient,private route:Router) { }
  
  getUser(){
    return this.http.get(this.userurl)
    //.map(res=>res.json());
  }

  regUser(user){
    return this.http.post<any>(this.url,user);
  }

  loginuser(user){
    return this.http.post<any>(this.lurl,user);
    
  }

  deleteUser(id){
    return this.http.delete(this.userurl+id);
    //res=>res.json();
  }
  loggedin(){
    return !!localStorage.getItem('token')
  }

  logoutuser(){
    localStorage.removeItem('token');
    this.route.navigate(['\login']);

  }
  getToken(){
    return localStorage.getItem('token')
  }

}
