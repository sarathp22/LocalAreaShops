import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-select-token',
  templateUrl: './select-token.component.html',
  styleUrls: ['./select-token.component.css']
})
export class SelectTokenComponent implements OnInit {
urlId;
userData;
response;
user = {date:'',slot:'',userName:'',phone:'',userId:''};
temp ={slot:''};
out;
out1;
currentWork
  constructor(private _activate:ActivatedRoute, private _user:UserService) { }

  ngOnInit(): void {
    this._activate.paramMap.subscribe(data=>{
      this.urlId=data.get('id');
      console.log(this.urlId);
      this._user.getWorkingHour(this.urlId).subscribe((data)=>{this.currentWork=data;console.log(this.currentWork)},(err)=>{console.log(err)})


      // this.register.getUserId(this.urlId).subscribe((data)=>{this.Registration=JSON.parse(JSON.stringify(data));console.log(this.Registration);},
      // (err)=>{console.log(err)})
    })

    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    console.log(this.userData);
    this.user.userName= this.userData.name;
    this.user.userId= this.userData.token;
    this.user.phone= this.userData.phone;
    console.log(this.user);

  }
  onSubmit()
  {
    
    var slot = this.temp.slot.substring(0,2);
    // console.log(typeof(slot));
    if(slot == "07")
    {
      this.user.slot = "t7";
    }
    else if (slot == "08")
    {
      this.user.slot = "t8";
    }
    else if (slot == "09")
    {
      this.user.slot = "t9";
    }
    else if (slot == "10")
    {
      this.user.slot = "t10";
    }
    else if (slot == "11")
    {
      this.user.slot = "t11";
    }
    else if (slot == "12")
    {
      this.user.slot = "t12";
    }
    else if (slot == "13")
    {
      this.user.slot = "t13";
    }
    else if (slot == "14")
    {
      this.user.slot = "t14";
    }
    else if (slot == "15")
    {
      this.user.slot = "t15";
    }
    else if (slot == "16")
    {
      this.user.slot = "t16";
    }
    else if (slot == "17")
    {
      this.user.slot = "t17";
    }
    else if (slot == "18")
    {
      this.user.slot = "t18";
    }
    else if (slot == "19")
    {
      this.user.slot = "t19";
    }
    else if (slot == "20")
    {
      this.user.slot = "t20";
    }
    else if (slot == "21")
    {
      this.user.slot = "t21";
    }

    // this.user.date = this.user.date.replace("-","");
    // parseInt(this.user.date.replace("-",""));

    console.log(this.user);

    this._user.tokenRequest(this.urlId, this.user).subscribe((data)=>{this.response=JSON.parse(JSON.stringify(data));console.log(this.response)},(err)=>{console.log(err),this.out=err.error.text,this.out1=err.error,console.log(err.error.text)})

  }

}
