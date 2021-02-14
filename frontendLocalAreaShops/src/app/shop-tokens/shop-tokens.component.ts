import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-tokens',
  templateUrl: './shop-tokens.component.html',
  styleUrls: ['./shop-tokens.component.css']
})
export class ShopTokensComponent implements OnInit {
  userData;
  tokens;
  temp;
  constructor(private _shop:ShopService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    this._shop.shopTokens(this.userData.token).subscribe((data)=>{this.tokens = data,console.log(this.tokens)},(err)=>{console.log(err)})


  }

  delete(dateSelect,slot,arrayId,date)
  {
    // console.log(date,arrayId);
    // this._shop.shopTokenDelete(this.userData.token,dateSelect,slot,arrayId).subscribe((data)=>{this.tokens = data;console.log(this.tokens)},(err)=>{console.log(err)})
    this._shop.shopTokenDelete(this.userData.token,dateSelect,slot,arrayId,date).subscribe((data)=>{},(err)=>{console.log(err)})
    alert("Successfully Deleted");
    window.location.reload();
  }
  
 



}
