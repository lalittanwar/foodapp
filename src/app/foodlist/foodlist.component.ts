import { Component, OnInit,Input } from '@angular/core';
import {FoodService} from  '../food.service';
import { NgxSpinnerService } from 'ngx-spinner';
import  {Food} from '../food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  constructor(private fs:FoodService,private spinner: NgxSpinnerService) { }
  foods:any;
  @Input() p;
  showFood = false;
  showpayment=false;
  food;
  food1:Array<{id:number,name:string,price:number}>=[];
  fd;
  c=0;
  count=0;
  id:Number;
  name:String;
  price:Number;

  ngOnInit() {
    this.get();
  }

  get(){
    this.fs.getFood()
    .subscribe(foods=>this.foods=foods)
  }


  add(f){
    this.showFood=true;
    this.fd=JSON.stringify(f);
    console.log(f.id);
    //console.log(this.fd);
    console.log(this.food[f.id-1]);
    //var fl=this.food.length;
    //console.log(fl);
   //this.food1.splice(f.id,fl-1);
    //var i=f.id-1;
   this.food1.push(
    {
     "id":f.id,
     "name":f.name,
     "price":f.price
    });
    console.log(this.food1[f.id-1]);
   // this.c=f.price;
    this.c=this.c+f.price;
    console.log(this.c);
  }


  onCheckout(){
    this.showpayment=true;
    
  }
}
