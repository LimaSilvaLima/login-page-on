import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard'; // <-- garantir o caminho correto

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'signup', loadComponent: () => import('./pages/signup/signup').then(m => m.SignupComponent) },
  {
    path: 'user',
    loadComponent: () => import('./pages/user/user').then(m => m.User), // <-- vírgula aqui
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];