import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public search=new BehaviorSubject<string>("");

  isUserLogged:boolean;


  constructor(private httpclient:HttpClient) { 
    this.isUserLogged=false;
  }
  setUserLoggedIn(){
    this.isUserLogged=true;
  }
  setUserLogout(){
    this.isUserLogged=false;
  }
  getStatus(){
    return this.isUserLogged;
  }
   login(){
      return this.httpclient.get('http://localhost:8085/getallusers')
   }
   getRegister(Users:any){
    return this.httpclient.post('http://localhost:8085/getRegisterUser',Users);
  }
  getCountries(){
    return this.httpclient.get('https://restcountries.com/v3.1/all');
   }
   getCallingCode(){
    return this.httpclient.get('https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json');
   }
   getAllCars(){
    return this.httpclient.get('http://localhost:8085/getallcars')
   }
   
  }

