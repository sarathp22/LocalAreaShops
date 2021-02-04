import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-shop-select',
  templateUrl: './shop-select.component.html',
  styleUrls: ['./shop-select.component.css']
})
export class ShopSelectComponent implements OnInit {
  shop = {shopname:'',gstno:'',address:'',category:'',email:'',password:''};
  shopsinCategory;
  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  onSubmit()
  {

  }
  shopSelect(event)
  {
    console.log(event.target.value);
    this._user.getSpecificCategory(event.target.value).subscribe((data)=>{this.shopsinCategory = data,console.log(this.shopsinCategory)},(err)=>{console.log(err)})

  }

  shopSubmit(data)
  {
    console.log(data);
    this._router.navigate([])

  }

}
