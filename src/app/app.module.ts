import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule,Routes} from '@angular/router';
import {LoginService} from  './login.service';
import {AuthGuard} from './auth.guard';
import { FoodComponent } from './food/food.component';
import { NgxUiLoaderModule,NgxUiLoaderRouterModule,NgxUiLoaderConfig,SPINNER } from  'ngx-ui-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent} from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescComponent } from './desc/desc.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { EventService } from './event.service';
import{ TokenService} from './token.service';
import { UserslistComponent } from './userslist/userslist.component';
import { FoodgridComponent } from './foodgrid/foodgrid.component';
import { FoodlistComponent } from './foodlist/foodlist.component';



const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
 // bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce,
  //pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  //pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FoodComponent,
    PagenotfoundComponent,
    DescComponent,
    CartComponent,
    ProfileComponent,
    SearchComponent,
    UserslistComponent,
    SignupComponent,
    FoodgridComponent,
    UserslistComponent,
    SignupComponent,
    HomeComponent,
    FoodlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule
    
  ],
  providers: [LoginService,EventService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
