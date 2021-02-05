import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  shopLoggedIn():boolean
  {
    if(localStorage.getItem('LocalAreaShops'))
    {
      var temp = JSON.parse( localStorage.getItem('LocalAreaShops'));
      if(temp.usertype == 1)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }


  custLoggedIn():boolean
  {
    if(localStorage.getItem('LocalAreaShops'))
    {
      var temp = JSON.parse( localStorage.getItem('LocalAreaShops'));
      if(temp.usertype == 2)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }


  adminLoggedIn():boolean
  {
    if(localStorage.getItem('LocalAreaShops'))
    {
      var temp = JSON.parse( localStorage.getItem('LocalAreaShops'));
      if(temp.usertype == 0)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }

}
