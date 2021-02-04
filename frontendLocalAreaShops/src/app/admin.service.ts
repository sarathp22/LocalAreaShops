import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }

  shopDataFetch():Observable<any>
  {
    return this._http.get<any>("http://localhost:3000/admin/owners")
  }
  adminShopApproval(data):Observable<any>
  {
    return this._http.get<any>("http://localhost:3000/admin/" + data)
  }
}
