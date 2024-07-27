import { Component, Input } from '@angular/core';

@Component({
  selector: 'H2',
  standalone: true,
  imports: [],
  template: ` <h2 class="font-bold text-2xl pb-3">{{ text }}</h2> `,
  styles: [``],
})
export class H2Component {
  @Input() text: string = 'عنوان2';
}
