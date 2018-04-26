import { RouterModule, Routes } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SettingsComponent } from './settings/settings.component';



const pagesRoutes: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
          { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: { title: 'Progress'} },
          { path: 'graficas1', component: Graficas1Component, data: { title: 'Graficas'} },
          { path: 'settings', component: SettingsComponent, data: { title: 'Ajustes'} },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

