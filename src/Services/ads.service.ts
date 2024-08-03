import { Injectable } from '@angular/core';
import { iAd } from '../Models/iAd';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  ads: iAd[];
  adsNum: number;
  constructor() {
    this.ads = [
      {
        id: 0,
        cover: '/ads/ad1.png',
      },
      {
        id: 1,
        cover: '/ads/ad2.png',
      },
      {
        id: 2,
        cover: '/ads/ad3.png',
      },
      {
        id: 3,
        cover: '/ads/ad4.png',
      },
    ];
    this.adsNum = this.ads.length;
  }
  getAd(time: number): Observable<iAd> {
    return new Observable<iAd>((obs) => {
      let counter = 0;
      let adsTimer = setInterval(() => {
        if (counter < this.ads.length) {
          obs.next(this.ads[counter]);
          counter++;
        } else {
          counter = 0;
        }
      }, time * 1000);

      return () => {
        clearInterval(adsTimer);
      };
    });
  }
}
