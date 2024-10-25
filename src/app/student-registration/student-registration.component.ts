import { Component } from '@angular/core';
import { ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ValidationErrors,FormBuilder, FormGroup   } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent {

  emp_form_reg: FormGroup;
  constructor( private form_builder: FormBuilder) {
    this.emp_form_reg = this.form_builder.group({
      First_name: ['', Validators.required],
      Middle_name: ['', Validators.required],
      Last_name: ['', Validators.required],
      dob:['', Validators.required],
      age:[this.age],
      gender:[ '', Validators.required],
      role:['', Validators.required]
      // email: ['', [Validators.required, Validators.email]],   

      // message: ['', Validators.required] 
    })
  }
    age:String='0';
    dobchanged(e:any){
      let dob_year=new Date(e.target.value).getFullYear();
      let cYear=new Date().getFullYear()-dob_year;
      this.age=String(cYear);
      this.emp_form_reg.patchValue({age:this.age})
    }

  

  onSubmit() {
    console.log(this. emp_form_reg.errors);
    console.log(this. emp_form_reg.valid);
    if (this. emp_form_reg.valid)   
  {
      // Handle form submission
      console.log(this. emp_form_reg.value);
    }
  }
}
