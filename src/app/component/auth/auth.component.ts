import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';

import { Configuration } from '../../utils/configuration';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  signInUrl: string = `${Configuration.authorizeUrl}?client_id=${Configuration.applicationId}&response_type=code&scope=user%2f*.*&redirect_uri=${Configuration.redirectUrl}&state=xyz&aud=${Configuration.platformUrl}`;

}
