import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Configuration } from '../../utils/configuration';
import { AccessTokenRequest } from '../model/access-token-request';
import { AccessTokenResponse } from '../model/access-token-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : 'Basic YTIwNmE3NzEtYWJmYi00Mjk3LTkwZmEtMTEyODMzNWI5MjQ1OmY1MTc1ZTRiLWI1OTgtNGQyNi05MzI4LTYxNGZmM2U3YjZlYg=='
 })
};

@Injectable()
export class AuthService {

  constructor( private http: HttpClient) { }

  getAccessToken(request: AccessTokenRequest): Observable<AccessTokenResponse> {
    return this.http.post<AccessTokenResponse>(Configuration.accessTokenUrl, request.getFormDataUrlEncoded(), httpOptions);
  }
  
}
