import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Sport } from '../_models/sport';

@Injectable({ providedIn: 'root' })
export class SportService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Sport[]>(`${environment.apiUrl_Vietsens}/api/v1/sportall`);
  }
  getPagination(start: number, limit: number) {
    return this.http.get<Sport[]>(`${environment.apiUrl_Vietsens}/api/v1/sports?start=${start}&limit=${limit}`);
  }
  update(sport: Sport) {
    return this.http.put(`${environment.apiUrl_Vietsens}/api/v1/sport/${sport.sportId}`, sport);
  }
  create(sport: Sport) {
    return this.http.post(`${environment.apiUrl_Vietsens}/api/v1/sport`, sport);
  }
  getById(sportId: number) {
    return this.http.get<Sport>(`${environment.apiUrl_Vietsens}/api/v1/sport/${sportId}`);
  }
  removeById(sportId: number) {
    return this.http.delete<Sport>(`${environment.apiUrl_Vietsens}/api/v1/sport/${sportId}`);
  }
}
