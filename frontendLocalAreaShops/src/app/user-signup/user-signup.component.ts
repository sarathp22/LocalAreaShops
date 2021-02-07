import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  user = { name:'', phone:'',email:'',password:''}
  serverData;
  errData;
  constructor(private _user:UserService, private _router:Router ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log("user",this.user);
    this._user.userSignup(this.user).subscribe((data)=>{this.serverData=data, this._router.navigate(['/userSignin']);},(err)=>{this.errData=err,console.log(this.errData)})
     
  }

}
