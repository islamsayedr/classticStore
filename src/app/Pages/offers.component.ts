import { Component } from '@angular/core';

@Component({
  selector: 'offers',
  standalone: true,
  imports: [],
  template: `
    <main>
      <section class="py-8">
        <div class="container m-auto">
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px]"
          />
        </div>
      </section>
      <section class="py-8">
        <div class="container m-auto">
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px]"
          />
        </div>
      </section>
    </main>
  `,
  styles: [``],
})
export class OffersComponent {}
