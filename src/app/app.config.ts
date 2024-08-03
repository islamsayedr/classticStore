import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  LucideAngularModule,
  ShoppingBasket,
  Menu,
  DeleteIcon,
  PackageSearch,
  Info,
  HelpCircle,
  UserCircle,
  Plus,
  Minus,
  Trash,
} from 'lucide-angular';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      LucideAngularModule.pick({
        ShoppingBasket,
        Menu,
        DeleteIcon,
        PackageSearch,
        Info,
        HelpCircle,
        UserCircle,
        Plus,
        Minus,
        Trash,
      })
    ),
  ],
};
