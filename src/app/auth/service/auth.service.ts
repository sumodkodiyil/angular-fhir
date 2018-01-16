import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ErrorService } from '../../service/error.service';

import { Configuration } from '../../utils/configuration';
import { AccessTokenRequest } from '../model/access-token-request';
import { AccessTokenResponse } from '../model/access-token-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : 'Basic ' + btoa(Configuration.applicationId + ':' + Configuration.appSecret)
 })
};

@Injectable()
export class AuthService {

  constructor( 
    private http: HttpClient,
    private errorService: ErrorService) { }

  getAccessToken(request: AccessTokenRequest): Observable<AccessTokenResponse> {
    return this.http.post<AccessTokenResponse>(Configuration.accessTokenUrl, request.getFormDataUrlEncoded(), httpOptions).pipe(
      catchError(this.errorService.handleError<AccessTokenResponse>('getAccessToken'))
    );
  }
  
}
