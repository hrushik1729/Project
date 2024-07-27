import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

 
  // Define the navigateTo method
  navigateTo(route: string) {
      this.router.navigate(['productcar']); // Navigate to the specified route
  }


}
