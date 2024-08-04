import { Component, Input } from '@angular/core';

@Component({
  selector: 'H1',
  standalone: true,
  imports: [],
  template: `
    <h1 class="font-extrabold text-4xl pb-4">
      <ng-content />
    </h1>
  `,
  styles: [``],
})
export class H1Component {}
