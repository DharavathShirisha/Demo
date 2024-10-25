import { Component } from '@angular/core';
import { ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ValidationErrors,FormBuilder, FormGroup   } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-customvalidator',
  templateUrl: './customvalidator.component.html',
  styleUrls: ['./customvalidator.component.css']
})
export class CustomvalidatorComponent {
   emp_form_reg: FormGroup;
   constructor(private form_builer:FormBuilder){
     this.emp_form_reg = this.form_builer.group({
      FName:['',{
        validators: [ createPasswordStrengthValidator()],
        //asyncValidators: [ ... array of asynchronous validators ...]
        updateOn:  'blur'
    }],
      MName:['',[Validators.required]],
      LName:['',[Validators.required]],
      dob:['',[Validators.required]],
      age:[this.age],
      gender:['',[Validators.required]],
      role:['',[Validators.required]],
      Password:['',[Validators.required]]
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
   console.log(this.emp_form_reg.value);
  }
   else{
    console.log('there is some issue with the logic')
    }
   }

  }
  export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}  
