import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // private eurl = "https://vickymean.herokuapp.com/api/event";
  // private surl = "https://vickymean.herokuapp.com/api/home";

  private eurl = "http://localhost:3000/api/event";
  private surl = "http://localhost:3000/api/home";

  constructor(private http: HttpClient) { }

  event() {
    return this.http.get<any>(this.eurl)
  }

  special() {
    return this.http.get<any>(this.surl)
  }

}
