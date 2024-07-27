import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductcarComponent } from './productcar/productcar.component';
import { CarregistrationComponent } from './carregistration/carregistration.component';
import { AdmincarComponent } from './admincar/admincar.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserslistComponent } from './userslist/userslist.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { NoofbookingsComponent } from './noofbookings/noofbookings.component';



const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'productcar',canActivate:[authGuard], component:ProductcarComponent},
  {path:'carregistration',component:CarregistrationComponent},
  {path:'admincar',component:AdmincarComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'userslist',component:UserslistComponent},
  {path:'logout',component:LogoutComponent},
  {path:'booking',component:BookingComponent},
  {path:'about',component:AboutComponent},
  {path:'noofbookings',component:NoofbookingsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
