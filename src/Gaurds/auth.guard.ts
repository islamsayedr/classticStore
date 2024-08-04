import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  let isUserLoged: boolean;
  authService.isUserLogedIn.subscribe((status) => {
    isUserLoged = status;
  });
  if (isUserLoged!) {
    return true;
  } else {
    // Optionally, redirect to a login page or show a message
    alert('you must login first...');
    return false;
  }
};
