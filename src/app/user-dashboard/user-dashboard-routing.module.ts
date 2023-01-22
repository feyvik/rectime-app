import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDashboardPage } from './user-dashboard.page';
import { NotificationComponent } from '../notification/notification.component';
import { FeedsComponent } from '../feeds/feeds.component';
import { SportInfoComponent } from '../sport-info/sport-info.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'feeds',
    pathMatch: 'full',
  },
  {
    path: 'feeds',
    component: UserDashboardPage,
    children: [
      {
        path: '',
        component: FeedsComponent,
      },
    ],
  },
  {
    path: 'notification',
    component: NotificationComponent,
  },
  {
    path: 'sport-info',
    component: SportInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardPageRoutingModule {}
