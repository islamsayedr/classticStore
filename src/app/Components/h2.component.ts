import { Component, Input } from '@angular/core';

@Component({
  selector: 'H2',
  standalone: true,
  imports: [],
  template: ` <h1 class="font-bold text-2xl pb-4">{{ text }}</h1> `,
  styles: [``],
})
export class H2Component {
  @Input() text: string = 'عنوان2';
}
