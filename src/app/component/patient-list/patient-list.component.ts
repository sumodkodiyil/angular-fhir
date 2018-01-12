import { Component, OnInit } from '@angular/core';

import { FhirService } from '../../service/fhir.service';
import { Patient } from '../../model/patient';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor( private fhirService: FhirService) {}

  ngOnInit() {
    this.getPatientList();
  }

  patientList: Patient[] = [];
  
  getPatientList(): void{
    this.fhirService.getAutorizedPatient().subscribe(
      response => this.parseResponse(response)
    );
  }

  parseResponse(response): void{
    response.entry.forEach(patient => {
      this.patientList.push(new Patient(patient.resource.id, patient.resource.name[0].given, patient.resource.gender, patient.resource.birthDate));
    });
  }

}
