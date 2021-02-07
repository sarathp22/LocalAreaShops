import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
urlId;
userData;
response;
// user = {shopName:'',userId:'',gstno:'',address:'',category:'',email:'',password:''};
shop;
out;
out1;
  constructor(private _activate:ActivatedRoute, private _shop:ShopService) { }

  ngOnInit(): void {
     this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
  
      console.log(this.urlId);
      this._shop.getSpecifShop(this.userData.token).subscribe((data)=>{this.shop=JSON.parse(JSON.stringify(data));console.log(this.shop);},
      (err)=>{console.log(err)})


    // this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    // console.log(this.userData);
    // this.user.userName= this.userData.name;
    // this.user.userId= this.userData.token;
    // this.user.phone= this.userData.phone;
    // console.log(this.user);
  }
  onUpdateProfile()
  {
    
    console.log(this.shop);
    this._shop.updateSpecifShop(this.shop,this.userData.token).subscribe((data)=>{this.shop=JSON.parse(JSON.stringify(data));console.log(this.response);alert("updated successfully");this.refresh()},(err)=>{console.log(err),this.out=err.error.text,this.out1=err.error,console.log(err.error.text)})
    
    
  }
  refresh()
    {
    // this._shop.getSpecifShop(this.userData.token).subscribe((data)=>{this.shop=JSON.parse(JSON.stringify(data));console.log(this.shop);},
    // (err)=>{console.log(err)})
    }

}
