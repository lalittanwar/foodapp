import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';
import { FoodComponent } from './food/food.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DescComponent } from './desc/desc.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { FoodgridComponent } from './foodgrid/foodgrid.component';
import {UserslistComponent} from './userslist/userslist.component';
import {FoodlistComponent} from './foodlist/foodlist.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'app',component:AppComponent},
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'userslist',component:UserslistComponent,canActivate: [AuthGuard]},
  {path:'food',component:FoodComponent,canActivate: [AuthGuard]},
  {path:'foodlist',component:FoodlistComponent},
  {path:'foodgrid',component:FoodgridComponent},
  {path:'desc/:id',component:DescComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'search',component:SearchComponent},
  {path:'**',component:PagenotfoundComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


