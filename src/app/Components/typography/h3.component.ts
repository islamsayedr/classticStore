import { Component, Input } from '@angular/core';

@Component({
  selector: 'H3',
  standalone: true,
  imports: [],
  template: `
    <h3 class="font-semibold text-xl pb-2">
      <ng-content />
    </h3>
  `,
  styles: [``],
})
export class H3Component {}
