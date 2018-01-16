import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Configuration } from '../../utils/configuration';
import { Constants } from '../../utils/constants';

import { CookieHandler } from '../../service/cookie.service';



@Injectable()
export class PatientService {

  constructor( 
    private http:HttpClient,
    private cookieHandler: CookieHandler
   ) { }

  getAutorizedPatient(): Observable<any>{
    return this.http.get(Configuration.fhirEndPoint + '/patient', this.getheader());
  }

  getPatient(id: string): Observable<any>{
    return this.http.get(Configuration.fhirEndPoint+ '/patient/' + id + '?_include=singleton', this.getheader());
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
