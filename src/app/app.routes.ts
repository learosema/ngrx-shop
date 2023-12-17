import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/1', pathMatch: 'full'},
  {path: ':page', component: HomeComponent, pathMatch: 'full'},
];
