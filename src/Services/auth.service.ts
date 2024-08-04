import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLogedIn: BehaviorSubject<boolean>;
  constructor() {
    this.isUserLogedIn = new BehaviorSubject(false);
  }
  login(email: string, pass: string) {
    let token = '1654565165848';
    localStorage.setItem('token', token);
    this.isUserLogedIn.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isUserLogedIn.next(false);
  }
}
