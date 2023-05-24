import { Routes } from '@angular/router';
import { HomeComponent } from './core';
import { MfeIframeComponent } from '@angular-architects/demo/mfe-iframe';
import { LayoutComponent } from './layout.component';


export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'booking',
        loadChildren: () => import('./booking')
      },
      {
        path: 'mfe-iframe/:url',
        component: MfeIframeComponent,
        /* data: {
          url: 'http://localhost:4200/booking/flight/edit/1'
        } */
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];
