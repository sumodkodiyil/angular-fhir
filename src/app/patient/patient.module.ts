import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PatientListComponent } from './component/patient-list/patient-list.component';
import { PatientDetailComponent } from './component/patient-detail/patient-detail.component';

import { PatientService } from './service/patient.service';
import { PatientComponent } from './component/patient/patient.component';

const routes: Routes = [
  { path:'',component: PatientComponent, children: [
    { path: 'list', component: PatientListComponent },
    { path: ':id', component: PatientDetailComponent }
  ]}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PatientListComponent,
    PatientDetailComponent,
    PatientComponent
  ],
  providers: [ PatientService ]
})
export class PatientModule { }
