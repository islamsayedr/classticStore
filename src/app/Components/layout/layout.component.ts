import { SideBarComponent } from './sideBar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SideBarComponent],
  template: `
    <Header (openSideBar)="toggleSideBar($event)"></Header>
    <sideBar [isOpen]="isSideBarOpen" (areaClicked)="toggleSideBar($event)" />
    <router-outlet />
    <Footer></Footer>
  `,
  styles: [``],
})
export class LayoutComponent {
  isSideBarOpen: boolean;
  constructor() {
    this.isSideBarOpen = false;
  }

  toggleSideBar(value: boolean) {
    this.isSideBarOpen = value;
    console.log('valueInLayoutIs: ' + this.isSideBarOpen);
  }
}
