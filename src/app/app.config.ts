import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import {
  LucideAngularModule,
  ShoppingBasket,
  Menu,
  PackageSearch,
  Info,
  UserCircle,
  Plus,
  Minus,
  Trash,
  LogIn,
  LogOut,
  MessageCircleQuestion,
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        ShoppingBasket,
        Menu,
        PackageSearch,
        Info,
        UserCircle,
        Plus,
        Minus,
        Trash,
        LogIn,
        LogOut,
        MessageCircleQuestion,
      })
    ),
  ],
};
