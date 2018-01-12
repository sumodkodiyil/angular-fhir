import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Configuration } from '../utils/configuration';
import { Constants } from '../utils/constants';

import { CookieHandler } from '../service/cookie.service';



@Injectable()
export class FhirService {

  constructor( 
    private http:HttpClient,
    private cookieHandler: CookieHandler
   ) { }

  getAutorizedPatient():Observable<any>{
    const accessToken  = this.cookieHandler.getCookie(Constants.authCookieName);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${accessToken}`
     })
    };
    return this.http.get(Configuration.fhirEndPoint + '/patient', httpOptions);
  }

}
