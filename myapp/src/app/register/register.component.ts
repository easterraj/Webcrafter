import { Component, OnInit } from '@angular/core';
import {Register} from './register';
import { RegisterService } from './register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private _regService: RegisterService) { }
  msg : String;
  regStatus: String;
 ngOnInit() {
 }
 onRegSubmit(regForm: any)
 {
   
   let newUser = new Register(
     regForm.email,
     regForm.fname,
     regForm.password,
     regForm.mobile,
     regForm.lname,
     regForm.location
   );
   console.log("Register Form", newUser);
   this._regService.addNewUser(newUser).subscribe((res:any)=>{
     if(!res.success)
     console.log("result error:",res.msg);
     else
     {
       console.log("result:",res);
      this.msg = "Registered successfully";
      this.regStatus = "alert alert-success";
    
       
     }
     
   });
 }

}
