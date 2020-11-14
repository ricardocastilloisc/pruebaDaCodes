import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataTeam } from '../intefaces/teams.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServicesteamsService {
  private urlData = environment.urlData;

  constructor(private http: HttpClient) {}
  getTeams(): Observable<any> {
    return this.http.get(this.urlData + 'teams.json');
  }
}
