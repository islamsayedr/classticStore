import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home.component';
import { OffersComponent } from './Pages/offers.component';
import { ProductsComponent } from './Pages/products.component';
import { CartComponent } from './Pages/cart.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { authGuard } from '../Gaurds/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
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
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
        // canActivate: [authGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
