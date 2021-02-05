import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-signin',
  templateUrl: './shop-signin.component.html',
  styleUrls: ['./shop-signin.component.css']
})
export class ShopSigninComponent implements OnInit {
 shop = {email:"", password: ""};
 serverData;
 errData;
  constructor(private _shop:ShopService, private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    //  console.log("Shop:",this.shop);
    this._shop.shopLogin(this.shop).subscribe((data)=>{this.serverData=data,this.userSave(data),this._router.navigate(['/shop/tokenList']);},(err)=>{if(err){this.errData=err}})
      
  }
  userSave(data)
  {
    var myObj= JSON.stringify(data);
    localStorage.setItem ('LocalAreaShops', myObj);
  }

}
