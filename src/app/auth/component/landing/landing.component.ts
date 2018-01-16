import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../service/auth.service';

import { Configuration } from '../../../utils/configuration';


@Component({
  selector: 'landing-auth',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  signInUrl: string = `${Configuration.authorizeUrl}?client_id=${Configuration.applicationId}&response_type=code&scope=launch/patient+user/*.*+patient/*.*&redirect_uri=${Configuration.redirectUrl}&state=xyz&aud=${Configuration.platformUrl}`;

}
