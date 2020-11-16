import { Component, OnInit } from '@angular/core';
import { ContactMethod, Customer } from './pay.interface';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  customers: Customer[] = [];
  ContactMethod = ContactMethod;

  ngOnInit() {
    // this.simulateExistingUser();
  }

  onCustomerAdded(customer: Customer) {
    this.customers.push(customer);
  }

  removeCustomer(index: number) {
    this.customers.splice(index, 1);
  }

  private simulateExistingUser() {
    const mockCustomer = {email: 'aa@aa.fr', contactMethod: ContactMethod.MAIL};
    this.customers.push(mockCustomer);
  }
}
