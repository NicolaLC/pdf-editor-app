import { Signature } from './../models/signature';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  public get(url: string): Observable<Signature[]> {
    /** @todo call rest server */
    // return this.http.get(...)
    return of([new Signature('Mario', 'Rossi'), new Signature('Paola', 'Bianchi')]);
  }
}
