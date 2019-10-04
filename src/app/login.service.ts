import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uname:boolean;
  private Loggedin;
  

  private nameSource=new Subject<string>();
  sname$=this.nameSource.asObservable();
  
  // private url="http://localhost:3000/api/login";
  private url="https://vickymean.herokuapp.com/api/login";

  constructor(private http:HttpClient ) {
    //this.config = this.ngxService.getDefaultConfig(); 
    this.Loggedin=false;
    }

    public sendName(name:string){
      this.nameSource.next(name);
    }
    public getUser1(){
      return  this.http.get(this.url);
    }
    public getData(){
      return this.uname;
    }

    public setData(newAdmin:boolean):void{
      this.uname=newAdmin;
    }
 
  setUserLoggedin(){
    this.Loggedin=true;
  }
  getUserLoggedin(){
    return this.Loggedin;
  }
  // getFood(){
  // return[
  //   {"id":1,"name":"Dosa","price":40,"src":"assets/10.jpg"},
  //   {"id":2,"name":"Vada-Pav","price":20,"src":"assets/11.jpg"},
  //   {"id":3,"name":"Pav-Bhaji","price":30,"src":"assets/pavbhaji.jpg"},
  //   {"id":4,"name":"Idly","price":25,"src":"assets/idly.jpg"},
  //   {"id":5,"name":"PaniPuri","price":10,"src":"assets/12.jpg"}
  // ];
  // }
  getcity(){
    return[
      {"name":"Delhi","src":"assets/delhi.jpg"},
      {"name":"Mumbai","src":"assets/mumbai.jpg"},
      {"name":"Pune","src":"assets/pune.jpg"},
      {"name":"Jaipur","src":"assets/jaipur.jpg"},
      {"name":"Shimla","src":"assets/shimla.jpg"},
      {"name":"Hyderabad","src":"assets/hyderabad.jpg"},
      {"name":"Banglore","src":"assets/banglore.jpg"},
      {"name":"Manali","src":"assets/manali.jpg"}
      ]
  }

  public searchUserGithub(s) 
  {
    const searchText='js'
    return this.http.get('http://api.github.com/search/users?q=' + s)

  }
}
