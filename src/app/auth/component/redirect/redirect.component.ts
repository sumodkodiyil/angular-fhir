import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { CookieHandler } from '../../../service/cookie.service';

import { AuthorizationCode } from '../../model/auth-code';
import { AccessTokenRequest } from '../../model/access-token-request';
import { AccessTokenResponse } from '../../model/access-token-response';
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cookieHandler: CookieHandler,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAuthCode();
  }

  authCode: AuthorizationCode;
  accessTokenRequest: AccessTokenRequest;

  getAuthCode(): void {
    this.authCode = { authCode: this.route.snapshot.queryParams["code"] };
    this.accessTokenRequest = new AccessTokenRequest(this.authCode);
    this.authService.getAccessToken(this.accessTokenRequest).subscribe(
      response => {
        this.setCookieAndRedirect(response);
        console.log(this.cookieHandler.getCookie('hhf'));
      });

  }

  setCookieAndRedirect(accesTokenResponse: AccessTokenResponse): void {
    this.cookieHandler.setCookie(Constants.authCookieName, accesTokenResponse.access_token, accesTokenResponse.expires_in);
    this.router.navigateByUrl('/patient/list');
  }

}
