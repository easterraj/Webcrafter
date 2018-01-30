import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInService } from "./home/sign-in.service"; 
import { LoginService } from "./home/login.service";
import { NotfoundComponent } from './notfound/notfound.component';
import {AppRoutingModule} from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './register/register.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [SignInService,LoginService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
