import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/home/home').then((m) => m.Home),
  },
  {
    path: 'counter',
    loadComponent: () => import('./screens/counter/counter').then((m) => m.Counter),
  },
  {
    path: 'todos',
    loadComponent: () => import('./screens/todos/todos').then((m) => m.Todos),
  },
];
