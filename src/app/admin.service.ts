import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
     isAdminLogged:boolean;
  constructor(private httpclient:HttpClient) {
    this.isAdminLogged=false;
   }
   setAdminLoggedIn(){
    this. isAdminLogged=true;
  }
  setAdminLogout(){
    this. isAdminLogged=false;
  }

  getCarRegister(Cars:any){
    return this.httpclient.post('http://localhost:8085/getcarRegisterd',Cars);
  }
  getAllCars(){
    return this.httpclient.get('http://localhost:8085/getallcars')
   }
   getCarDelete(id:any){
    return this.httpclient.delete('http://localhost:8085/delete/'+id);
   }
   getAllUser(){
    return this.httpclient.get('http://localhost:8085/getallusers')
   }
   getCarUpdate(car:any) :any{
    return this.httpclient.put('http://localhost:8085/getcarupdated/' ,car);
  }
    getCarById(id:any){
      return this.httpclient.get('http://localhost:8085/getcarbyid'+id)
    }
    getBookingReg(Booking:any){
      return this.httpclient.post('http://localhost:8085/getbookingRegisterd',Booking)
    }
    getNoOfBookings(){
      return this.httpclient.get('http://localhost:8085/getAllBooking');
    }


}
