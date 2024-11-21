import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [ 
    { path: 'app', component:AppComponent},
    { path: '', redirectTo: '/app.component', pathMatch: 'full' }, // redirecting default url 
  ];
