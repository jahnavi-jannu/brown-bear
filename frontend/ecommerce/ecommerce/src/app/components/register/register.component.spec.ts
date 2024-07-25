import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customerFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerFormGroup = this.fb.group({
      customer: this.fb.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Password: ['', Validators.required],
        MobileNumber: ['', Validators.required]
      })
    });
  }

  // Getter methods for easy access in the template
  get firstName() { return this.customerFormGroup.get('customer.FirstName'); }
  get lastName() { return this.customerFormGroup.get('customer.LastName'); }
  get email() { return this.customerFormGroup.get('customer.Email'); }
  get password() { return this.customerFormGroup.get('customer.Password'); }
  get mobilenumber() { return this.customerFormGroup.get('customer.MobileNumber'); }

  onSubmit(): void {
    // Handle the form submission logic
    if (this.customerFormGroup.valid) {
      console.log(this.customerFormGroup.value);
    }
  }
}
