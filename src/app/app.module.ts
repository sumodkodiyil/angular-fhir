import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { RedirectComponent } from './component/redirect/redirect.component';
import { AuthComponent } from './component/auth/auth.component';
import { PatientListComponent } from './component/patient-list/patient-list.component';

import { AuthService } from './service/auth.service';
import { CookieHandler } from './service/cookie.service';
import { FhirService } from './service/fhir.service';

import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RedirectComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService, CookieService, CookieHandler, FhirService],
  bootstrap: [AppComponent]
})
export class AppModule { }
