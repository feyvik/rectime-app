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
  slideContainer: any;

  constructor() {}

  ngOnInit(): void {
    this.slideContainer = document.getElementById('slideContainer');
  }

  setSwiperInstance(swiper: any) {
    this.slides = swiper;
    if (this.slides.activeIndex == 0) {
      this.slideContainer.classList.add('slide');
    }
  }

  nextSlide() {
    this.slides.slideNext();
    if (this.slides.activeIndex === 2) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('appleHealth');
      this.slideContainer.classList.remove('infinity');
      this.slideContainer.classList.remove('playercard');
      this.slideContainer.classList.remove('set');
      this.slideContainer.classList.add('animation');
    } else if (this.slides.activeIndex === 3) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('infinity');
      this.slideContainer.classList.remove('playercard');
      this.slideContainer.classList.remove('set');
      this.slideContainer.classList.remove('animation');
      this.slideContainer.classList.add('appleHealth');
    } else if (this.slides.activeIndex === 4) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('playercard');
      this.slideContainer.classList.remove('set');
      this.slideContainer.classList.remove('animation');
      this.slideContainer.classList.remove('appleHealth');
      this.slideContainer.classList.add('infinity');
    } else if (this.slides.activeIndex === 5) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('infinity');
      this.slideContainer.classList.remove('set');
      this.slideContainer.classList.remove('animation');
      this.slideContainer.classList.remove('appleHealth');
      this.slideContainer.classList.add('playercard');
    } else if (this.slides.activeIndex === 6) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('infinity');
      this.slideContainer.classList.remove('playercard');
      this.slideContainer.classList.remove('animation');
      this.slideContainer.classList.remove('appleHealth');
      this.slideContainer.classList.add('set');
    } else if (this.slides.activeIndex === 7) {
      this.slideContainer.classList.remove('slide');
      this.slideContainer.classList.remove('appleHealth');
      this.slideContainer.classList.remove('infinity');
      this.slideContainer.classList.remove('playercard');
      this.slideContainer.classList.remove('set');
      this.slideContainer.classList.add('animation');
    }
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
