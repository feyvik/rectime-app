import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';

import { UserDashboardPage } from './user-dashboard.page';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NotificationComponent } from '../notification/notification.component';
import { FeedsComponent } from '../feeds/feeds.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { CardFeedsComponent } from '../card-feeds/card-feeds.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboardPageRoutingModule,
    SwiperModule,
  ],
  declarations: [
    UserDashboardPage,
    SidebarComponent,
    NotificationComponent,
    FeedsComponent,
    CarouselComponent,
    CardFeedsComponent,
  ],
})
export class UserDashboardPageModule {}
