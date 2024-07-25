import { Component, Input } from '@angular/core';
import { Iproduct } from '../../Modules/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [CurrencyPipe],
  template: `
    <div class=" h-100 bg-gray-800 p-3 flex flex-col gap-1 rounded-2xl">
      <!-- <div class="h-48 bg-gray-700 rounded-xl"></div> -->
      <img
        [src]="data.image"
        [alt]="data.name"
        class="h-48 bg-gray-700 rounded-xl object-cover"
      />

      <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <span class="text-xl font-bold">{{ data.name }}</span>
            <p class="text-xs text-gray-400">
              الكمية المتوفرة: {{ data.quantity }}
            </p>
          </div>
          <span class="font-bold text-lg text-yellow-200">
            {{ data.price | currency : 'ج ' }}
          </span>
        </div>
        <button
          class="hover:bg-yellow-600 text-yellow-100 border-yellow-600 border-solid border-[1px] pt-3 pb-2 rounded-lg"
        >
          🛒 اضف للسلة
        </button>
      </div>
    </div>
  `,
  styles: [``],
})
export class CardComponent {
  @Input() data: Iproduct = {
    id: 0,
    name: 'اسم المنتج...',
    price: 0,
    description: 'وصف المنتج',
    image: 'https://via.placeholder.com/150',
    size: ['L', 'XL', 'XXL'],
    color: 'لون',
    quantity: 0,
  };
}
