import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileBy(username): Observable<Object> {
    return this.http.get(mainUrl + '/api/mhs/' + username);
  }
  createProfile(mhs): Observable<Object> {
    return this.http.post(
      mainUrl + '/api/mhs/',
      mhs);
  }
  updateProfile(id, mhs): Observable<Object> {
    return this.http.put(
      mainUrl + '/api/mhs/' + id,
      mhs)
  }
}
