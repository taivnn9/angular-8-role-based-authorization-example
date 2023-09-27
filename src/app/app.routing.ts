import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { QuanTriComponent } from './quan-tri/quan-tri.component';
import { QuanTriRoutingModule } from './quan-tri/quan-tri-routing';

const routes: Routes = [
  {
    path: 'quan-tri',
    component: QuanTriComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      loadChildren: () => QuanTriRoutingModule
    }]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'quan-tri' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
