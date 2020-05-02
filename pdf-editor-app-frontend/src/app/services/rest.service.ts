import { Signature } from './../models/signature';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string): Observable<Signature[]> {
    /** @todo call rest server */
    return this.http.get<Signature[]>(`${environment.api}/signatures/all`);
  }
}
