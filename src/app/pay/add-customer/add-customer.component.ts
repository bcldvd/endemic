import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactMethod, Customer } from '../pay.interface';

const phoneRegex = '[0-9 ]{12}';
const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  @Output() customerAdded  = new EventEmitter<Customer>();

  customer: FormGroup;
  ContactMethod = ContactMethod;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customer = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(phoneRegex)]],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]]
    });
  }

  onSubmit({ value }: { value: Customer}, contactMethod: ContactMethod) {
    const customer: Customer = {
      ...value,
      contactMethod
    };

    this.customerAdded.emit(customer);
    this.customer.reset();
  }
}
