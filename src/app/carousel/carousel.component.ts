import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Keyboard,
  Pagination,
  Scrollbar,
  Zoom,
} from 'swiper';
import { IonicSlides } from '@ionic/angular';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  private slides: any;
  slideContainer: any;
  constructor() {}

  ngOnInit() {}

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    if (this.slides.activeIndex == 0) {
      this.slideContainer.classList.add('slide');
    }
  }
}
