import { Component } from '@angular/core';
import { NumrandomService } from '../ServiceCollections/numrandom.service';

@Component({
  selector: 'app-serviceuser2',
  templateUrl: './serviceuser2.component.html',
  styleUrls: ['./serviceuser2.component.css'],
  providers:[NumrandomService] // gives different random numbers acst as service only operfom for numrandomservice
})
export class Serviceuser2Component {
  DataFromService:any;
  constructor(private randomservice:NumrandomService){
    this.DataFromService=randomservice.data;
  }
}
