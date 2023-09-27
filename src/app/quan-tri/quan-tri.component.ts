import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../_models';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-quan-tri',
  templateUrl: './quan-tri.component.html',
  styleUrls: ['./quan-tri.component.less']
})
export class QuanTriComponent{


  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    //this.authenticationService.currentUser.subscribe(x => {
    //  console.log(this.currentUser)
    //  this.currentUser = x
    //});
  }
  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
