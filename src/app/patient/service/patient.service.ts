import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Configuration } from '../../utils/configuration';
import { Constants } from '../../utils/constants';

import { CookieHandler } from '../../service/cookie.service';
import { ErrorService } from '../../service/error.service';



@Injectable()
export class PatientService {

  constructor( 
    private http:HttpClient,
    private cookieHandler: CookieHandler,
    private errorService: ErrorService
   ) { }

  getAutorizedPatient(): Observable<any>{
    return this.http.get(Configuration.fhirEndPoint + '/patient', this.getheader()).pipe(
      catchError(this.errorService.handleError('getAutorizedPatient'))
    );
  }

  getPatient(id: string): Observable<any>{
    return this.http.get(Configuration.fhirEndPoint+ '/patient/' + id + '?_include=singleton', this.getheader()).pipe(
      catchError(this.errorService.handleError(`getPatient id=${id}`))
    );
  }

  private getheader(): any{
    const accessToken  = this.cookieHandler.getCookie(Constants.authCookieName);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${accessToken}`
     })
    };
    return httpOptions;
  }

}
