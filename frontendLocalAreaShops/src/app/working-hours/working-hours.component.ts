import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service'

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit {
work= { sunopen:'',sunclose:'',sunflag:false,monopen:'',monclose:'',tueopen:'',tueclose:'',wedopen:'',wedclose:'',thuopen:'',thuclose:'',friopen:'',friclose:'',satopen:'',satclose:'',satflag:true}
userData; 
out;
out1;
currentWork;
constructor(public _shop:ShopService) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('LocalAreaShops'));
    console.log(this.userData.token);
    this._shop.getWorkingHour(this.userData.token).subscribe((data)=>{this.currentWork=data;console.log(this.currentWork)},(err)=>{console.log(err)})

  }

  onSubmit()
  {
    // console.log(this.work);
    // var temp = JSON.stringify(this.work);
    // var data = { hours:temp };
    this._shop.updateWorkingHour(this.work,this.userData.token).subscribe((data)=>{this.work=JSON.parse(JSON.stringify(data));alert("updated successfully"), this.refresh()},(err)=>{console.log(err)})
    

  }

  refresh()
  {
    this._shop.getWorkingHour(this.userData.token).subscribe((data)=>{this.currentWork=data;console.log(this.currentWork)},(err)=>{console.log(err)})
  }

}
