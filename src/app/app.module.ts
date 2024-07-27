import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductcarComponent } from './productcar/productcar.component';
import { CarregistrationComponent } from './carregistration/carregistration.component';
import { AdmincarComponent } from './admincar/admincar.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserslistComponent } from './userslist/userslist.component';

import { LogoutComponent } from './logout/logout.component';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { NgToastModule } from 'ng-angular-popup';
import { UpdatecarformComponent } from './updatecarform/updatecarform.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';
import { NoofbookingsComponent } from './noofbookings/noofbookings.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ProductcarComponent,
    CarregistrationComponent,
    AdmincarComponent,
    AdminpageComponent,
    UserslistComponent,
  
    LogoutComponent,
    SearchPipe,
    FilterPipe,
    UpdatecarformComponent,
    BookingComponent,
    AboutComponent,
    NoofbookingsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    NgToastModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
