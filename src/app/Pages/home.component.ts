import { H2Component } from '../Components/h2.component';
import { Component } from '@angular/core';
import { CardComponent } from '../Components/card.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CardComponent, H2Component],
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
          <H2 text="المنتجات الاكثر طلبا"></H2>

          <div
            class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
      <section class="py-8">
        <div class="container m-auto">
          <H2 text="العروض الحالية"></H2>
          <div
            class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [``],
})
export class HomeComponent {}
