import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-noofbookings',
  templateUrl: './noofbookings.component.html',
  styleUrl: './noofbookings.component.css'
})
export class NoofbookingsComponent implements OnInit {
  bookings:any[]=[];
  id:any;
  constructor(private service:AdminService){

  }
  ngOnInit(): void{
    this.service.getNoOfBookings().subscribe((data:any)=>{
      this.bookings=data;
    },
  (error)=>{
    console.error('error fetching bookings',error);
  })
  }

}