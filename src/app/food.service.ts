import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Food} from './food';
//import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

private furl='https://vickymean.herokuapp.com/api/food/';


// private furl='http://localhost:3000/api/food/';


  constructor(private http:HttpClient) { }

  getFood(){
    return this.http.get(this.furl)
    //.map(res=>res.json());
  }

  addFood(newFood){
    var headers=new HttpHeaders();
    headers.append('content-type','application/json');
    return this.http.post(this.furl,newFood,{headers:headers});
  }

  deleteFood(id){
    return this.http.delete(this.furl+id);
    //res=>res.json();
  }
}

