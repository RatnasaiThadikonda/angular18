import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserLayoutComponent } from '../layout/user-layout/user-layout.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingsComponent } from './settings/settings.component';

export const USER_ROUTES: Routes = [
//   { path: '', component: ProfileComponent }
{ 
    path: '', 
    component: UserLayoutComponent, 
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: '**', redirectTo: 'profile' } 

    ]
  }
];
