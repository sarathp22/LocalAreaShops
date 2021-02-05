import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user = {email:"", password: ""};
  serverData;
  errData;
  constructor(private _admin:AdminService, private _router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    // console.log("user",this.user);
    this._admin.userLogin(this.user).subscribe((data)=>{this.serverData=data,this.userSave(data),this._router.navigate(['admin/shopList']);},(err)=>{this.errData=err,console.log(this.errData)})
      
  }
  userSave(data)
  {
    var myObj= JSON.stringify(data);
    localStorage.setItem ('LocalAreaShops', myObj);
  }


}
