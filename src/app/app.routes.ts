import { Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfileComponent } from './user/profile/profile.component';

export const routes: Routes = [
    { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) },
    { path: 'user', loadChildren: () => import('./user/user.routes').then(m => m.USER_ROUTES) },
    // { path: 'admin', component: DashboardComponent },
    // { path: 'user', component: ProfileComponent },
    { path: '', redirectTo: 'user', pathMatch: 'full' }, // Default Route
    { path: '**', redirectTo: 'user', pathMatch: 'full' }
  ];
  
