import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CookieHandler } from './service/cookie.service';

const routes: Routes = [
  { path:'', redirectTo:'auth/landing', pathMatch:'full' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService, CookieHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
