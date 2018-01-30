import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
 private isLoggedin:boolean;
 private token:any;

 constructor(){
   this.isLoggedin = false;
 }

  login(){
    this.isLoggedin = true;
  }

  getlogin(){
    return this.isLoggedin;
  }

  logout(){
     this.isLoggedin = false;

  }


}
