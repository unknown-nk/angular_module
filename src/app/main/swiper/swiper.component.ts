import { Component } from '@angular/core';
import {AfterViewInit, Directive, ElementRef, Input,ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

import {register} from 'swiper/element/bundle';
import {Swiper,SwiperOptions} from 'swiper/types';


@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],

})
export class SwiperComponent {
    @ViewChild('swiperRef')
    swiperRef: ElementRef | undefined;
    swiper?: Swiper;

    sliders: string[] = [
        'Test 1',
        'Test 2',
        'Test 3',
        'Test 4',
        'Test 5',
        'Test 6',
        'Test 7',
        'Test 8',
        'Test 9',
      ]
    public config: SwiperOptions = {
        
        autoHeight: true,
        spaceBetween: 20,
        navigation: false,
        pagination: {clickable: true, dynamicBullets: true},
        slidesPerView: 1,
        centeredSlides: true,
        breakpoints: {
          400: {
            slidesPerView: "auto",
            centeredSlides: false
          },
        }
      }
  
    ngAfterViewInit(): void {
      register();
      this.swiper = this.swiperRef?.nativeElement.swiper;
    }
  
    onActiveIndexChange() {
      console.log(this.swiper?.activeIndex);
    }
}
