import { Component, OnInit,Input } from '@angular/core';
import {FoodService} from  '../food.service';
import { NgxSpinnerService } from 'ngx-spinner';
import  {Food} from '../food';
import {User} from '../user';
import{AuthService} from '../auth.service';
import{LoginService} from '../login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  @Input() p;
showFood = false;
showpayment=false;
foods:any=[];
//fooda:Food[];
food1=[];
id:Number;
name:String;
price:Number;
users:{};
isAdmin:Boolean;
c:Number=0;
c1:Number;
user:string;
url: string=null;
selectedFile:File=null;


  constructor(private fs:FoodService,private spinner: NgxSpinnerService,private auths:AuthService,
              private logins:LoginService,private http:HttpClient) { }

  ngOnInit() { 
      // console.log(this.auths.isadmin)
       this.isAdmin=this.auths.isadmin;
       this.user=this.auths.user;
      // console.log(this.isAdmin);
      //console.log(this.foods[0]._id);
      this.get();
      // this.logins.getUser1()
      // .subscribe(data=>this.user=data)
      console.log('user: ',this.user)
      //console.log('c: ',this.fs.c);
      //  this.fs.getFood()
      // .subscribe(food=>{
      //   this.foods.push(food);
      //   console.log("Food array: ",this.foods[0]);
      //   console.log("Food array length: ",this.foods.length);
      //   this.c=(this.foods[0].length)+1;
      //   console.log('c: ',this.c)
      // })
      console.log(JSON.stringify(this.users))
      this.spinner.show();
      setTimeout(() => {
          this.spinner.hide();
      }, 1000);
  }


  get(){
    this.fs.getFood()
    .subscribe(foods=>this.foods=foods)
  }

  add(myform){
    const newFood:Food={
      id:myform.value.id,
      name:myform.value.name,
      price:myform.value.price
     }
     this.fs.addFood(newFood)
     .subscribe(food=>
      { this.foods.push(food);
        console.log("Food array: ",this.foods[0]);
        console.log("Food array length: ",this.foods.length);
        this.c1=(this.foods.length)+1;
        console.log('c1: ',this.c1)
        this.get();
        //console.log(food);
        myform.reset();
      })
  }

 /* deleted(f){
    console.log(f.id);
    this.fs.deleteFood(f.id)
    .subscribe(data=>{
      
      this.foods.splice(f.id-1,1)
    })
  }*/

  deleted(id1:any){
    //console.log(id1);
    var foods=this.foods;
    //console.log(foods[0]._id);
    this.fs.deleteFood(id1)
    .subscribe(data=>{ 
       //if(data.n==1) 
       for(let i=0;i<foods.length;i++){
       if(foods[i]._id==id1){
      foods.splice(i,1);
      //console.log('i: ',i);
      break;
       }
       }
})
this.isAdmin=this.auths.isadmin;
       this.user=this.auths.user;
  }
  
  add_to_basket(f){
    this.showFood=true;
    //this.fd=JSON.stringify(f);
    console.log(f.id);
    //console.log(this.fd);
    //console.log(this.food[f.id-1]);
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
    console.log('c: ',this.c);
  }

  
  onSelectFile(file:FileList) {
    // console.log(event);
    this.selectedFile=file.item(0);
    

    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  // onUpload(){
  //   const fd=new FormData();
  //   fd.append('image',this.selectedFile,this.selectedFile.name);
  //   this.http.post('/',fd)
  //   .subscribe(res=>{
  //     console.log(res);
  //   })
  // }

  onCheckout(){
    this.showpayment=true;
    
  }
}
