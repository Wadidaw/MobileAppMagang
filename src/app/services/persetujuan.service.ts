import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';
@Injectable({
  providedIn: 'root'
})
export class PersetujuanService {

  constructor(private http: HttpClient) { }

  createPersetujuan(persetujuan): Observable<Object> {
    return this.http.post(
      mainUrl + '/api/persetujuan/',
      persetujuan);
  }
  updatePersetujuan(id, persetujuan): Observable<Object> {
    return this.http.put(
      mainUrl + '/api/persetujuan/' + id,
      persetujuan)
  }
}
