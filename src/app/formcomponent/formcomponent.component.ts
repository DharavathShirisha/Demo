import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent {
  paraStyle={
   
  }
 
@HostListener('click') myclick(){
   this.paraStyle={
     color:'blue',
   }
  }
 
  @HostListener('click') myclick1(){
    this.paraStyle={
     
    }
   }
   
   country:string[]=["USA","China","Nepal","India"];
   state:string[]=["Bhiar","UP","MP","West Bengal"];
  //  CT="";
 
  //  count:string ="";
 
}
