import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(public _http:HttpClient) { }

  shopSignup(data)
  {
    return this._http.post("http://localhost:3000/shop/signup", data)
  }
  shopLogin(data)
  {
    return this._http.post("http://localhost:3000/shop/login", data)
  }

}
