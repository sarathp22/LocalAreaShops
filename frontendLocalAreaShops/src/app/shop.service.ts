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
  shopTokens(data)
  {
    return this._http.get<any>("http://localhost:3000/shop/tokens/" + data)
  }

  shopTokensDatas(data)
  {
    return this._http.get<any>("http://localhost:3000/shop/tokens/datas/" + data)
  }
  
  getSpecifShop(data)
  {
    return this._http.get<any>("http://localhost:3000/shop/" + data)
  }
  updateSpecifShop(data,userId)
  {
    return this._http.put<any>("http://localhost:3000/shop/" + userId , data)
  }
  updateWorkingHour(data,userId)
  {
    return this._http.put<any>("http://localhost:3000/shop/updateWork/" + userId , data)
  }
  getWorkingHour(userId)
  {
    return this._http.get<any>("http://localhost:3000/shop/getWork/" + userId)
  }
  shopTokenDelete(userId,date,arrayId,slot,dateFull)
  {
    return this._http.delete<any>("http://localhost:3000/shop/deleteToken/" + userId + "/" + date + "/" + arrayId + "/" + slot + "/" + dateFull)
  }

}
