import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-fomvalidation',
  templateUrl: './fomvalidation.component.html',
  styleUrls: ['./fomvalidation.component.css']
})
export class FomvalidationComponent {

  Countries:string[]=["INDIA","USA","CHINA","RUSSIA","NEPAL","JAPAN"];
  // country:string="";
  // states:string[]=["delhi",'ap','TS','MH'];
  // setState(e:any){
  //   console.log(this.); 
  // }
}
