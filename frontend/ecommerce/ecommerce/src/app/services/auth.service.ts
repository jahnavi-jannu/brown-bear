import { Injectable } from '@angular/core';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storage = sessionStorage;

  constructor() { }

  setFirstName(firstName: string){
    this.storage.setItem('firstName', firstName);
  }

  getFirstName(){
    return this.storage.getItem('firstName');
  }

  setLastName(lastName: string){
    this.storage.setItem('lastName', lastName);
  }

  getLastName(){
    return this.storage.getItem('firstName');
  }

  setEmail(email: string){
    this.storage.setItem('email', email);
  }

  getEmail(){
    return this.storage.getItem('email');
  }

  setMobile(mobile: string){
    this.storage.setItem('mobile', mobile);
  }

  getMobile(){
    return this.storage.getItem('mobile');
  }

  clear(){
    this.storage.clear();
  }
  isLoggedIn(){
    return  this.getFirstName() !=null;
  }
}


