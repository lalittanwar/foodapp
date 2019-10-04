import { Component, OnInit } from '@angular/core';
import {FoodService} from  '../food.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, animate, transition } from '@angular/animations';
import * as AOS from 'aos';

@Component({
  selector: 'app-foodgrid',
  templateUrl: './foodgrid.component.html',
  styleUrls: ['./foodgrid.component.css'],
  animations:[
    trigger('fade',[
      transition('*=>*',[
        style({transform:"translateY(100px)"}),
        animate(1000)
      ])
    ]),
    trigger('fade1',[
      transition('*=>*',[
        style({transform:"translateY(-100px)"}),
        animate(1000)
      ])
    ])
  ]
})
export class FoodgridComponent implements OnInit {


  showFood = false;
  showpayment=false;
  food;
  food1:Array<{id:number,name:string,price:number}>=[];
  fd;
  c=0;
  count=0;
  
    constructor(private fs:FoodService,private spinner: NgxSpinnerService) {}  
  
    ngOnInit() { 
      AOS.init();
      this.food=this.fs.getFood();
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 1000);
    }
    // add(f){
    //   this.count++;
    //   this.showFood=true;
    //   this.fd=JSON.stringify(f);
    //   console.log(f.id);
    //   //console.log(this.fd);
    //   console.log(this.food[f.id-1]);
    //   //var fl=this.food.length;
    //   //console.log(fl);
    //  //this.food1.splice(f.id,fl-1);
    //   //var i=f.id-1;
    //  this.food1.push(
    //   {
    //    "id":f.id,
    //    "name":f.name,
    //    "price":f.price
    //   });
    //   console.log(this.food1[f.id-1]);
    //  // this.c=f.price;
    //   this.c=this.c+f.price;
    //   console.log(this.c);
    // }
  
  
    // onCheckout(){
    //   this.showpayment=true;
      
    // }
  }
  
  

