import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-carregistration',
  templateUrl: './carregistration.component.html',
  styleUrl: './carregistration.component.css'
})
export class CarregistrationComponent {
  Cars:any;
  constructor(private service:AdminService, private toast:NgToastService){
    this.Cars={image:'',model:'',company:'',colour:'',price:'',desciption:''}
  }
  carRegister(regForm:any){
    this.Cars.image=regForm.image;
    this.Cars.model=regForm.model;
    this.Cars.company=regForm.company;
    this.Cars.colour=regForm.colour;
    this.Cars.price=regForm.price;
    this.Cars.description=regForm.description;
    this.service.getCarRegister(this.Cars).subscribe((data:any)=>{
      this.Cars=data;
      this.toast.success({detail:'Success Message',summary:'Registered successfully',duration:5000});
      console.log(this.Cars);
      
    })

  }
}
