import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./pages/signup/signup').then(m => m.SignupComponent) },
  { path: '**', redirectTo: '' }
];