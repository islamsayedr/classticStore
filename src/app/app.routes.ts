import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home.component';
import { OffersComponent } from './Pages/offers.component';
import { ProductsComponent } from './Pages/products.components';
import { CartComponent } from './Pages/cart.component';
import { LayoutComponent } from './Components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home',
    // pathMatch: 'full',
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
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
