import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shopList;
  constructor( private _admin:AdminService ) { }

  ngOnInit(): void {
    this._admin.shopDataFetch().subscribe((data)=>{this.shopList=data;console.log(this.shopList)},(err)=>{console.log(err)})
  }

  approve(data)
  {
    this._admin.adminShopApproval(data).subscribe((data)=>{console.log(data)},(err)=>{console.log(err)});
    // this._admin.shopDataFetch().subscribe((data)=>{this.shopList=data;console.log(this.shopList)},(err)=>{console.log(err)})
    window.location.reload();
  }

}
