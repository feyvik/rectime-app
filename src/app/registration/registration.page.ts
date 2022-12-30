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
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationPage implements OnInit {
  private slides: any;

  public availableSports = [
    { text: 'Running', selected: false },
    { text: 'Golf', selected: false },
    { text: 'Football', selected: false },
    { text: 'Tennis', selected: false },
    { text: 'Cycling', selected: false },
    { text: 'Basketball', selected: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
  }

  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  toggleSelectedAvailableSports(availableSportsIndex: number) {
    const updatedAvailableSports = [...this.availableSports];
    updatedAvailableSports[availableSportsIndex].selected =
      !updatedAvailableSports[availableSportsIndex].selected;
    this.availableSports = [...updatedAvailableSports];
  }
}
