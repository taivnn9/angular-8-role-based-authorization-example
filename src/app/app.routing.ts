import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { QuanTriComponent } from './quan-tri/quan-tri.component';
import { QuanTriRoutingModule } from './quan-tri/quan-tri-routing';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { Role } from './_models';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: QuanTriComponent,
    canActivate: [AuthGuard],
    children: [
      //{
      //  path: '',
      //  loadChildren: () => QuanTriRoutingModule
      //},
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: {
          roles: [Role.Admin]
        }
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

//export const appRoutingModule = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
