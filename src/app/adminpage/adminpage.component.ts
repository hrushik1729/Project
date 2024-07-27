import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent {
  constructor(private router: Router) { }

  navigateTo(destination: string) {
    switch (destination) {
      case 'userslist':
        // Navigate to userlist page
        this.router.navigate(['/userslist']);
        break;
      case 'carlist':
        // Navigate to admincar page
        this.router.navigate(['/admincar']);
        break;
        case 'carregistration':
          this.router.navigate(['/carregistration']);
          break;
      default:
        // Handle other cases if needed
        break;
    }

}}
