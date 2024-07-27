import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit {
  users:any;
  id:any;
  constructor(private service:AdminService){

  }
  ngOnInit(): void {
    this.service.getAllUser().subscribe((data:any)=>{
      this.users=data;
    })
  }
}
