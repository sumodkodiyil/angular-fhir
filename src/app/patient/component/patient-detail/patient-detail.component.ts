import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../model/patient';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPatient();
  }

  contextPatient:Patient;

  getPatient(): void{
    const patientId = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(patientId).subscribe(
      response => this.parseResponse(response)
    );  
  }
  
  parseResponse(response): void{
    this.contextPatient = new Patient(response.id, response.name[0].given, response.gender, response.birthDate);
  }
}
