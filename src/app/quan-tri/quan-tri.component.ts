import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../_models';
import { AuthenticationService } from '../_services';
import { environment } from '@environments/environment';


@Component({
  selector: 'app-quan-tri',
  templateUrl: './quan-tri.component.html'
})
export class QuanTriComponent{

  swaggerUI: string;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
    });
  }
  ngOnInit(): void {
    this.swaggerUI = environment.apiUrl_Vietsens + "/swagger/index.html";
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
