import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-token-view',
  templateUrl: './user-token-view.component.html',
  styleUrls: ['./user-token-view.component.css']
})
export class UserTokenViewComponent implements OnInit {
  userData;
  tokens;
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    this._user.userTokenList(this.userData.token).subscribe((data)=>{this.tokens = data,console.log(this.tokens)},(err)=>{console.log(err)})
  }

}
