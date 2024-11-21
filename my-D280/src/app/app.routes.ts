import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [ 
    { path: 'app', component: AppComponent}, // setting up routing for app homepage
    { path: '', redirectTo: '/app', pathMatch: 'full' }, // redirecting default url 
  ];
