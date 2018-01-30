import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {
private _regUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }

  addNewUser(newUser : any){
    return this.http.post(this._regUrl+"/signup",newUser);
  }

}
