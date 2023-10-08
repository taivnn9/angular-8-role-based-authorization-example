import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { SportService } from '../_services/sport.service';
import { Sport } from '../_models/sport';
import { ToastrService } from 'ngx-toastr';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  currentSport: Sport;
  sports: Sport[]

  constructor(
    private sportService: SportService,
    private toastr: ToastrService,
  ) {
    //this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loading = true;
    if (!this.currentSport) {
      this.currentSport = {} as Sport; //here was the mistake which I accidentally made.
      //and it was assigning my object to null
    }
    this.loadSports()
  }
  loadSports() {
    this.sportService.getAll().toPromise().then(
      (response: any) => {
        this.sports = response.data;
        this.loading = false;
      },
      error => {
        this.toastr.error(`Lỗi khi lấy danh sách môn thể thao`);
      })
  }
  remove(sport: Sport) {
    const sportName: string = sport.name;
    this.loading = true;
    this.sportService.removeById(sport.sportId).toPromise().then(
      (response: any) => {
        this.loading = false;
        this.loadSports()
      },
      error => {
        this.loading = false;
        this.toastr.error(`Lỗi khi xóa  môn thể thao ${sportName}`);
      })
  }
  openModal(sport: Sport) {

    if (sport == null) {
      this.currentSport = new Sport;
    } else {
      const sportName: string = sport.name;
      this.loading = true;
      this.sportService.getById(sport.sportId).toPromise().then(
        (response: any) => {
          this.loading = false;
          this.currentSport = response.data;
        },
        error => {
          this.loading = false;
          this.toastr.error(`Lỗi khi lấy chi tiết môn thể thao ${sportName}`);
        })
    }
  }


  closeMoal() {


    const sportName: string = this.currentSport.name;
    this.loading = true;

    if (this.currentSport.sportId) {
      this.sportService.update(this.currentSport).toPromise().then(
        (response: any) => {
          this.loading = false;
          this.toastr.info(`Hoàn thành Cập nhật môn thể thao ${sportName}`);
          this.loadSports()
        },
        error => {
          this.loading = false;
          this.toastr.error(`Lỗi khi Cập nhật môn thể thao ${sportName}`);
        })
    } else {
      this.sportService.create(this.currentSport).toPromise().then(
        (response: any) => {
          this.loading = false;
          this.toastr.info(`Hoàn thành Tạo mới môn thể thao ${sportName}`);
          this.loadSports()
        },
        error => {
          this.loading = false;
          this.toastr.error(`Lỗi khi Tạo mới môn thể thao ${sportName}`);
        })
    }


  }

}
