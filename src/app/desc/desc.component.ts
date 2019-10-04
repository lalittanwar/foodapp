import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit {

  public descId;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    let id=this.router.snapshot.paramMap.get('id');
    this.descId=id;
    
  }

}
