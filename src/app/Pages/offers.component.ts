import { Component } from '@angular/core';
import { H1Component } from '../Components/typography/h1.component';

@Component({
  selector: 'offers',
  standalone: true,
  imports: [H1Component],
  template: `
    <main>
      <div class="container m-auto">
        <H1>قائمة العروض</H1>
        <div class="w-full flex flex-col gap-8">
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px] rounded-lg"
          />
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px] rounded-lg"
          />
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px] rounded-lg"
          />
        </div>
      </div>
    </main>
  `,
  styles: [``],
})
export class OffersComponent {}
