import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Users: any;
  countries: any;
  Callingcode:any;
  // emp:any;
  constructor(private service:UserService , private toast:NgToastService,private router:Router){
    
 
  this.Users={email:'',password:'',name:'',gender:'',phone:''};
  }
  register(regForm:any){
    this.Users.email=regForm.email;
    this.Users.password=regForm.password;
    this.Users.name=regForm.name;
    this.Users.gender=regForm.gender;
     this.Users.phone=regForm.phone;
     this.Users.licenseid=regForm.licenseid;
    this.service.getRegister(this.Users).subscribe((data:any)=>{
      this.Users=data;
      console.log(this.Users)
      this.toast.success({detail:'Success Message',summary:'Registered successfully',duration:5000})
      this.router.navigate(['login'])
    })
  }


  ngOnInit(): void {
      this.service.getCountries().subscribe((data: any) =>{
        this.countries=data;
        console.log(this.countries);
      })
      this.service.getCallingCode().subscribe((data:any)=>{
        this.Callingcode=data;
        console.log(data);
      })
      
  }

}
