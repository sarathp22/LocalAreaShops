import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-signup',
  templateUrl: './shop-signup.component.html',
  styleUrls: ['./shop-signup.component.css']
})
export class ShopSignupComponent implements OnInit {
  shop = {shopname:'',gstno:'',address:'',category:'',email:'',password:''};
  serverData;
  errData;
  constructor(private _shop:ShopService, private _router:Router ) { }

  ngOnInit(): void {
  }
    onSubmit()
    {
      // console.log("Shop:",this.shop)
      this._shop.shopSignup(this.shop).subscribe((data)=>{this.serverData=data,this._router.navigate(['/shopSignin']);},(err)=>{this.errData=err;console.log(this.errData)})
      
    }

}
