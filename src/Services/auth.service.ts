import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(email: string, pass: string) {
    let token = '1654565165848';
    localStorage.setItem('token', token);
  }
  logout() {
    localStorage.removeItem('token');
  }
  get isUserLogedIn() {
    return localStorage.getItem('token') ? true : false;
  }
}
