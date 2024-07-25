import { FooterComponent } from './Components/footer.component';
import { HeaderComponent } from './Components/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <Header></Header>
    <router-outlet />
    <!-- <h1>footer</h1> -->
    <!-- <footer></footer> -->
    <Footer></Footer>
  `,
  styles: [``],
})
export class AppComponent {}
