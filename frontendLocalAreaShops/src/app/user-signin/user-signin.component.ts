import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  user = {email:"", password: ""};
  serverData;
  errData;
  constructor(private _user:UserService, private _router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    // console.log("user",this.user);
    this._user.userLogin(this.user).subscribe((data)=>{this.serverData=data,this.userSave(data),this._router.navigate(['/home1']);},(err)=>{this.errData=err,console.log(this.errData)})
      
  }
  userSave(data)
  {
    var myObj= JSON.stringify(data);
    localStorage.setItem ('LocalAreaShops', myObj);
  }

}
