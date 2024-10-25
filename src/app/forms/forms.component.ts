import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group({
      street:['', Validators.required],
      city:  ['', Validators.required],
      state: ['', Validators.required],
      zip:  ['', Validators.required],
      }),
      // email: ['', [Validators.required, Validators.email]],   

      // message: ['', Validators.required] 
    })
    }

  

  onSubmit() {
    console.log(this.myForm.errors)
    console.log(this.myForm.valid);
    if (this.myForm.valid)   
  {
      // Handle form submission
      console.log(this.myForm.value);
    }
  }

  }

//import { AbstractControl, ValidationErrors } from '@angular/forms';

// export function passwordStrengthValidator(): (control: AbstractControl) => ValidationErrors | null {
//   return (control: AbstractControl): Promise<ValidationErrors> | null => {
//     const value = control.value;
//     if (!value) {
//       return null;
//     }

//     const hasUpperCase = /[A-Z]/.test(value);
//     const hasLowerCase = /[a-z]/.test(value);
//     const hasNumber = /[0-9]/.test(value);

//     const passwordValid = hasUpperCase && hasLowerCase && hasNumber && value.length >= 8;

//     return !passwordValid ? { passwordStrength: true } : null;
//   };
// }

//import { AbstractControl, ValidationErrors } from '@angular/forms';


// export function customValidator(control: AbstractControl): ValidationErrors | null {
//   // Your custom validation logic here
//   const value = control.value;

//   // Example: Check if the value is even
//   if (value % 2 !== 0) {
//     return { 'evenNumber': true }; // Return an error object
//   }

//   return null; // Return null if valid
// }