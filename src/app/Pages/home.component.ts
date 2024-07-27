import { H3Component } from './../Components/typography/h3.component';
import { ProductsService } from './../../Services/products.service';
import { CarouselComponent } from './../Components/carousel.component';
import { H2Component } from '../Components/typography/h2.component';
import { Component } from '@angular/core';
import { CardComponent } from '../Components/card.component';
import { NgFor } from '@angular/common';
import { Iproduct } from '../../Models/iproduct';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    CardComponent,
    H2Component,
    CarouselComponent,
    NgFor,
    LucideAngularModule,
    H3Component,
  ],
  template: `
    <main>
      <section class="py-8">
        <div class="container m-auto">
          <img
            src="/image.png"
            alt="banner"
            class="w-full flex object-cover h-[500px] rounded-lg"
          />
          <!-- <Carousel /> -->
        </div>
      </section>
      <section class="py-8">
        <div class="container m-auto">
          <H2 text="المنتجات الاكثر طلبا"></H2>

          <div
            class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 "
          >
            <Card *ngFor="let item of popularList" [data]="item" />
          </div>
        </div>
      </section>
      <section class="py-8">
        <div class="container m-auto">
          <H2 text="لماذا نحن؟"></H2>
          <div class=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
            <div
              *ngFor="let item of whyUs"
              class="bg-gray-700 p-4  rounded-lg flex flex-col gap-2"
            >
              <span class="text-yellow-500">
                <lucide-icon
                  [name]="item.iconName"
                  [size]="50"
                  strokeWidth="1.5"
                ></lucide-icon>
              </span>
              <div class="flex flex-col">
                <H3 [text]="item.title"></H3>
                <p class="text-gray-400">{{ item.des }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [``],
})
export class HomeComponent {
  whyUs = [
    {
      title: 'امكانية الرفض وعدم الاستلام',
      des: 'يمكنك رفض الاستلام فى حالة كان المنتج غير مطابق للصور, او كان بة اى مشكلة, لست مجبرا على الاستلام ابدا.',
      iconName: 'Info',
    },
    {
      title: 'خدمة عملاء متاحة دائمة',
      des: 'يمكنك التواصل معنا عبر الهاتف او الواتس اب للاستفسار او الشكاوة, فقط اضغط على زر الواتس اب فى اسفل الصفحةز ',
      iconName: 'HelpCircle',
    },
    {
      title: 'العميل دائما اولا',
      des: 'نعمل دائما على تقديم خدمة باعلى جودة ممكنة لضمان تجربة جيدة ومستمرة, لا نريد صناعة عميل بل هدفنا اضافة اعضاء الى عائلتنا.',
      iconName: 'UserCircle',
    },
  ];
  popularList: Iproduct[] = [];
  constructor(private ProductsService: ProductsService) {
    this.popularList = this.ProductsService.getProducts();
  }
}
