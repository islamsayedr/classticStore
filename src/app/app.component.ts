import { HeaderComponent } from './Components/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HeaderComponent],
  template: `
    <header></header>
    <router-outlet />
    <h1>footer</h1>
  `,
  styles: [``],
})
export class AppComponent {}
