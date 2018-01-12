import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectComponent } from './component/redirect/redirect.component';
import { AuthComponent } from './component/auth/auth.component';
import { PatientListComponent } from './component/patient-list/patient-list.component';


const routes: Routes = [
  { path:'', redirectTo:'auth', pathMatch:'full' },
  { path: 'redirect', component: RedirectComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'patient', component: PatientListComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
