import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SignInService {
  private _logUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }

signIn(data){
  return this.http.post(this._logUrl+'/signin',data);
}

}