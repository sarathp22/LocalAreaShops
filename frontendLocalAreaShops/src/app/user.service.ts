import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public _http:HttpClient) { }
  userSignup(data)
  {
    return this._http.post("http://localhost:3000/user/signup", data)
  }
  userLogin(data)
  {
    return this._http.post("http://localhost:3000/user/login", data)
  }
  getSpecificCategory(data)
  {
    return this._http.get("http://localhost:3000/user/getShops/" + data)
  }
}
