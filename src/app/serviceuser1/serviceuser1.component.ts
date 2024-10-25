import { Component } from '@angular/core';
import { NumrandomService } from '../ServiceCollections/numrandom.service';

@Component({
  selector: 'app-serviceuser1',
  templateUrl: './serviceuser1.component.html',
  styleUrls: ['./serviceuser1.component.css'],
  providers:[NumrandomService]
})
export class Serviceuser1Component {
  serviceData:any;
  constructor(private randomservice:NumrandomService){
    this.serviceData=randomservice.data;
  }
}
