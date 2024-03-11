import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  addresses: FormArray;

  constructor(private formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      username: ['',
        {
          validators: [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
          updateOn: 'change'
        }],
      email:['',[Validators.required,Validators.email]],
      password: ['', [Validators.required,]],
      //dob: ['',[Validators.required,Validators.]]
      age: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dob: [Validators.required],
      number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/),Validators.minLength(10),Validators.maxLength(10)]),
      addresses: this.formBuilder.array([])
    },
      // { updateOn: 'submit' }
    );
    

    
    this.addresses = this.registerForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressFormGroup = this.formBuilder.group({
      city: ['', Validators.required],
      pin: ['', Validators.required]
    });
    this.addresses.push(addressFormGroup);
  }

  removeAddress(index: number) {
    this.addresses.removeAt(index);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}


// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {

//   registerForm: FormGroup;

//   constructor(private formBuilder: FormBuilder) {

//     this.registerForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       console.log(this.registerForm.value.username);
//       this.registerForm.reset();
//     }
//   }
// }