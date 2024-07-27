import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: any;
  password: any;
  users: any;

  constructor(private service: UserService, private router:Router,private services:AdminService) { }

  ngOnInit(): void {
    this.service.login().subscribe((data) => {
      this.users = data;
    });
  }

  

  login(loginForm: any) {
    if (loginForm.value.email === "admin@gmail.com" && loginForm.value.password === "password") {
      this.services.setAdminLoggedIn();
      this.router.navigate(['adminpage']);
      return; 
    }
  
    if (loginForm.valid) {
      let loginSuccessful = false;
      this.users.forEach((user: any) => {
        if (loginForm.value.email === user.email && loginForm.value.password === user.password) {
          this.service.setUserLoggedIn();
          loginSuccessful = true;
          this.router.navigate(['home'])
          return; 
        }
      });
  
      if (loginSuccessful) {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
    }
  }

}
