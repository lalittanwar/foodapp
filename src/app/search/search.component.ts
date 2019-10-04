import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult;
  constructor(private githubservice :LoginService) { }

  ngOnInit() {
  }

  public search(s)
  {
   this.githubservice.searchUserGithub(s).subscribe(response=>{

    console.log(response)
    this.searchResult=response
   })

  }
}
