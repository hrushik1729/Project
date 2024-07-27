import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private service:UserService,private router:Router,private services:AdminService){

  }
  ngOnInit(){
    alert('logout successfully')
    this.service.setUserLogout();
    this.services.setAdminLogout();
    this.router.navigate(['login'])
  }

}
