import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgToastService } from 'ng-angular-popup';
declare var jQuery: any;

@Component({
  selector: 'app-admincar',
  templateUrl: './admincar.component.html',
  styleUrls: ['./admincar.component.css']
})
export class AdmincarComponent implements OnInit {
  Cars: any[] = [];
  selectedCar: any = {};

  constructor(private service: AdminService, private toast: NgToastService) {}

  ngOnInit(): void {
    this.service.getAllCars().subscribe((data: any) => {
      this.Cars = data;
      console.log(data);
    });
  }

  deleteCar(car: any): void {
    this.service.getCarDelete(car.id).subscribe((data: any) => {
      this.toast.success({ detail: 'Success Message', summary: 'Deleted successfully', duration: 5000 });
      console.log(data);

      const index = this.Cars.findIndex(c => c.id === car.id);
      if (index !== -1) {
        this.Cars.splice(index, 1);
      }
    });
  }

  editServices(car: any): void {
    console.log('Edit service called with car:', car); // Debugging statement
    this.selectedCar = { ...car };
    jQuery('#empModal').modal('show'); // Ensure modal ID matches
  }

  updateServices(): void {
    this.service.getCarUpdate(this.selectedCar).subscribe((data: any) => {
      console.log(data);
      const index = this.Cars.findIndex(c => c.id === this.selectedCar.id);
      if (index !== -1) {
        this.Cars[index] = { ...this.selectedCar };
      }
      jQuery('#empModal').modal('hide');
    });
  }
}
