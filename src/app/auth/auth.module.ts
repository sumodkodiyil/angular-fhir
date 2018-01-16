import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './component/landing/landing.component';
import { AuthComponent } from './component/auth/auth.component';
import { RedirectComponent } from './component/redirect/redirect.component';

import { AuthService } from './service/auth.service';



const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'landing', component: LandingComponent },
    { path: 'redirect', component: RedirectComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthComponent,
    RedirectComponent,
    LandingComponent
  ],
  providers: [ AuthService ]
})
export class AuthModule { }
