import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  {
  Booking:any;
  constructor(private service:AdminService, private toast:NgToastService, private router:Router){
    this.Booking={name:'',phone:'',email:'',payment:'',date:'',days:'',totalprice:''}
  }
  booking(regForm:any){
    this.Booking.name=regForm.name;
    this.Booking.phone=regForm.phone;
    this.Booking.email=regForm.email;
    this.Booking.payment=regForm.payment;
    this.Booking.date=regForm.date;
    this.Booking.days=regForm.days;
    this.Booking.totalprice=regForm.totalprice;
    this.service.getBookingReg(this.Booking).subscribe((data:any)=>{
      this.booking=data;
      this.toast.success({detail:'success messege',summary:'booking confirmed',duration:5000});
      console.log(this.Booking)
      this.router.navigate(['home'])
    })

  }

}