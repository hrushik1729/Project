import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcar',
  templateUrl: './productcar.component.html',
  styleUrl: './productcar.component.css'
})
export class ProductcarComponent {
  cars:any[] = [];
  selectedCar: any;
  numberOfDays: number = 1; // Default number of days
  totalPrice: number = 0;
      carid:any;
      constructor(private service:UserService,private router: Router){

      }
      ngOnInit():void{
        this.fetch();
      }
      fetch():void{
        this.service.getAllCars().subscribe((data:any)=>{
          this.cars=data;
        })
      }

      calculateTotalPrice(price: number): number {
        return price * this.numberOfDays;
      }

      navigateTo(route: string) {
        this.router.navigate(['booking']); // Navigate to the specified route
    }
    

}