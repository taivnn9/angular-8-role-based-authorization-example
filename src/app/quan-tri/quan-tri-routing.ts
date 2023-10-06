import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin';
import { HomeComponent } from '../home';
import { AuthGuard } from '../_helpers';
import { Role } from '../_models';



const QuanTriRoutes: Routes = [
  {
    path: '',
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
  },
  {
    path: '**',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(QuanTriRoutes)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: [],
})
export class QuanTriRoutingModule { }
