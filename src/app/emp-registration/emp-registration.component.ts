import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidationErrors,FormBuilder, FormGroup   } from '@angular/forms';
@Component({
  selector: 'pp-emp-registaration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent {
   emp_form_reg: FormGroup
 constructor(private form_builer:FormBuilder){
   this.emp_form_reg = this.form_builer.group({
    FName:['',[Validators.required]],
    MName:['',[Validators.required]],
    LName:['',[Validators.required]],
    dob:['',[Validators.required]],
    age:[this.age],
    gender:['',[Validators.required]],
    role:['',[Validators.required]]
   })
 }
 age:string='0';

 dobChanged(e:any){

 let dob_year = new Date(e.target.value).getFullYear();
 let cYear = new Date().getFullYear()-dob_year;
 this.age = String(cYear);
 this.emp_form_reg.patchValue({age:this.age});
 
 }
 submitData(){
  if(this.emp_form_reg.valid){
 console.log(this.emp_form_reg.value);}
 else{
  console.log('there is some issue with the logic')
 }
 }

}