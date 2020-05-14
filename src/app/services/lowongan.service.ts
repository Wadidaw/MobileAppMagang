import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';

@Injectable({
  providedIn: 'root'
})
export class LowonganService {

  constructor(private http: HttpClient) { }
  getAllLowongans(): Observable<Object> {
    return this.http.get(mainUrl + '/api/lowongan');
  }
  getLowongan(prodi): Observable<Object> {
    return this.http.get(mainUrl + '/api/lowongan/' + prodi);
  }
}
