import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesgamesService {

  private urlData = environment.urlData;
  constructor(private http: HttpClient) { }
}
