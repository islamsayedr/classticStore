import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home.component';
import { OffersComponent } from './Pages/offers.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'offers',
    component: OffersComponent,
  },
];
