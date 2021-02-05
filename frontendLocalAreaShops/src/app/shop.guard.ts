import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShopGuard implements CanActivate {
  
  constructor(private _auth:AuthService, private _router:Router){}

  canActivate():boolean{
    if(this._auth.shopLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(['shopSignin']);
      return false;
    }
  }
  
}
