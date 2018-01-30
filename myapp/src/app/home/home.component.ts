import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SignInService } from "./sign-in.service"; 
import { LoginService } from "./login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any = {};
  constructor(private router:Router, private _signIn:SignInService, private _logIn:LoginService) { }

  ngOnInit() {
  }
  onSubmit(userForm: any) {
    this.data.emailid = userForm.value.email;
    this.data.password = userForm.value.password;
    console.log("login:",userForm);
   this._signIn.signIn(this.data).subscribe((res:any)=>{
     if(!res.success)
     {
      console.log("result error:",res.msg);
     }
     else
     {
       this._logIn.login();
       var test = this._logIn.getlogin;
      console.log("loggedin:"+test,res.msg);
    }
});
}
 
}
