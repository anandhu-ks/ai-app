import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chat',
    loadComponent: () =>
      import('@/components').then((e) => e.ChatInterfaceComponent),
  },
];
